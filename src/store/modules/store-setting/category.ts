import { defineStore } from "pinia";
import { getAllCategoryApi, getDetailCategoryApi } from '../../../services/SettingStoreServices/category.service'

export const useCategory = defineStore("Category", {
    state: () => ({
        listCategory: [] as DataCategory[],
        listTreeCategory: [] as TreeCategory[],
        detailCategory: {} as DataCategory
    }),
    getters: {
        getListCategory: (state: any) => {
            return (payload: any) => {
                state.listCategory = payload;
                let deep0 = payload?.filter((item: any) => item.deep == '0')
                state.listTreeCategory = deep0?.map((item: any) => ({
                    title: item.title,
                    key: item.deep,
                    children: payload?.filter((item1: any) => (item.id == item1.parent_id))
                }))
            }
        },
        getDetailCategory: (state: any) => {
            return (payload: any) => {
                state.detailCategory = payload;
            }
        }
    },
    actions: {
        async getListCategoryAction() {
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
        async getDetailCategoryAction(id: number) {
            await getDetailCategoryApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    console.log(res);
                    this.getDetailCategory(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
    },
})