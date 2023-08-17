import { defineStore } from "pinia";
import { getAllUsersApi, createUserApi, getDetailUsersApi, updateUserApi, deleteUserApi } from '../../../services/UserServices/user.service'
import { changeStatusAccountApi } from '../../../services/AccountServices/password.service'

export const useUserSetting = defineStore("UserSetting", {
    state: () => ({
        listUsers: [] as DataUser[],
        detailUser: {} as DataUser
    }),
    getters: {
        getListUsers: (state: any) => {
            return (payload: any) => state.listUsers = payload
        },
        getDetailUsers: (state: any) => {
            return (payload: any) => state.detailUser = payload
        },
    },
    actions: {
        getAllListUsersAction() {
            getAllUsersApi()
                .then((payload: any) => {
                    let res = payload?.data?.data?.data
                    console.log(res);
                    this.getListUsers(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async getDetailUserAction(id: number, role: RoleList, getMatchingResults: Function, getListWeb: Function) {
            await getDetailUsersApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    console.log(res);

                    this.getDetailUsers(res)
                    getListWeb(res?.json_web_list, res?.json_inventory_list)
                    role.storeSetting = getMatchingResults('STORE_SETTING', res.json_string_roles)
                    role.product = getMatchingResults('CATALOG_PRODUCT', res.json_string_roles)
                    role.createProduct = getMatchingResults('CATALOG_PRODUCT_CREATE', res.json_string_roles)
                    role.updateProduct = getMatchingResults('CATALOG_PRODUCT_UPDATE', res.json_string_roles)
                    role.deleteProduct = getMatchingResults('CATALOG_PRODUCT_DELETE', res.json_string_roles)
                    role.printProduct = getMatchingResults('CATALOG_PRODUCT_PRINT', res.json_string_roles)
                    role.importProduct = getMatchingResults('CATALOG_PRODUCT_IMPORT', res.json_string_roles)
                    role.exportProduct = getMatchingResults('CATALOG_PRODUCT_EXPORT', res.json_string_roles)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async createUserAction(
            data: object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await createUserApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages)
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công")
                        EndTimeLoading()
                        router.push('/list-user')
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
        async updateUserAction(
            id: number,
            data: object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await updateUserApi(id, data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages)
                        EndTimeLoading();
                    } else {
                        toast.success("Cập nhật thành công")
                        router.push('/list-user')
                        EndTimeLoading()
                    }
                })
                .catch((err) => {
                    console.log(err);
                    let arrMess = err.response.data.messages;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                    // this.messageError = err.response.data.messages
                    // console.log(this.messageError);
                });
        },
        deleteUserAction(id: number, toast: any, EndTimeLoading: Function, handleCloseConfirm: Function) {
            deleteUserApi(id)
                .then((res) => {
                    if (res.data.status == "success") {
                        toast.success("Xóa thành công", 500);
                        this.getAllListUsersAction()
                    } else {
                        toast.error(res.data.messages, 500);
                    }
                    EndTimeLoading();
                    handleCloseConfirm();
                })
                .catch((err) => {
                    console.log(err);
                    handleCloseConfirm();
                    EndTimeLoading();
                });
        },
        changeStatusAccountAction(data: any, toast: any, EndTimeLoading: Function) {
            changeStatusAccountApi(data)
                .then((res: any) => {
                    console.log(res);
                    if (res?.data?.status == 'success') {
                        toast.success('Thay đổi trạng thái tài khoản thành công');
                        this.getAllListUsersAction()
                        EndTimeLoading()
                    } else {
                        EndTimeLoading()
                        toast.warning(res.data.messages.title);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    let arrMess = err.response.data.messages;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                    EndTimeLoading()
                });
        },
    },
})