import httpClient from "../services";
//Danh sách sản phẩm
const getAllProductsApi = (perPage: number, page: number) => {
    return httpClient.get(`/catalog/product/index?per_page=${perPage}&page=${page}`);
};
const getAllProductsNoPagingApi = () => {
    return httpClient.get(`/catalog/product/index`);
};
//Tạo sản phẩm
const createProductApi = (data: object) => {
    return httpClient.post(`/catalog/product/create`, data);
};
//Chi tiết sản phẩm
const getDetailProductApi = (id: number) => {
    return httpClient.get(`/catalog/product/show/${id}`);
};
//lọc sản phẩm theo ngành hàng,website
const filterProductApi = (data: object) => {
    return httpClient.post(`/catalog/product/filter`, data);
};
export {
    getAllProductsApi,
    createProductApi,
    getDetailProductApi,
    getAllProductsNoPagingApi,
    filterProductApi
};