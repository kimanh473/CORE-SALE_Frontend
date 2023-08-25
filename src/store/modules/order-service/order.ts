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
        }
    }
});