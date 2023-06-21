import { defineStore } from "pinia";
import { getAllInventoryApi, createInventoryApi } from '../../../services/InventoryServices/inventory.service'
export const useInventory = defineStore("Inventory", {
    state: () => ({
        listInventory: []
    }),
    getters: {},
    actions: {
        getListInventory(payload: any) {
            this.listInventory = payload.data?.data
            console.log(this.listInventory);

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
                    console.log(err);
                });
        },

    },
})