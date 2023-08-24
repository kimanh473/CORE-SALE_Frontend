import httpClient from "../services";
//Danh sách bộ thuộc tính
const getAllSetAttributeGroupApi = () => {
    return httpClient.get(`/system-manage/product-category/index`);
};
//Danh sách nhóm thuộc tính
const getAllAttributeGroupApi = () => {
    return httpClient.get(`/store/product/group-attribute/index`);
};
//xóa nhóm thuộc tính
const deleteAttributeGroupApi = (id: number) => {
    return httpClient.post(`/store/product/group-attribute/delete/${id}`);
};
export {
    getAllAttributeGroupApi,
    deleteAttributeGroupApi,
    getAllSetAttributeGroupApi
};