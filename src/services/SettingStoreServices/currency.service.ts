import httpClient from "../services";
const getListCurrencyApi = () => {
    return httpClient.get(`/system-manage/currency/list`);
};
const createCurrencyApi = (data: object) => {
    return httpClient.post(`/system-manage/currency/create`, data);
};
const updateCurrencyApi = (id: number, data: object) => {
    return httpClient.post(`/system-manage/currency/update/${id}`, data);
};
const deleteCurrencyApi = (id: number) => {
    return httpClient.post(`/system-manage/currency/delete/${id}`);
};
const getDetailCurrencyApi = (id: number) => {
    return httpClient.get(`system-manage/currency/show/${id}`);
};
//list currency international
const getListCurrencyInternationalApi = () => {
    return httpClient.get(`/system-manage/currency/list-currency`);
};
//check mặc đinhk
const checkDefaultCurrencyApi = () => {
    return httpClient.get(`/system-manage/currency/check-default`);
};
export {
    getListCurrencyApi,
    createCurrencyApi,
    getDetailCurrencyApi,
    updateCurrencyApi,
    deleteCurrencyApi,
    getListCurrencyInternationalApi,
    checkDefaultCurrencyApi
};