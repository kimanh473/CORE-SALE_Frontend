import { defineStore } from "pinia";
import { getAllPermissionGroupsApi } from '../../../services/AdminSettingServices/adminsetting.services'
export const useAdminSetting = defineStore("AdminSetting", {
    state: () => ({
        listGroupPermission: [],
    }),
    getters: {},
    actions: {
        setDataPermission(payload: any) {
            this.listGroupPermission = payload.data.data
        },
        getAllPermissionGroupsAction(perPage: Number, page: Number) {
            getAllPermissionGroupsApi(perPage, page)
                .then((payload: any) => {
                    this.setDataPermission(payload.data)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
    },
})