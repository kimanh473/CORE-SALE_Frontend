import { defineStore } from "pinia";
import { getAdjustPriceApi } from '../../../services/SettingStoreServices/priceAdjust.service'

export const useAdjustPrice = defineStore("AdjustPrice", {
    state: () => ({
        listAdjustPrice: [] as DataAdjustPrice[],
    }),
    getters: {
        getListAdjustPrice: (state: any) => {
            return (payload: any) => state.listAdjustPrice = payload
        },
    },
    actions: {
        async getListAdjustPriceAction() {
            await getAdjustPriceApi()
                .then((payload: any) => {
                    let res = payload?.data?.data?.data
                    console.log(res);
                    this.getListAdjustPrice(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
    },
})