import { defineStore } from "pinia";
import { getAllCategoryApi, getDetailCategoryApi, getAllCategoryTreeApi, createCategoryApi, updateCategoryApi, deleteCategoryApi } from '../../../services/SettingStoreServices/category.service'

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
                    value: item.id,
                    label: item.title,
                    code: item.code,
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
        async createCategoryAction(
            data: object,
            toast: any,
            handleClose: Function,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await createCategoryApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages)
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công")
                        handleClose()
                        this.getListCategoryTreeAction()
                        EndTimeLoading()
                    }
                })
                .catch((err) => {
                    // this.messageError = err.response.data.messages
                    // console.log(this.messageError);
                    console.log(err);
                    let arrMess = err.response.data.messages;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                });
        },
        async updateCategoryAction(
            id: number,
            data: object,
            toast: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await updateCategoryApi(id, data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages)
                        EndTimeLoading();
                    } else {
                        toast.success("Cập nhật thành công")
                        this.getListCategoryTreeAction()
                        EndTimeLoading()
                    }
                })
                .catch((err) => {
                    // this.messageError = err.response.data.messages
                    // console.log(this.messageError);
                    console.log(err);
                    let arrMess = err.response.data.messages;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                });
        },
        deleteCategoryAction(id: number, toast: any, EndTimeLoading: Function, handleCloseConfirm: Function) {
            deleteCategoryApi(id)
                .then((res) => {
                    if (res.data.status == "success") {
                        toast.success("Xóa thành công", 500);
                    } else {
                        toast.error(res.data.messages, 500);
                    }
                    EndTimeLoading();
                    handleCloseConfirm();
                })
                .catch((err) => {
                    console.log(err);
                    handleCloseConfirm();
                    EndTimeLoading();
                });
        },
    },
})