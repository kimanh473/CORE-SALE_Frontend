import httpClient from "../services";
//Danh sách ngành hàng
const getAllCategoryApi = () => {
    return httpClient.get(`/setting/nganhhang/index`);
};
export {
    getAllCategoryApi,
};