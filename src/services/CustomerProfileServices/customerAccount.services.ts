import httpClient from "../services";
const getAllCustomerCustomerApi = () => {
    return httpClient.get(`/customer/account/index`);
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
    getAllCustomerCustomerApi
};
