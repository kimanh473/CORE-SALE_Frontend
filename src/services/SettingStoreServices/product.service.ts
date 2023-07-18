import httpClient from "../services";
//Danh sách sản phẩm
const getAllProductsApi = (perPage: number, page: number) => {
    return httpClient.get(`/catalog/product/index?per_page=${perPage}&page=${page}`);
};
export {
    getAllProductsApi,
};