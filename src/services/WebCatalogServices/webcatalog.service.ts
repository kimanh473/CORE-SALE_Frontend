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
//chi tiết web
// const detailWebApi = (id: number) => {
//     return httpClient.get(`/setting/product-inventory/show/${id}`);
// };

//xóa web
// const deleteWebApi = (id: number) => {
//     return httpClient.post(`/setting/product-inventory/delete/${id}`);
// };
export {
    getAllWebCatalogsApi,
    getAllWebIndexsApi,
    createWebApi
};