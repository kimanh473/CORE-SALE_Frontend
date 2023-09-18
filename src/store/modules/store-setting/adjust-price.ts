import { defineStore } from "pinia";
import { getAdjustPriceApi, getdetailAdjustPriceApi } from '../../../services/SettingStoreServices/priceAdjust.service'
import dayjs, { Dayjs } from 'dayjs'
export const useAdjustPrice = defineStore("AdjustPrice", {
    state: () => ({
        listAdjustPrice: [] as DataAdjustPrice[],
        detailAdjustPrice: {} as DataAdjustPrice,
        listPeriod: [] as Period[]
    }),
    getters: {
        getListAdjustPrice: (state: any) => {
            return (payload: any) => state.listAdjustPrice = payload
        },
        getDetailAdjustPrice: (state: any) => {
            return (payload: any) => {
                state.detailAdjustPrice = payload
                state.listPeriod = payload.json_period.map((item: Period) => ({
                    title: item.title,
                    date_start: dayjs(item.date_start),
                    date_end: dayjs(item.date_end),
                    listed_price: item.listed_price,
                    wholesale_price: item.wholesale_price,
                    retail_price: item.retail_price
                }))
            }
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