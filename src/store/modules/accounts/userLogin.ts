import { defineStore } from 'pinia'
import {
    UserLoginApi,
    UserLogoutApi,
} from '../../../services/AccountServices/account.service'
import { useToast } from 'vue-toastification'
export const userLogin = defineStore('UserLogin', {
    state: () => ({
        dataLogin: null,
    }),
    getters: {
        setDataLogin: (state: any) => {
            return (payload: any) => {
                localStorage.setItem('TOKEN', payload.token)
                localStorage.setItem('role', payload?.roles[0])
                // localStorage.setItem("authenticated", 'true');
                state.dataLogin = payload
            }
        },
    },
    actions: {
        LoginAction(user: object, router: any) {
            UserLoginApi(user)
                .then((payload: any) => {
                    if (payload?.status == 'success') {
                        useToast().info('Chào mừng bạn đến với BTP holding!!')
                        // window.location.reload()
                        this.setDataLogin(payload)
                        router.push('/')
                    } else {
                        useToast().error('Tài khoản hoặc mật khẩu không chính xác!')
                    }
                })
                .catch((err) => {
                    let arrMess = err.response.data.messages
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    useToast().error(errMess[0])
                })
        },
        UserLogoutAction() {
            const token = localStorage.getItem('TOKEN')
            UserLogoutApi(token)
                .then((payload) => {
                    if (payload.status == 'success') {
                        useToast().info('Hẹn gặp lại!!!!!')
                    } else {
                        useToast().error('Không thể đăng xuất!!!')
                    }
                })
                .catch((err) => console.log(err))
        },
        // checkAuthenticated(router: any) {
        //     const authenticated = localStorage.getItem("authenticated");
        //     if (authenticated === null) {
        //         alert("Hết phiên đăng nhập, vui lòng đăng nhập lại!!");
        //         router.push("/login");
        //     }
        //     // else if (to.name === "Social" && authenticated === null) {
        //     //     router.push("/login");
        //     // }
        // },
    },
})
