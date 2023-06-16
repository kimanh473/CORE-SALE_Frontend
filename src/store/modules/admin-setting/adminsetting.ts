import { defineStore } from "pinia";
import { getAllPermissionGroupsApi, deletePermissionGroupsApi } from '../../../services/AdminSettingServices/adminsetting.services'
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
        deletePermissionGroupsAction(id: Number, EndTimeLoading: Function, toast: any, handleCloseConfirm: Function) {
            deletePermissionGroupsApi(id)
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