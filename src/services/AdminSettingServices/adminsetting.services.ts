import httpClient from "../services";
const getAllPermissionGroupsApi = (perPage: Number, page: Number) => {
    return httpClient.get(`/setting/permission-group/index?per_page=${perPage}&page=${page}`);
};
export {
    getAllPermissionGroupsApi,
};