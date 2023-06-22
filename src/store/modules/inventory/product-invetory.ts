import { defineStore } from "pinia";
import { getAllInventoryApi, createInventoryApi, updateInventoryApi, deleteInventoryApi, detailInventoryApi } from '../../../services/InventoryServices/inventory.service'
export const useInventory = defineStore("Inventory", {
    state: () => ({
        listInventory: [],
        detailInventory: null,
        messageError: null
    }),
    getters: {
    },
    actions: {
        getListInventory(payload: any) {
            this.listInventory = payload.data?.data
        },
        getDetailInventory(payload: any) {
            this.detailInventory = payload.data
        },
        getListInventoryAction() {
            getAllInventoryApi()
                .then((payload: any) => {
                    this.getListInventory(payload.data)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        getDetailInventoryAction(id: number) {
            detailInventoryApi(id)
                .then((payload: any) => {
                    this.getDetailInventory(payload.data)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async createInventoryAction(
            data: Object,
            toast: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await createInventoryApi(data)
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
        async updateInventoryAction(
            id: number,
            data: Object,
            toast: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await updateInventoryApi(id, data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Cập nhật thành công");
                        // handleCloseCreate();
                        EndTimeLoading();
                    }
                })
                .catch((err) => {
                    toast.error("Cập nhật thất bại");
                    this.messageError = err.response.data.messages
                    console.log(this.messageError);
                    console.log(err);
                });
        },
        deleteInventoryAction(id: number, EndTimeLoading: Function, toast: any, handleCloseConfirm: Function) {
            deleteInventoryApi(id)
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