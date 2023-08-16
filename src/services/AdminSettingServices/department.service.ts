import httpClient from "../services";
const getAllDepartmentNoPaginateApi = () => {
    return httpClient.get(`/setting/department/index`);
};
export {
    getAllDepartmentNoPaginateApi,
};