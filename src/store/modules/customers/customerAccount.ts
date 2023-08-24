import {defineStore} from "pinia";

import {
    getAllCustomerAccountApi,
    getDetailCustomerAccountApi,
    createCustomerAccountApi,
    updateCustomerAccountApi,
    deleteCustomerAccountApi,
} from '../../../services/CustomerProfileServices/customerAccount.services'

import {changeStatusAccountApi} from "../../../services/AccountServices/passwordCustomer.service";


export const useCustomerAccount = defineStore("CustomerAccount", {
    state: () => ({
        listCustomerAccount: [] as DataCustomerAccount[],
        customerAccount: {} as DataCustomerAccount,
        detailCustomerAccount: {} as DataCustomerAccount,
        createStatus: ''
    }),
    getters: {
        getListCustomerAccountPagination: (state: any) => {
            return (payload: any) => state.listCustomerAccount = payload?.map((item: any) => ({
                id: item.id,
                code: item.code,
                status: item.status,
                username: item.username,
                fullname: item.fullname,
                email_company: item.email_company,
                email_personal: item.email_personal,
                phone: item.phone,
                web_code: item.web_code,
            }))
        },

        getDetailCustomerAccount: (state: any) => {
            return (payload: any) => {
                state.detailCustomerAccount = payload
            }
        },
    },

    actions: {
        getAllCustomerAccountPaginateAction() {
            getAllCustomerAccountApi()
                .then((payload: any) => {
                    let res = payload?.data?.data?.data;
                    this.getListCustomerAccountPagination(res)
                })
                .catch((err?:any) => {
                    console.log(err)
                });
        },
        async getDetailCustomerAccountAction(id: number) {
            await getDetailCustomerAccountApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getDetailCustomerAccount(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async createCustomerAccountAction(
            data: Object,
            toast: any,
            EndTimeLoading: Function,
            handleCloseCreate: Function
        ) {
            await createCustomerAccountApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công");
                        EndTimeLoading();
                        handleCloseCreate();
                        this.getAllCustomerAccountPaginateAction()
                    }
                })
                .catch((err) => {
                    // this.messageError = err.response.data.messages
                    // console.log(this.messageError);
                    console.log(err);
                    EndTimeLoading();
                    let arrMess = err.response.data.message;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                });
        },
        async updateCustomerAccountAction(
            id: number,
            data: Object,
            toast: any,
            EndTimeLoading: Function,
            handleCloseCreate: Function
        ) {
            await updateCustomerAccountApi(id, data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Cập nhật thành công");
                        EndTimeLoading();
                        handleCloseCreate();
                        this.getAllCustomerAccountPaginateAction()
                    }
                })
                .catch((err) => {
                    this.messageError = err.response.data.messages
                    console.log(err);
                    let arrMess = err.response.data.messages;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                });
        },
        deleteCustomerAccountAction(id: number, toast: any, EndTimeLoading: Function, handleCloseConfirm: Function) {
            deleteCustomerAccountApi(id)
                .then((res) => {
                    if (res.data.status == "success") {
                        toast.success("Xóa thành công", 500);
                        this.getAllCustomerAccountPaginateAction()
                    } else {
                        toast.error(res.data.messages, 500);
                    }
                    EndTimeLoading();
                    handleCloseConfirm();
                })
                .catch((err) => {
                    console.log(err);
                    handleCloseConfirm();
                    EndTimeLoading();
                });
        },
        changeStatusAccountAction(data: any, toast: any, EndTimeLoading: Function) {
            changeStatusAccountApi(data)
                .then((res: any) => {
                    console.log(res);
                    if (res?.data?.status == 'success') {
                        toast.success('Thay đổi trạng thái tài khoản thành công');
                        this.getAllCustomerAccountPaginateAction()
                        EndTimeLoading()
                    } else {
                        EndTimeLoading()
                        toast.warning(res.data.messages.title);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    let arrMess = err.response.data.messages;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                    EndTimeLoading()
                });
        },


    }

})