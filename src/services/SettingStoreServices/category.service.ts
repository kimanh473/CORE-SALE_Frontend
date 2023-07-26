import httpClient from "../services";
//Danh sách ngành hàng
const getAllCategoryApi = () => {
    return httpClient.get(`/setting/nganhhang/index`);
};
//Danh sách cây ngành hàng
const getAllCategoryTreeApi = () => {
    return httpClient.get(`/setting/nganhhang/index-tree`);
};
//chi tiết ngành hàng
const getDetailCategoryApi = (id: number) => {
    return httpClient.get(`/setting/nganhhang/show/${id}`);
};
export {
    getAllCategoryApi,
    getDetailCategoryApi,
    getAllCategoryTreeApi
};