import { defineStore } from "pinia";
import { getAllGroupInventoryApi, createGroupInventoryApi } from '../../../services/InventoryServices/groupInventory.service'
export const useGroupInventory = defineStore("GroupInventory", {
    state: () => ({
        listGroupInventory: null
    }),
    getters: {},
    actions: {
        getListGroupInventory(payload: any) {
            this.listGroupInventory = payload.data

        },
        getListGroupInventoryAction() {
            getAllGroupInventoryApi()
                .then((payload: any) => {
                    this.getListGroupInventory(payload.data)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async createGroupInventoryAction(
            data: Object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await createGroupInventoryApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công");
                        router.push('/list-inventory');
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