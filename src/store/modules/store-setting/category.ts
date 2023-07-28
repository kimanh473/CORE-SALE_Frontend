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
                state.listCategory = payload?.map((item: any) => ({
                    id: item.id,
                    label: item.title,
                    value: item.code,
                    parent_id: item.parent_id,
                    deep: item.deep,
                    sub_ids: item.sub_ids,
                    images: item.images,
                    desc: item.desc,
                    created_by_id: item.created_by_id,
                    updated_by_id: item.updated_by_id,
                    created_at: item.created_at,
                    updated_at: item.updated_at,
                    deleted_at: item.deleted_at,
                    key: item.key
                }));
            }
        },
        getListCategoryTree: (state: any) => {
            return (payload: any) => {
                state.listTreeCategory = payload
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