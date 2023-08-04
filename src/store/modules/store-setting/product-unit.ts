import { defineStore } from "pinia";
import { getAllProductUnitApi, getDetailProductUnitApi, createProductUnitApi, updateProductUnitApi, deleteProductUnitApi } from '../../../services/SettingStoreServices/productUnit.service'

export const useProductUnit = defineStore("ProductUnit", {
    state: () => ({
        listProductUnit: [] as DataUnit[],
        detailProductUnit: {} as DataUnit,
    }),
    getters: {
        getListProductUnit: (state: any) => {
            return (payload: any) => state.listProductUnit = payload
        },
        getDetailProductUnit: (state: any) => {
            return (payload: any) => state.detailProductUnit = payload
        }
    },
    actions: {
        async getListProductUnitAction() {
            await getAllProductUnitApi()
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getListProductUnit(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async createProductUnitAction(
            data: object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await createProductUnitApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages)
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công")
                        EndTimeLoading()
                        router.push('/list-product-unit')
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
        async updateProductUnitAction(
            id: number,
            data: object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await updateProductUnitApi(id, data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages)
                        EndTimeLoading();
                    } else {
                        toast.success("Cập nhật thành công")
                        router.push('/list-product-unit')
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
        async getDetailProductUnitAction(id: number) {
            await getDetailProductUnitApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getDetailProductUnit(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        deleteProductUnitAction(id: number, toast: any, EndTimeLoading: Function, handleCloseConfirm: Function) {
            deleteProductUnitApi(id)
                .then((res) => {
                    if (res.data.status == "success") {
                        toast.success("Xóa thành công", 500);
                        this.getListProductUnitAction()
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