import { defineStore } from "pinia";
import { getAllPermissionGroupsApi, createPermissionGroupsApi, deletePermissionGroupsApi, getDetailPermissionGroupsApi, updatePermissionGroupsApi } from '../../../services/AdminSettingServices/adminsetting.services'
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
                state.detailGroupPermission = payload
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
        async getDetailPermissionGroupsAction(id: number, role: RoleList, getMatchingResults: Function, getListWeb: Function) {
            await getDetailPermissionGroupsApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getDetailGroupPermission(res)
                    getListWeb(res?.json_web_list, res?.json_inventory_list)
                    role.storeSetting = getMatchingResults('STORE_SETTING', res.json_string_roles)
                    role.product = getMatchingResults('CATALOG_PRODUCT', res.json_string_roles)
                    role.createProduct = getMatchingResults('CATALOG_PRODUCT_CREATE', res.json_string_roles)
                    role.updateProduct = getMatchingResults('CATALOG_PRODUCT_UPDATE', res.json_string_roles)
                    role.deleteProduct = getMatchingResults('CATALOG_PRODUCT_DELETE', res.json_string_roles)
                    role.printProduct = getMatchingResults('CATALOG_PRODUCT_PRINT', res.json_string_roles)
                    role.importProduct = getMatchingResults('CATALOG_PRODUCT_IMPORT', res.json_string_roles)
                    role.exportProduct = getMatchingResults('CATALOG_PRODUCT_EXPORT', res.json_string_roles)
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
                    // this.messageError = err.response.data.messages
                    // console.log(this.messageError);
                    console.log(err);
                    let arrMess = err.response.data.messages;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                });
        },
        async updateGroupPermissionAction(
            id: number,
            data: Object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await updatePermissionGroupsApi(id, data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Cập nhật thành công");
                        router.push('/group-admin-view')
                        // handleCloseCreate();
                        EndTimeLoading();
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