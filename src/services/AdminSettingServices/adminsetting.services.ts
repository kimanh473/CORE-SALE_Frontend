import httpClient from '@/services/services'
const getAllPermissionGroupsApi = (perPage: number, page: number) => {
  return httpClient.get(
    `/setting/permission-group/index?per_page=${perPage}&page=${page}`
  )
}
const getDetailPermissionGroupsApi = (id: number) => {
  return httpClient.get(`/setting/permission-group/show/${id}`)
}
const createPermissionGroupsApi = (data: object) => {
  return httpClient.post(`/setting/permission-group/create`, data)
}
const updatePermissionGroupsApi = (id: number, data: object) => {
  return httpClient.post(`/setting/permission-group/update/${id}`, data)
}
const deletePermissionGroupsApi = (id: number) => {
  return httpClient.post(`setting/permission-group/delete/${id}`)
}
export {
  getAllPermissionGroupsApi,
  deletePermissionGroupsApi,
  createPermissionGroupsApi,
  getDetailPermissionGroupsApi,
  updatePermissionGroupsApi,
}
