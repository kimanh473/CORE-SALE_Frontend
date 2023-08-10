import { defineStore } from "pinia";
import { GetAllCustomerProfileApi } from '../../../services/CustomerProfileServices/customerProfile.services'
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
            GetAllCustomerProfileApi()
                .then((payload: any) => {
                    let res = payload?.data?.data?.data;
                    console.log(res);
                    this.getListCustomerProfilePagination(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
    }

})