import httpClient from "../services";
const getListSpecificationApi = () => {
    return httpClient.get(`/system-manage/product-specification/index`);
};
const createSpecificationApi = (data: object) => {
    return httpClient.post(`/system-manage/product-specification/create`, data);
};
const updateSpecificationApi = (id: number, data: object) => {
    return httpClient.post(`/system-manage/product-specification/update/${id}`, data);
};
const deleteSpecificationApi = (id: number) => {
    return httpClient.post(`/system-manage/product-specification/delete/${id}`);
};
const getDetailSpecificationApi = (id: number) => {
    return httpClient.get(`/system-manage/product-specification/show/${id}`);
};
export {
    getListSpecificationApi,
    createSpecificationApi,
    getDetailSpecificationApi,
    updateSpecificationApi,
    deleteSpecificationApi
};