import httpClient from "../services";
const getAllPositionNoPaginateApi = () => {
    return httpClient.get(`/setting/position/index`);
};
export {
    getAllPositionNoPaginateApi,
};