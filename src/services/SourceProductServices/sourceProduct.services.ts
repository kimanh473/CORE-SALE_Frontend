import httpClient from '@/services/services'
// Danh sách kho
const getAllSourceProductsApi = () => {
  return httpClient.get(
    `/catalog-product/setting/inventory-source-location/index`
  )
}
// Tạo mới kho
const createSourceProductApi = (data: Object) => {
  return httpClient.post(
    `/catalog-product/setting/inventory-source-location/create`,
    data
  )
}
//xóa kho
const deleteSourceProductApi = (id:number)=>{
  return httpClient.post(`/catalog-product/setting/inventory-source-location/delete`)
}

export { getAllSourceProductsApi, createSourceProductApi, deleteSourceProductApi }
