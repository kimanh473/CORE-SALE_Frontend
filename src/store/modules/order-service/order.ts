import {defineStore} from "pinia";
import {
    getAllOrderApi
} from '../../../services/OrderServices/Order.services'


export const useOrder = defineStore("customerGroup", {
    state: () => ({
        listOrder: [] as Order[],
        detailOrder: {} as Order,
    }),
    getters: {
        getListOrderPagination: (state: any) => {
            return (payload: any) => state.listOrder = payload?.map((item: any) => ({
                id: item.id,
                code: item.code,
                customer_account_code: item.customer_account_code,
                discount_detail: item.discount_detail,
                transport_detail: item.transport_detail,
                web_code: item.web_code,
                address_country_id: item.address_country_id,
                address_state_id: item.address_state_id,
                address_district_id: item.address_district_id,
                address_ward_id: item.address_ward_id,
                address_detail: item.address_detail,
                user_created: item.user_created,
                auth_created: item.auth_created,
                customer_created: item.customer_created,
                json_product_detail: item.json_product_detail,
                created_at: item.created_at,
                updated_at: item.updated_at
            }))
        },
        getDetailOrder: (state: any) => {
            return (payload: any) => {
                state.detailOrder = payload
            }
        },
    },

    actions: {
        getAllOrderPaginateAction() {
            getAllOrderApi()
                .then((payload: any) => {
                    let res = payload?.data?.data?.data;
                    this.getListOrderPagination(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async getDetailGroupCustomerAction(id: number) {
            await getDetailGroupCustomerApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getDetailGroupCustomer(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async createGroupCustomerAction(
            data: Object,
            toast: any,
            EndTimeLoading: Function,
            handleCloseCreate: Function
        ) {
            await createGroupCustomerApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công");
                        EndTimeLoading();
                        handleCloseCreate();
                        this.getAllGroupCustomerPaginateAction()
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
        async updateGroupCustomerAction(
            id: number,
            data: Object,
            toast: any,
            EndTimeLoading: Function,
            handleCloseCreate: Function
        ) {
            await updateGroupCustomerApi(id,data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công");
                        EndTimeLoading();
                        handleCloseCreate();
                        this.getAllGroupCustomerPaginateAction()
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
        deleteGroupCustomerAction(id: number, toast: any, EndTimeLoading: Function, handleCloseConfirm: Function) {
            deleteGroupCustomerApi(id)
                .then((res) => {
                    if (res.data.status == "success") {
                        toast.success("Xóa thành công", 500);
                        this.getAllGroupCustomerPaginateAction()
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
        }

    }
});