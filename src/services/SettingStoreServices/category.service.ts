import httpClient from "../services";
//Danh sách ngành hàng
const getAllCategoryApi = () => {
    return httpClient.get(`/setting/nganhhang/index`);
};
//chi tiết ngành hàng
const getDetailCategoryApi = (id: number) => {
    return httpClient.get(`/setting/nganhhang/show/${id}`);
};
export {
    getAllCategoryApi,
    getDetailCategoryApi
};