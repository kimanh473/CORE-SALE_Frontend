import httpClient from "../services";
//Danh sác nhóm thuộc tính
const getAllAttributeGroupApi = () => {
    return httpClient.get(`/store/product/group-attribute/index`);
};
//xóa nhóm thuộc tính
const deleteAttributeGroupApi = (id: number) => {
    return httpClient.post(`/store/product/group-attribute/delete/${id}`);
};
export {
    getAllAttributeGroupApi,
    deleteAttributeGroupApi
};