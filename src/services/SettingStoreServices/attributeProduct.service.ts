import httpClient from "../services";
//Danh sách thuộc tính
const getAllAttributeProductsApi = () => {
    return httpClient.get(`/setting/product-attribute/index`);
};
export {
    getAllAttributeProductsApi,
};