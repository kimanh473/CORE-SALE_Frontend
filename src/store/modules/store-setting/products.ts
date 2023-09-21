import { defineStore } from "pinia";
import { getAllProductsApi, getAllProductsNoPagingApi, createProductApi, getDetailProductApi, filterProductApi } from '../../../services/SettingStoreServices/product.service'

export const useProduct = defineStore("Products", {
    state: () => ({
        listProduct: <any>[],
        listAllProduct: <any>[],
        listFiltered: <any>[],
        detailProduct: <any>{}
    }),
    getters: {
        getListProduct: (state: any) => {
            return (payload: any) => state.listProduct = payload
        },
        getListAllProduct: (state: any) => {
            return (payload: any) => state.listAllProduct = payload
        },
        getDetailProduct: (state: any) => {
            return (payload: any) => state.detailProduct = payload
        },
        getListFiltered: (state: any) => {
            return (payload: any) => state.listFiltered = payload
        },
    },
    actions: {
        async getListProductAction(perPage: number, page: number) {
            await getAllProductsApi(perPage, page)
                .then((payload: any) => {
                    let res = payload?.data?.data?.data
                    this.getListProduct(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async getListProductNoPagingAction() {
            await getAllProductsNoPagingApi()
                .then((payload: any) => {
                    let res = payload?.data?.data?.data
                    console.log(res);

                    this.getListAllProduct(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async getDetailProductAction(id: number) {
            await getDetailProductApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getDetailProduct(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async filterProductAction(data: object) {
            await filterProductApi(data)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getDetailProduct(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async createProductAction(
            data: object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await createProductApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages)
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công")
                        EndTimeLoading()
                        router.push('/products-list')
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
    },
})