import httpClient from '@/services/services'
const getAllDepartmentNoPaginateApi = () => {
  return httpClient.get(`/setting/department/index`)
}
export { getAllDepartmentNoPaginateApi }
