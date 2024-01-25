import httpClient from '@/services/services'
const GetAllCityApi = () => {
  return httpClient.get(`/location/index?type=2`)
}
const GetAllDistrictsApi = (id: number) => {
  return httpClient.get(`/location/index?parent_id=${id}`)
}
const GetAllDistrictsApiSecond = () => {
  return httpClient.get(`/location/index?type=3`)
}
const GetAllWardsApi = (id: number) => {
  return httpClient.get(`/location/index?parent_id=${id}`)
}
const GetAllWardsApiSecond = () => {
  return httpClient.get(`/location/index?type=4`)
}
const GetAllCountryApi = () => {
  return httpClient.get(`/location/index?type=1`)
}
const GetAllLocationApi = () => {
  return httpClient.get(`/location/index`)
}
export {
  GetAllCityApi,
  GetAllDistrictsApi,
  GetAllDistrictsApiSecond,
  GetAllWardsApi,
  GetAllWardsApiSecond,
  GetAllCountryApi,
  GetAllLocationApi,
}
