import { defineStore } from "pinia";
import { getListSpecificationApi, createSpecificationApi, getDetailSpecificationApi, updateSpecificationApi, deleteSpecificationApi } from '../../../services/SettingStoreServices/specification.service'

export const useListSpecification = defineStore("ListSpecification", {
    state: () => ({
        listSpecification: [] as DataSpecification[],
        detailSpecification: {} as DataSpecification
    }),
    getters: {
        getListSpecification: (state: any) => {
            return (payload: any) => state.listSpecification = payload
        },
        getDetailSpecification: (state: any) => {
            return (payload: any) => state.detailSpecification = payload
        }
    },
    actions: {
        async getListSpecificationAction() {
            await getListSpecificationApi()
                .then((payload: any) => {
                    let res = payload?.data?.data?.data
                    console.log(res);

                    this.getListSpecification(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async getDetailSpecificationAction(id: number) {
            await getDetailSpecificationApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getDetailSpecification(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async createSpecificationAction(
            data: object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await createSpecificationApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages)
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công")
                        EndTimeLoading()
                        router.push('/list-specification')
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
        async updateSpecificationAction(
            id: number,
            data: object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await updateSpecificationApi(id, data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages)
                        EndTimeLoading();
                    } else {
                        toast.success("Cập nhật thành công")
                        router.push('/list-specification')
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
        deleteSpecificationAction(id: number, toast: any, EndTimeLoading: Function, handleCloseConfirm: Function) {
            deleteSpecificationApi(id)
                .then((res) => {
                    if (res.data.status == "success") {
                        toast.success("Xóa thành công", 500);
                        this.getListSpecificationAction()
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