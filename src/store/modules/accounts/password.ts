import { defineStore } from "pinia";
import { sendEmailForgotPassApi, changePassByEmailConfirmApi, changePassApi, resetPassApi } from '../../../services/AccountServices/password.service'
export const usePasswordSetting = defineStore("PasswordSetting", {
    state: () => ({
        personEmail: ''
    }),
    getters: {
        getPersonEmail: (state: any) => {
            return (payload: any) => state.personEmail = payload
        },
    },
    actions: {
        sendEmailForgotPassAction(data: any, toast: any, router: any) {
            sendEmailForgotPassApi(data)
                .then((res: any) => {
                    if (res?.data?.status == 'success') {
                        router.push('/forgot-pass')
                        toast.success(res?.data?.message);
                        this.getPersonEmail(data?.email)
                    } else {
                        toast.warning(res.data.messages.title);
                    }
                })
                .catch((err) => {
                    console.log(err)
                    // if (err.response.status == 403) {
                    //     toast.warning("Bạn không có quyền thực hiện chức năng này");
                    // } else if (err.response.status == 422) {
                    //     console.log(err.response);
                    //     toast.warning(err.response.data.error?.title[0]);
                    // }
                });
        },
        changePassByEmailConfirmAction(data: any, toast: any, router: any) {
            changePassByEmailConfirmApi(data)
                .then((res: any) => {
                    if (res?.data?.status == 'success') {
                        router.push('/login')
                        toast.success(res?.data?.messages);
                    } else {
                        toast.warning(res.data.messages.title);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    let arrMess = err.response.data.messages;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                });
        },
        changePassAction(data: any, toast: any, router: any, handleCloseDetail: Function) {
            changePassApi(data)
                .then((res: any) => {
                    if (res?.data?.status == 'success') {
                        router.push('/login')
                        toast.success(res?.data?.messages);
                    } else {
                        toast.error(res?.data?.messages);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    let arrMess = err.response.data.messages;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                });
        },
        resetPasswordAction(id: number, data: any, toast: any, EndTimeLoading: Function, handleCloseDetail: Function) {
            resetPassApi(id, data)
                .then((res: any) => {
                    if (res?.data?.status == 'success') {
                        toast.success(res?.data?.messages);
                        handleCloseDetail()
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