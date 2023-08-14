import httpClient from "../services";
//Danh sách thuộc tính
const getAllAttributeProductsApi = () => {
    return httpClient.get(`/setting/product-attribute/index`);
};
//Chi tiết thuộc tính
const getDetailAttributeProductsApi = (id: number) => {
    return httpClient.get(`/setting/product-attribute/show/${id}`);
};
//Thêm mới thuộc tính
const createAttributeApi = (data: object) => {
    return httpClient.post(`/setting/product-attribute/create`, data);
};
//Cập nhật thuộc tính
const updateAttributeApi = (id: number, data: object) => {
    return httpClient.post(`/setting/product-attribute/update/${id}`, data);
};
//Xóa thuộc tính
const deleteAttributeApi = (id: number) => {
    return httpClient.post(`/setting/product-attribute/delete/${id}`);
};
export {
    getAllAttributeProductsApi,
    createAttributeApi,
    deleteAttributeApi,
    getDetailAttributeProductsApi,
    updateAttributeApi
};