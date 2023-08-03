import { defineStore } from "pinia";
import { getAllUsersApi, createUserApi, getDetailUsersApi, updateUserApi } from '../../../services/UserServices/user.service'
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
                    toast.error("Tạo mới thất bại");
                    // this.messageError = err.response.data.messages
                    // console.log(this.messageError);
                    console.log(err);
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
                        router.push('/list-specification')
                        EndTimeLoading()
                    }
                })
                .catch((err) => {
                    toast.error("Cập nhật thất bại");
                    // this.messageError = err.response.data.messages
                    // console.log(this.messageError);
                    console.log(err);
                });
        },
    },
})