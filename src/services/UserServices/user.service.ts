import httpClient from "../services";
const getAllUsersApi = () => {
    return httpClient.get(`/user/account/list`);
};
const createUserApi = (data: object) => {
    return httpClient.post(`/user/account/create`, data);
};
const updateUserApi = (id: number, data: object) => {
    return httpClient.post(`/user/account/update/${id}`, data);
};
const getDetailUsersApi = (id: number) => {
    return httpClient.get(`/user/account/show/${id}`);
};
const deleteUserApi = (id: number) => {
    return httpClient.post(`/user/account/delete/${id}`);
};
export {
    getAllUsersApi,
    createUserApi,
    getDetailUsersApi,
    updateUserApi,
    deleteUserApi
};