import httpClient from "../services";
//Danh sách nhóm kho
const getAllGroupInventoryApi = () => {
    return httpClient.get(`/system-manage/product-inventory-type/index`);
};
//Tạo mới nhóm kho
const createGroupInventoryApi = (data: Object) => {
    return httpClient.post(`/system-manage/product-inventory-type/create`, data);
};
//Xóa nhóm kho
const deleteGroupInventoryApi = (data: Object) => {
    return httpClient.post(`/system-manage/product-inventory-type/create`, data);
};
export {
    getAllGroupInventoryApi,
    createGroupInventoryApi,
    deleteGroupInventoryApi
};