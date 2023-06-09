import { defineStore } from "pinia";
import { UserLoginApi } from "../../../services/AccountServices/account.service"
export const userLogin = defineStore("UserLogin", {
    state: () => ({
        datatest: null,
    }),
    getters: {},
    actions: {

        setDataLogin(payload: any) {
            localStorage.setItem("TOKEN", payload.token);
            this.datatest = payload
            console.log(this.datatest);

        },

        LoginAction(user: object, router: any) {
            UserLoginApi(user)
                .then((payload: any) => {
                    this.setDataLogin(payload)
                    router.push('/')
                })
                .catch((err) => {
                    console.log(err)
                });
        },
    },
})