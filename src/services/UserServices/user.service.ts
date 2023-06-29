import httpClient from "../services";
const getAllUsersApi = () => {
    return httpClient.get(`/user/account/list`);
};

export {
    getAllUsersApi,
};