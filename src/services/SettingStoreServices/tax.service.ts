import httpClient from "../services";
const getListTaxApi = () => {
    return httpClient.get(`/store/product/tax/index`);
};
const createTaxApi = (data: object) => {
    return httpClient.post(`/store/product/tax/create`, data);
};
const updateTaxApi = (id: number, data: object) => {
    return httpClient.post(`/store/product/tax/update/${id}`, data);
};
const deleteTaxApi = (id: number) => {
    return httpClient.post(`/store/product/tax/delete/${id}`);
};
const getDetailTaxApi = (id: number) => {
    return httpClient.get(`/store/product/tax/show/${id}`);
};
export {
    getListTaxApi,
    createTaxApi,
    getDetailTaxApi,
    updateTaxApi,
    deleteTaxApi
};