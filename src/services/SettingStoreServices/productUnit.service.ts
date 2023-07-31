import httpClient from "../services";
const getAllProductUnitApi = () => {
    return httpClient.get(`/setting/product-unit/index`);
};
const getDetailProductUnitApi = (id: number) => {
    return httpClient.get(`/setting/product-unit/show/${id}`);
};
const createProductUnitApi = (data: object) => {
    return httpClient.post(`/setting/product-unit/create`, data);
};
const updateProductUnitApi = (id: number, data: object) => {
    return httpClient.post(`/setting/product-unit/update/${id}`, data);
};
const deleteProductUnitApi = (id: number) => {
    return httpClient.post(`/setting/product-unit/delete/${id}`);
};
export {
    getAllProductUnitApi,
    createProductUnitApi,
    deleteProductUnitApi,
    updateProductUnitApi,
    getDetailProductUnitApi
};