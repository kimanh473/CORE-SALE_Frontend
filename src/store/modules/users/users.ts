import { defineStore } from "pinia";
import { getAllUsersApi, createUserApi, getDetailUsersApi, updateUserApi, deleteUserApi } from '../../../services/UserServices/user.service'
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
        async getDetailUserAction(id: number) {
            await getDetailUsersApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getDetailUsers(res)
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
    },
})