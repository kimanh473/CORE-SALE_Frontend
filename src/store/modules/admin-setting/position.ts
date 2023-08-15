import { defineStore } from "pinia";
import { getAllPositionNoPaginateApi } from '../../../services/AdminSettingServices/position.service'

export const usePosition = defineStore("Positions", {
    state: () => ({
        listPosition: [] as DataPosition[],
    }),
    getters: {
        getListPosition: (state: any) => {
            return (payload: any) => state.listPosition = payload?.map((item: DataPosition) => ({
                label: item.title,
                value: item.id
            }))
        }
    },
    actions: {
        async getListPositionAction() {
            await getAllPositionNoPaginateApi()
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getListPosition(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
    },
})