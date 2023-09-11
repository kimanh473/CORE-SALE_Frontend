import httpClient from "../services";
//Danh sách sản phẩm
const getAllProductsApi = (perPage: number, page: number) => {
    return httpClient.get(`/catalog/product/index?per_page=${perPage}&page=${page}`);
};
//Tạo sản phẩm
const createProductApi = (data: object) => {
    return httpClient.post(`/catalog/product/create`, data);
};
//Chi tiết sản phẩm
const getDetailProductApi = (id: number) => {
    return httpClient.get(`/catalog/product/show/${id}`);
};
export {
    getAllProductsApi,
    createProductApi,
    getDetailProductApi
};