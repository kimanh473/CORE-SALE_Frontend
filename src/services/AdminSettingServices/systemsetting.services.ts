import httpClient from "../services";
const detailSystemSettingApi = (code: string) => {
    return httpClient.get(`/setting/show/${code}`);
};
const updateSystemSettingApi = (data: any) => {
    return httpClient.post(`/setting/create-value-json`, data);
};
export {
    detailSystemSettingApi,
    updateSystemSettingApi,
};