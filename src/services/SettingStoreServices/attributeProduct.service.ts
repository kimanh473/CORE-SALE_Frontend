import httpClient from "../services";
//Danh sách thuộc tính
const getAllAttributeProductsApi = () => {
    return httpClient.get(`/setting/product-attribute/index`);
};
//Xóa thuộc tính
const deleteAttributeApi = (id: number) => {
    return httpClient.post(`/setting/product-attribute/delete/${id}`);
};
export {
    getAllAttributeProductsApi,
    deleteAttributeApi
};