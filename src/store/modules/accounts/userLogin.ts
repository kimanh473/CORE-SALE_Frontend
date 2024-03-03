import { defineStore } from 'pinia'
import {
  UserLoginApi,
  UserLogoutApi,
} from '@/services/AccountServices/account.service'
import { useToast } from 'vue-toastification'
// const toast = useToast()
export const userLogin = defineStore('UserLogin', {
  state: () => ({
    dataLogin: null,
  }),
  getters: {
    setDataLogin: (state: any) => {
      return (payload: any) => {
        localStorage.setItem('TOKEN', payload.token)
        localStorage.setItem('role', payload?.roles[0])
        localStorage.setItem('authenticated', 'true')
        localStorage.setItem('ID', payload.user?.roles[0]?.id)
        state.dataLogin = payload
      }
    },
  },
  actions: {
    LoginAction(user: object, router: any) {
      UserLoginApi(user)
        .then((payload: any) => {
          if (payload?.status === 'success') {
            this.setDataLogin(payload)
            router.push('/orders-list/page/1').then(() => {
              window.location.reload()
            })
            useToast().info('Chào mừng bạn đến với BTP holding!!')
          } else {
            useToast().error('Tài khoản hoặc mật khẩu không chính xác!')
          }
        })
        .catch((err) => {
          const arrMess = err.response.data.messages
          const errMess = arrMess[Object.keys(arrMess)[0]]
          useToast().error(errMess[0])
        })
    },
    UserLogoutAction() {
      const token = localStorage.getItem('TOKEN')
      UserLogoutApi(token)
        .then((payload) => {
          if (payload.status === 'success') {
            useToast().info('Hẹn gặp lại!!!!!')
            localStorage.removeItem('TOKEN')
            localStorage.removeItem('authenticated')
            localStorage.removeItem('role')
            localStorage.removeItem('ID')
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
