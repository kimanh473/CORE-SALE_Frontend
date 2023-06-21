import { defineStore } from "pinia";
import { getAllSourceProductsApi, createSourceProductApi } from '../../../services/SourceProductServices/sourceProduct.services'
export const useSourceProduct = defineStore("SourceProduct", {
    state: () => ({
        listSourceProduct: null
    }),
    getters: {},
    actions: {
        getListSourceProduct(payload: any) {
            this.listSourceProduct = payload.data.data
            console.log(this.listSourceProduct);

        },
        getListSourceProductAction() {
            getAllSourceProductsApi()
                .then((payload: any) => {
                    this.getListSourceProduct(payload.data)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async createSourceProductAction(
            data: Object,
            toast: any,
            EndTimeLoading: Function,
            handleCloseCreate: Function
        ) {
            await createSourceProductApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công");
                        location.reload();
                        handleCloseCreate();
                        EndTimeLoading();
                    }
                })
                .catch((err) => {
                    toast.error("Tạo mới thất bại");
                    console.log(err);
                });
        },

    },
})