import httpClient from "../services";
//Danh sách kho
const getAllInventoryApi = () => {
    return httpClient.get(`/setting/product-inventory/index`);
};
//Tạo mới kho
const createInventoryApi = (data: Object) => {
    return httpClient.post(`/setting/product-inventory/create`, data);
};
//Sửa kho
const updateInventoryApi = (id: number, data: Object) => {
    return httpClient.post(`/setting/product-inventory/update/${id}`, data);
};
//Xóa kho
const deleteInventoryApi = (id: number) => {
    return httpClient.post(`/setting/product-inventory/delete/${id}`);
};
//lấy thông tin chi tiết kho
const detailInventoryApi = (id: number) => {
    return httpClient.get(`/setting/product-inventory/show/${id}`);
};
export {
    getAllInventoryApi,
    createInventoryApi,
    updateInventoryApi,
    deleteInventoryApi,
    detailInventoryApi
};