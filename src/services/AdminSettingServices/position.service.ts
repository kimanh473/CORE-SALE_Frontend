import httpClient from '@/services/services'
const getAllPositionNoPaginateApi = () => {
  return httpClient.get(`/setting/position/index`)
}
export { getAllPositionNoPaginateApi }
