import httpClient from "../services";
const getAllCustomerProfileApi = () => {
    return httpClient.get(`/customer/profile/index`);
};
const createCustomerProfileApi = (data:object) => {
    return httpClient.post(`/customer/profile/create`,data);
};
export {
    getAllCustomerProfileApi,
    createCustomerProfileApi
};
