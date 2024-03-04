import httpClient from '@/services/services'
// Danh sách nhóm thuộc tính
const getAllAttributeGroupApi = () => {
  return httpClient.get(`/store/product/group-attribute/index`)
}
// Chi tiết nhóm thuộc tính
const getDetailAttributeGroupApi = (id: number) => {
  return httpClient.get(`/store/product/group-attribute/show/${id}`)
}
// Tạo mới nhóm thuộc tính
const createAttributeGroupApi = (data: object) => {
  return httpClient.post(`/store/product/group-attribute/create`, data)
}
// Cập nhật nhóm thuộc tính
const updateAttributeGroupApi = (id: number, data: object) => {
  return httpClient.post(`/store/product/group-attribute/update/${id}`, data)
}
// xóa nhóm thuộc tính
const deleteAttributeGroupApi = (id: number) => {
  return httpClient.post(`/store/product/group-attribute/delete/${id}`)
}
// Danh sách bộ thuộc tính
const getAllSetAttributeGroupApi = () => {
  return httpClient.get(`/system-manage/product-category/index`)
}
// Chi tiết bộ thuộc tính
const getDetailSetAttributeGroupApi = (id: number) => {
  return httpClient.get(`/system-manage/product-category/show/${id}`)
}
// Tạo mới bộ thuộc tính
const createAttributeCategoryApi = (data: object) => {
  return httpClient.post(`/system-manage/product-category/create`, data)
}
// Cập nhật bộ thuộc tính
const updateAttributeCategoryApi = (id: number, data: object) => {
  return httpClient.post(`/system-manage/product-category/update/${id}`, data)
}
// xóa bộ thuộc tính
const deleteAttributeCategoryApi = (id: number) => {
  return httpClient.post(`/system-manage/product-category/delete/${id}`)
}
export {
  getAllAttributeGroupApi,
  deleteAttributeGroupApi,
  getAllSetAttributeGroupApi,
  getDetailSetAttributeGroupApi,
  createAttributeGroupApi,
  updateAttributeGroupApi,
  getDetailAttributeGroupApi,
  createAttributeCategoryApi,
  updateAttributeCategoryApi,
  deleteAttributeCategoryApi,
}
