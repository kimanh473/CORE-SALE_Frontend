import httpClient from "../services";
//Danh sách kho
const getAllGroupInventoryApi = () => {
    return httpClient.get(`/setting/product-inventory/index`);
};
//Tạo mới kho
const createGroupInventoryApi = (data: Object) => {
    return httpClient.post(`/setting/product-inventory/create`, data);
};
export {
    getAllGroupInventoryApi,
    createGroupInventoryApi,
};