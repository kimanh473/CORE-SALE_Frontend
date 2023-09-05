import httpClient from "../services";
const getAllCustomerAccountApi = () => {
    return httpClient.get(`/customer/account/index`);
};
const createCustomerAccountApi = (data:object) => {
    return httpClient.post(`/customer/account/create`,data);
};
const createCustomerAccountInListProfileApi = (data:object) => {
    return httpClient.post(`/customer/account/create-in-list-profile`,data);
};
const updateCustomerAccountApi = (id:number, data: Object) => {
    return httpClient.post(`/customer/account/update/${id}`,data);
};
const deleteCustomerAccountApi = (id:number) => {
    return httpClient.post(`/customer/account/delete/${id}`);
}
const getDetailCustomerAccountApi = (id:number) => {
    return httpClient.get(`/customer/account/show/${id}`);
}
export {
    getAllCustomerAccountApi,
    getDetailCustomerAccountApi,
    createCustomerAccountApi,
    updateCustomerAccountApi,
    deleteCustomerAccountApi,
    createCustomerAccountInListProfileApi
};
