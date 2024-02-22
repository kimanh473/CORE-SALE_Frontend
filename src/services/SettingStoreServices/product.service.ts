import httpClient from '@/services/services'
// Danh sách sản phẩm
const getAllProductsApi = (perPage: number, page: number) => {
  return httpClient.get(
    `/catalog/product/index?per_page=${perPage}&page=${page}`
  )
}
const getAllProductsNoPagingApi = () => {
  return httpClient.get(`/catalog/product/index`)
}
// Tạo sản phẩm
const createProductApi = (data: object) => {
  return httpClient.post(`/catalog/product/create`, data)
}
// Chi tiết sản phẩm
const getDetailProductApi = (id: number) => {
  return httpClient.get(`/catalog/product/show/${id}`)
}
// Sửa sản phẩm
const updateProductApi = (id: number, data: Object) => {
  return httpClient.post(`/catalog/product/update/${id}`,data)
}
// Xóa sản phẩm
const deleteProductApi = (id: number) => {
  return httpClient.post(`/catalog/product/delete/${id}`)
}
// Xóa nhiều sản phẩm
const deleteAllProductApi = (data: any) => {
  return httpClient.post(`/catalog/product/deleteall`, data)
}
// lọc sản phẩm theo ngành hàng,website
const filterProductApi = (data: object) => {
  return httpClient.post(`/catalog/product/filter`, data)
}

// Danh sách sản phẩm sàn Shopee
const getAllProductsShopeeNoPagingApi = () => {
  
  return httpClient.get(`/shopee/product/get_item_list`)
}
const getAllProductShopeeToDBApi = (time_range_field : any) => {
  return httpClient.get(`/shopee/order/get_order_list_sp`,time_range_field)
}
const getAllProductsShopeeApi = (perPage: number, page: number) => {
  return httpClient.post(
    `/shopee/order/get_order_list_db?per_page=${perPage}&page=${page}`
  )
}
// Đăng nhập vào shopee
const getShopShopeeApi = () => {
  return httpClient.post(`shopee/auth-shop`)
}

const getBackToListShopeeProductApi = () => {
  return httpClient.post(`shopee/set-auth-code`)
}
export {
  getAllProductsApi,
  createProductApi,
  getDetailProductApi,
  getAllProductsNoPagingApi,
  filterProductApi,
  deleteProductApi,
  deleteAllProductApi,
  updateProductApi,
  getAllProductsShopeeNoPagingApi,
  getAllProductsShopeeApi,
  getShopShopeeApi,
  getBackToListShopeeProductApi,
  getAllProductShopeeToDBApi
}
