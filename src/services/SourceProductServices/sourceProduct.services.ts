import httpClient from "../services";
//Danh sách kho
const getAllSourceProductsApi = () => {
    return httpClient.get(`/catalog-product/setting/inventory-source-location/index`);
};
//Tạo mới kho
const createSourceProductApi = (data: Object) => {
    return httpClient.post(`/catalog-product/setting/inventory-source-location/create`, data);
};
export {
    getAllSourceProductsApi,
    createSourceProductApi,
};