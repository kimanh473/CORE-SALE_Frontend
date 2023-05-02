import { defineStore } from 'pinia'

export const usemenu = defineStore('menuId', {
    // arrow function recommended for full type inference
    state: () => ({
        selectedKeys:[],
        openKeys:[]
    }),
    actions:{
        onSelectedKeys(data) {
            this.selectedKeys=data;
        },
        onOpenKeys(data) {
            this.openKeys=data
        }

    }
})
