import { defineStore } from "pinia";
import { getAllUsersApi } from '../../../services/UserServices/user.service'
export const useUserSetting = defineStore("UserSetting", {
    state: () => ({
        listUsers: [],
    }),
    getters: {},
    actions: {
        setListUsers(payload: any) {
            this.listUsers = payload?.data?.data
        },
        getAllListUsersAction() {
            getAllUsersApi()
                .then((payload: any) => {
                    this.setListUsers(payload.data)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
    },
})