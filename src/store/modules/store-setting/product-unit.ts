import { defineStore } from "pinia";
import { getAllProductUnitApi } from '../../../services/SettingStoreServices/productUnit.service'

export const useProductUnit = defineStore("ProductUnit", {
    state: () => ({
        listProductUnit: [] as DataUnit[],
    }),
    getters: {
        getListProductUnit: (state: any) => {
            return (payload: any) => state.listProductUnit = payload
        }
    },
    actions: {
        async getListProductUnitAction() {
            await getAllProductUnitApi()
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getListProductUnit(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
    },
})