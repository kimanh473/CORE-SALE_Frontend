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
const updateProductApi = (id: number, data: object) => {
  return httpClient.post(`/catalog/product/update/${id}`, data)
}
// Xóa sản phẩm
const deleteProductApi = (id: number) => {
  return httpClient.post(`/catalog/product/delete/${id}`)
}
// Xóa nhiều sản phẩm
const deleteAllProductApi = (ids: any) => {
  return httpClient.post(`/catalog/product/deleteall`, ids)
}
// lọc sản phẩm theo ngành hàng,website
const filterProductApi = (data: object) => {
  return httpClient.post(`/catalog/product/filter`, data)
}

// Danh sách sản phẩm sàn Shopee
const getAllProductsShopeeNoPagingApi = () => {
  return httpClient.get(`/shopee/product/get_item_list`)
}
const getAllProductsShopeeApi = (pageSize: number, page: number) => {
  page = (page - 1) * pageSize
  return httpClient.get(
    `/shopee/product/get_item_list?offset=${page}&page_size=${pageSize}&item_status=NORMAL`
  )
}

//Đăng nhập vào shopee
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
  getBackToListShopeeProductApi
}
