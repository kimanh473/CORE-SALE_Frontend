import httpClient from "../services";
//Danh sách nhóm kho
const getAllGroupInventoryApi = () => {
    return httpClient.get(`/system-manage/product-inventory-type/index`);
};
//Chi tiết nhóm kho
const getDetailGroupInventoryApi = (id: number) => {
    return httpClient.get(`/system-manage/product-inventory-type/show/${id}`);
};
//Tạo mới nhóm kho
const createGroupInventoryApi = (data: Object) => {
    return httpClient.post(`/system-manage/product-inventory-type/create`, data);
};
//Cập nhật nhóm kho
const updateGroupInventoryApi = (id: number, data: Object) => {
    return httpClient.post(`/system-manage/product-inventory-type/update/${id}`, data);
};
//Xóa nhóm kho
const deleteGroupInventoryApi = (id: number) => {
    return httpClient.post(`/system-manage/product-inventory-type/delete/${id}`);
};
export {
    getAllGroupInventoryApi,
    getDetailGroupInventoryApi,
    createGroupInventoryApi,
    updateGroupInventoryApi,
    deleteGroupInventoryApi
};