import { defineStore } from "pinia";
import { getAllWebCatalogsApi, getAllWebIndexsApi, createWebApi } from '../../../services/WebCatalogServices/webcatalog.service'
export const useWebCatalog = defineStore("WebCatalog", {
    state: () => ({
        listWeb: null,
        listWebPaginate: null
    }),
    getters: {},
    actions: {
        getListWeb(payload: any) {
            this.listWeb = payload.data
        },
        getListWebPagination(payload: any) {
            this.listWebPaginate = payload.data.data
            console.log(payload);
        },
        getAllWebCatalogAction() {
            getAllWebCatalogsApi()
                .then((payload: any) => {
                    this.getListWeb(payload.data)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        getAllWebPaginateAction() {
            getAllWebIndexsApi()
                .then((payload: any) => {
                    this.getListWebPagination(payload.data)
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
    },
})