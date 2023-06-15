import { defineStore } from "pinia";
import { getAllWebCatalogsApi } from '../../../services/WebCatalogServices/webcatalog.service'
export const useWebCatalog = defineStore("WebCatalog", {
    state: () => ({
        listWeb: null
    }),
    getters: {},
    actions: {
        getListWeb(payload: any) {
            this.listWeb = payload.data
            console.log(this.listWeb);

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
    },
})