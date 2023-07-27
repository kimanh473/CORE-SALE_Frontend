import { defineStore } from "pinia";
import { UserLoginApi } from "../../../services/AccountServices/account.service"
import { useToast } from "vue-toastification";
export const userLogin = defineStore("UserLogin", {
    state: () => ({
        dataLogin: null,
    }),
    getters: {},
    actions: {

        setDataLogin(payload: any) {
            localStorage.setItem("TOKEN", payload.token);
            localStorage.setItem("authenticated", 'true');
            this.dataLogin = payload
        },

        LoginAction(user: object, router: any) {
            UserLoginApi(user)
                .then((payload: any) => {
                    if (payload?.status == "success") {
                        useToast().info("Chào mừng bạn đến với BTP holding!!");
                        this.setDataLogin(payload)
                        router.push('/')
                    } else {
                        useToast().error("Tài khoản hoặc mật khẩu không chính xác!");
                    }
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        checkAuthenticated(router: any) {
            const authenticated = localStorage.getItem("authenticated");
            if (authenticated === null) {
                alert("Hết phiên đăng nhập, vui lòng đăng nhập lại!!");
                router.push("/login");
            }
            // else if (to.name === "Social" && authenticated === null) {
            //     router.push("/login");
            // }
        },
    },
})