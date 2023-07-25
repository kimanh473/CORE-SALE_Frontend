import { defineStore } from "pinia";
import { getAllCategoryApi, getDetailCategoryApi, getAllCategoryTreeApi } from '../../../services/SettingStoreServices/category.service'

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
            }
        },
        getListCategoryTree: (state: any) => {
            return (payload: any) => {
                state.listTreeCategory = payload.map((item: any) => ({
                    title: item.title,
                    key: item.parent_id,
                    children: item.child_depart.map((item1: any) => ({
                        title: item1.title,
                        key: item1.parent_id,
                        children: item1.child_depart.map((item2: any) => ({
                            title: item2.title,
                            key: item2.parent_id,
                            children: item2.child_depart
                        }))
                    }))
                })
                );
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
                    this.getListCategory(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async getListCategoryTreeAction() {
            await getAllCategoryTreeApi()
                .then((payload: any) => {
                    let res = payload?.data
                    this.getListCategoryTree(res)
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