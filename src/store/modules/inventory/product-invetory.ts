import { defineStore } from "pinia";
import { getAllInventoryApi } from '../../../services/InventoryServices/inventory.service'
export const useInventory = defineStore("Inventory", {
    state: () => ({
        listInventory: null
    }),
    getters: {},
    actions: {
        getListInventory(payload: any) {
            this.listInventory = payload.data.data
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
    },
})