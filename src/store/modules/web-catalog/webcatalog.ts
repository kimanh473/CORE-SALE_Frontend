import { defineStore } from "pinia";
import { getAllWebCatalogsApi, getAllWebIndexsApi, createWebApi, detailWebApi, deleteWebApi } from '../../../services/WebCatalogServices/webcatalog.service'
export const useWebCatalog = defineStore("WebCatalog", {
    state: () => ({
        listWeb: [] as DataWeb[],
        listWebPaginate: [] as DataWeb[],
        detailWeb: {} as DataWeb
    }),
    getters: {
        getDetailWeb: (state: any) => {
            return (payload: any) => state.detailWeb = payload
        },
        getListWeb: (state: any) => {
            return (payload: any) => state.listWeb = payload
        },
        getListWebPagination: (state: any) => {
            return (payload: any) => state.listWebPaginate = payload?.map((item: any) => ({
                id: item.id,
                code: item.code,
                web_name: item.web_name,
                status: item.status,
                fullname: item.user_created.fullname,
                created_at: item.created_at.substring(0, 10),
            }))
        },
    },
    actions: {
        getAllWebCatalogAction() {
            getAllWebCatalogsApi()
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getListWeb(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        getAllWebPaginateAction() {
            getAllWebIndexsApi()
                .then((payload: any) => {
                    this.getListWebPagination(payload?.data?.data?.data)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async createWebAction(
            data: Object,
            toast: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await createWebApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công");
                        location.reload();
                        // handleCloseCreate();
                        EndTimeLoading();
                    }
                })
                .catch((err) => {
                    toast.error("Tạo mới thất bại");
                    this.messageError = err.response.data.messages
                    console.log(this.messageError);
                    console.log(err);
                });
        },
        getDetailWebAction(id: number) {
            detailWebApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getDetailWeb(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        deleteWebAction(id: number, EndTimeLoading: Function, toast: any, handleCloseConfirm: Function) {
            deleteWebApi(id)
                .then((res) => {
                    if (res.data.status == "success") {
                        EndTimeLoading;
                        toast.success("Xóa thành công");
                    } else {
                        toast.error(res.data.messages);
                    }
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