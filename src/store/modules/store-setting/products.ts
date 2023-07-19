import { defineStore } from "pinia";
import { getAllProductsApi } from '../../../services/SettingStoreServices/product.service'

export const useProduct = defineStore("Products", {
    state: () => ({
        listProduct: [] as DataProduct[],
    }),
    getters: {
        getListProduct: (state: any) => {
            return (payload: any) => state.listProduct = payload
        }
    },
    actions: {
        async getListProductAction(perPage: number, page: number) {
            await getAllProductsApi(perPage, page)
                .then((payload: any) => {
                    let res = payload?.data?.data?.data
                    this.getListProduct(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
    },
})