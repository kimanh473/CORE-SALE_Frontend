import { defineStore } from "pinia";
import { getAllCategoryApi } from '../../../services/SettingStoreServices/category.service'

export const useCategory = defineStore("Category", {
    state: () => ({
        listCategory: [] as DataCategory[],
        listTreeCategory: [] as TreeCategory[]
    }),
    getters: {
        getListCategory: (state: any) => {
            return (payload: any) => {
                state.listCategory = payload;
                state.listTreeCategory = payload?.map((item: any) => ({
                    title: item.title,
                    key: '0',
                    children: [{
                        title: item.title,
                        key: '0-1'
                    }]
                })
                )
            }
        }
    },
    actions: {
        async getListProductAction() {
            await getAllCategoryApi()
                .then((payload: any) => {
                    let res = payload?.data?.data
                    console.log(res);
                    this.getListCategory(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
    },
})