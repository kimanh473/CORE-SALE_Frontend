import {defineStore} from "pinia";

import {
    getAllCustomerAccountApi,
} from '../../../services/CustomerAccountServices/customerAccount.services'

export const useCustomerProfile = defineStore("CustomerAccount", {
    state: () => ({
        listCustomerAccount: [] as DataCustomerAccount[],
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
                state.detailCustomerProfile = payload
                //state.idState = payload.detail_delivery_address?.map((item:any)=>item.address_state_id)
                state.idWard = payload.detail_delivery_address?.map((item:any)=>item.address_district_id)
                state.is_default = payload.detail_delivery_address?.map((item:any)=>Number(item.is_default)).indexOf(1).toString()
                /*state.idState = Array.prototype.reverse.call(state.idStateRev)*/
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
                .catch((err) => {
                    console.log(err)
                });
        },

    }

})