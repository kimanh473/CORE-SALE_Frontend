import httpClient from "../services";
const GetAllCityApi = () => {
    return httpClient.get(`/location/index?type=2`);
};
const GetAllDistrictsApi = (id: number) => {
    return httpClient.get(`/location/index?parent_id=${id}`);
};
const GetAllWardsApi = (id: number) => {
    return httpClient.get(`/location/index?parent_id=${id}`);
};
const GetAllCountryApi = () => {
    return httpClient.get(`/location/index?type=1`);
};
const GetAllLocationApi = () => {
    return httpClient.get(`/location/index`);
};
export {
    GetAllCityApi,
    GetAllDistrictsApi,
    GetAllWardsApi,
    GetAllCountryApi,
    GetAllLocationApi,
};
