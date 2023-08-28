import httpClient from "../services";
const getAllCustomerProfileApi = () => {
    return httpClient.get(`/customer/profile/index`);
};
const createCustomerProfileApi = (data:object) => {
    return httpClient.post(`/customer/profile/create`,data);
};
const updateCustomerProfileApi = (id:number, data: Object) => {
    return httpClient.post(`/customer/profile/update/${id}`,data);
};
const deleteCustomerProfileApi = (id:number) => {
    return httpClient.post(`/customer/profile/delete/${id}`);
}
const getDetailCustomerProfileApi = (id:number) => {
    return httpClient.get(`/customer/profile/show/${id}`);
}
export {
    getAllCustomerProfileApi,
    getDetailCustomerProfileApi,
    createCustomerProfileApi,
    updateCustomerProfileApi,
    deleteCustomerProfileApi
};
