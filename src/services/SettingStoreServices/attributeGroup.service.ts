import httpClient from "../services";
//Danh sách thuộc tính
const getAllAttributeGroupApi = () => {
    return httpClient.get(`/store/product/group-attribute/index`);
};
export {
    getAllAttributeGroupApi,
};