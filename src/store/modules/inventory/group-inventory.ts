import { defineStore } from "pinia";
import { getAllGroupInventoryApi } from '../../../services/InventoryServices/groupInventory.service'
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
    },
})