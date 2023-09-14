import { defineStore } from "pinia";
import { getAdjustPriceApi, getdetailAdjustPriceApi } from '../../../services/SettingStoreServices/priceAdjust.service'

export const useAdjustPrice = defineStore("AdjustPrice", {
    state: () => ({
        listAdjustPrice: [] as DataAdjustPrice[],
        detailAdjustPrice: {} as DataAdjustPrice,
    }),
    getters: {
        getListAdjustPrice: (state: any) => {
            return (payload: any) => state.listAdjustPrice = payload
        },
        getDetailAdjustPrice: (state: any) => {
            return (payload: any) => state.detailAdjustPrice = payload
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
        async getDetailAdjustPriceAction(id: number) {
            await getdetailAdjustPriceApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    console.log(res);
                    this.getDetailAdjustPrice(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
    },
})