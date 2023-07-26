import { defineStore } from "pinia";
import { getListSpecificationApi } from '../../../services/SettingStoreServices/specification.service'

export const useListSpecification = defineStore("ListSpecification", {
    state: () => ({
        listSpecification: [] as DataSpecification[],
    }),
    getters: {
        getListSpecification: (state: any) => {
            return (payload: any) => state.listSpecification = payload
        }
    },
    actions: {
        async getListSpecificationAction() {
            await getListSpecificationApi()
                .then((payload: any) => {
                    let res = payload?.data?.data?.data
                    console.log(res);

                    this.getListSpecification(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
    },
})