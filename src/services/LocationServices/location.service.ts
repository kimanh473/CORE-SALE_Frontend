import httpClient from "../services";
const GetAllCityApi = () => {
    return httpClient.get(`/location/index?type=2`);
};
const GetAllDistrictsApi = (id: number) => {
    return httpClient.get(`/location/index?parent_id=${id}`);
};
const GetAllDistrictsApi_2 = () => {
    return httpClient.get(`/location/index?type=3`);
};
const GetAllWardsApi = (id: number) => {
    return httpClient.get(`/location/index?parent_id=${id}`);
};
const GetAllWardsApi_2 = () => {
    return httpClient.get(`/location/index?type=4`);
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
    GetAllDistrictsApi_2,
    GetAllWardsApi,
    GetAllWardsApi_2,
    GetAllCountryApi,
    GetAllLocationApi,
};
