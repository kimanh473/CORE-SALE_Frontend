import httpClient from "../services";
//list web không phân trang
const getAllWebCatalogsApi = () => {
    return httpClient.get(`/setting/catalog-website/list-no-paginate`);
};
//list web phân trang
const getAllWebIndexsApi = () => {
    return httpClient.get(`/setting/catalog-website/index`);
};
//Tạo mới web
const createWebApi = (data: object) => {
    return httpClient.post(`/setting/catalog-website/create`, data);
};
export {
    getAllWebCatalogsApi,
    getAllWebIndexsApi,
    createWebApi
};