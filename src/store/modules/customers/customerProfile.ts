import { defineStore } from "pinia";
import { getAllCustomerProfileApi, createCustomerProfileApi, updateCustomerProfileApi, deleteCustomerProfileApi} from '../../../services/CustomerProfileServices/customerProfile.services'
import {updateInventoryApi} from "@/services/InventoryServices/inventory.service";

export const useCustomerProfile = defineStore("CustomerProfile", {
    state: () => ({
        listCustomerProfile: [] as DataCustomerProfile[]
    }),
    getters: {
        getListCustomerProfilePagination: (state: any) => {
            return (payload: any) => state.listCustomerProfile = payload?.map((item: any) => ({
                id: item.id,
                code: item.code,
                name: item.name,
                birth_day: item.birth_day,
                gender: item.gender,
                phone: item.phone,
                detail_delivery_address: item.detail_delivery_address,
                delivery_address: item.delivery_address,
                list_address: item.list_address,
            }))
        },
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

        async updateCustomerProfileAction(
            id: number,
            data: Object,
            toast: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await updateCustomerProfileApi(id, data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Cập nhật thành công");
                        // handleCloseCreate();
                        EndTimeLoading();
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