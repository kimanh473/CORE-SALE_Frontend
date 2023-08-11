import { defineStore } from "pinia";
import { getAllCustomerProfileApi, createCustomerProfileApi} from '../../../services/CustomerProfileServices/customerProfile.services'
import {createWebApi} from "@/services/WebCatalogServices/webcatalog.service";
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
                address_detail: item.address_detail,
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


    }

})