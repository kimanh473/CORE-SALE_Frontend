import httpClient from "../services";
const sendEmailForgotPassApi = (data: object) => {
    return httpClient.post(`/auth/forgot-password`, data);
};
const changePassByEmailConfirmApi = (data: object) => {
    return httpClient.post(`/auth/reset-password`, data);
};
const changePassApi = (data: object) => {
    return httpClient.post(`/user/account/change-password`, data);
};
const changeStatusAccountApi = (data: object) => {
    return httpClient.post(`/user/account/change-status`, data);
};
const resetPassApi = (id: number, data: object) => {
    return httpClient.post(`/user/account/reset-password/${id}`, data);
};
// const updateSystemSettingApi = (data: any) => {
//     return httpClient.post(`/setting/create-value-json`, data);
// };
export {
    sendEmailForgotPassApi,
    changePassByEmailConfirmApi,
    changePassApi,
    changeStatusAccountApi,
    resetPassApi
    // updateSystemSettingApi,
};