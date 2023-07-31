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
//tạo mới ngành hàng
const createCategoryApi = (data: object) => {
    return httpClient.post(`/setting/nganhhang/create`, data);
};
//Sửa ngành hàng
const updateCategoryApi = (id: number, data: object) => {
    return httpClient.post(`/setting/nganhhang/update/${id}`, data);
};
//Xóa ngành hàng
const deleteCategoryApi = (id: number) => {
    return httpClient.post(`/setting/nganhhang/delete/${id}`);
};
export {
    getAllCategoryApi,
    getDetailCategoryApi,
    getAllCategoryTreeApi,
    createCategoryApi,
    updateCategoryApi,
    deleteCategoryApi
};