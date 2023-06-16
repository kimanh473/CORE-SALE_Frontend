import httpClient from "../services";
//Danh sách kho
const getAllInventoryApi = () => {
    return httpClient.get(`/setting/product-inventory/index`);
};
//Tạo mới kho
const createInventoryApi = (data: Object) => {
    return httpClient.post(`/setting/product-inventory/create`, data);
};
export {
    getAllInventoryApi,
    createInventoryApi,
};