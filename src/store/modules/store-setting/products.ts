import { defineStore } from "pinia";
import { getAllProductsApi, createProductApi } from '../../../services/SettingStoreServices/product.service'

export const useProduct = defineStore("Products", {
    state: () => ({
        listProduct: [] as DataProduct[],
    }),
    getters: {
        getListProduct: (state: any) => {
            return (payload: any) => state.listProduct = payload
        }
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