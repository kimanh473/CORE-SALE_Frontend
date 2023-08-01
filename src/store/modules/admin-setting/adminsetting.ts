import { defineStore } from "pinia";
import { getAllPermissionGroupsApi, createPermissionGroupsApi, deletePermissionGroupsApi, getDetailPermissionGroupsApi } from '../../../services/AdminSettingServices/adminsetting.services'
export const useAdminSetting = defineStore("AdminSetting", {
    state: () => ({
        listGroupPermission: [] as DataAdminSetting[],
        detailGroupPermission: {} as DataAdminSetting,
        // detailRole: []
    }),
    getters: {
        getDataPermission: (state: any) => {
            return (payload: any) => state.listGroupPermission = payload
        },
        getDetailGroupPermission: (state: any) => {
            return (payload: any) => 
                state.detailGroupPermission = payload.json_string_roles
        },
        // getDetailRoles: (state: any) => {
        //     return (payload: any) => state.detailRole = Object.values(payload?.json_string_roles).map((item: any) => ({
        //         storeSetting: item == 'STORE_SETTING' ? 'STORE_SETTING' : '',
        //         product: item == 'CATALOG_PRODUCT' ? 'CATALOG_PRODUCT' : ''
        //     }))

        // },
    },
    actions: {
        getAllPermissionGroupsAction(perPage: Number, page: Number) {
            getAllPermissionGroupsApi(perPage, page)
                .then((payload: any) => {
                    this.getDataPermission(payload?.data?.data?.data)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async getDetailPermissionGroupsAction(id: number) {
            await getDetailPermissionGroupsApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    
                    this.getDetailGroupPermission(res)
                    // this.getDetailRoles(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async createPermissionAction(
            data: object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await createPermissionGroupsApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages)
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công")
                        EndTimeLoading()
                        router.push('/group-admin-view')
                    }
                })
                .catch((err) => {
                    toast.error("Tạo mới thất bại");
                    // this.messageError = err.response.data.messages
                    // console.log(this.messageError);
                    console.log(err);
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