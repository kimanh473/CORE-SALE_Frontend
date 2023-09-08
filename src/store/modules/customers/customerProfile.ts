import {defineStore} from "pinia";
import dayjs from "dayjs";

import {
    getAllCustomerProfileApi,
    createCustomerProfileApi,
    getDetailCustomerProfileApi,
    updateCustomerProfileApi,
    deleteCustomerProfileApi,
    getLastCodeCustomerApi,
    getCheckAccountCustomerExistApi
} from '../../../services/CustomerProfileServices/customerProfile.services'


export const useCustomerProfile = defineStore("CustomerProfile", {
    state: () => ({
        listCustomerProfile: [] as DataCustomerProfile[],
        detailCustomerProfile: {} as DataCustomerProfile,
        idState:[],
        idWard:[],
        idDistrict:null,
        birth_day_dd_mm_yy: null,
        last_code: '',
        is_default: '',
        is_default_pay: '',
        account_exist: ''
    }),
    getters: {
        getListCustomerProfilePagination: (state: any) => {
            return (payload: any) => state.listCustomerProfile = payload?.map((item: any) => ({
                id: item.id,
                code: item.code,
                profile_code: item.profile_code,
                name: item.name,
                birth_day: item.birth_day,
                gender: item.gender,
                phone: item.phone,
                email: item.email,
                detail_delivery_address: item.detail_delivery_address,
                delivery_address: item.delivery_address,
                list_address: item.list_address,
                list_pay_address: item.list_pay_address,
            }))
        },
        getDetailCustomerProfile: (state: any) => {
            return (payload: any) => {
                state.detailCustomerProfile = payload
                //state.idState = payload.detail_delivery_address?.map((item:any)=>item.address_state_id)
                state.idWard = payload.detail_delivery_address?.map((item:any)=>item.address_district_id)
                state.is_default = payload.detail_delivery_address?.map((item:any)=>Number(item.is_default)).indexOf(1).toString()
                state.is_default_pay = payload.detail_pay_address?.map((item:any)=>Number(item.is_default_pay)).indexOf(1).toString()
                state.birth_day_dd_mm_yy = dayjs(payload.birth_day)
                /*state.idState = Array.prototype.reverse.call(state.idStateRev)*/
            }
        },
        getCodeCustomer: (state: any) => {
            return (payload: any) => {
                state.last_code = payload
            }
        },
        checkAccountExist: (state: any) => {
            return (payload: any) => {
                state.account_exist = payload
            }
        }

    },

    actions: {
        getAllCustomerProfilePaginateAction() {
            getAllCustomerProfileApi()
                .then((payload: any) => {
                    let res = payload?.data?.data?.data;
                    this.getListCustomerProfilePagination(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        getLastCodeCustomer() {
            getLastCodeCustomerApi()
                .then((payload: any) => {
                    let res = payload?.data;
                    this.getCodeCustomer(res)
                })
        },
        getCheckAccountCustomerExist(code: any) {
            getCheckAccountCustomerExistApi(code)
                .then((payload: any) => {
                    let res = payload?.data;
                    this.checkAccountExist(res)
                })
        },
        async createCustomerProfileAction(
            data: Object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await createCustomerProfileApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công");
                        router.push('/list-customer-profile')
                        // handleCloseCreate();
                        EndTimeLoading();
                    }
                })
                .catch((err) => {
                    // this.messageError = err.response.data.messages
                    // console.log(this.messageError);
                    console.log(err);
                    let arrMess = err.response.data.messages;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                });
        },
        async getDetailCustomerProfileAction(id: number) {
           await getDetailCustomerProfileApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getDetailCustomerProfile(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async updateCustomerProfileAction(
            id: number,
            data: Object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            //handleCloseCreatePayAddressWhenSS: Function
        ) {
            await updateCustomerProfileApi(id, data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Cập nhật thành công");
                        EndTimeLoading();
                        router.push('/list-customer-profile')
                        //handleCloseCreatePayAddressWhenSS();
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

        async createPayAddressAction(
            id: number,
            data: Object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            handleCloseCreatePayAddressWhenSS: Function
        ) {
            await updateCustomerProfileApi(id, data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Cập nhật thành công");
                        EndTimeLoading();
                        handleCloseCreatePayAddressWhenSS();
                        this.getDetailCustomerProfileAction(id)
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

        deleteCustomerProfileAction(id: number, toast: any, EndTimeLoading: Function, handleCloseConfirm: Function) {
            deleteCustomerProfileApi(id)
                .then((res) => {
                    if (res.data.status == "success") {
                        toast.success("Xóa thành công", 500);
                        this.getAllCustomerProfilePaginateAction()
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

    }

})