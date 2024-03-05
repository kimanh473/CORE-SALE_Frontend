import httpClient from '@/services/services'
const getAllOrderApi = (perPage: number, page: number, status: any) => {
  // return httpClient.get(`/user/order/list-order`)
  return httpClient.get(
    `shopee/order/get_order_list_db?per_page=${perPage}&page=${page}&status=${status}`
  )
}
const getAllOrderShopeeApi = () => {
  // return httpClient.get(`/user/order/list-order`)
  return httpClient.get(`shopee/order/get_order_list_sp`)
}
// const createGroupCustomerApi = (data: object) => {
//   return httpClient.post(`/system-manage/customer-type/create`, data)
// }

const getDetailOrderApi = (id: number) => {
  // return httpClient.get(`/order/show/${id}`)
  return httpClient.get(`shopee/order/get_order_detail_db/${id}`)
}

// const updateGroupCustomerApi = (id: number, data: object) => {
//   return httpClient.post(`/system-manage/customer-type/update/${id}`, data)
// }

// const deleteGroupCustomerApi = (id: number) => {
//   return httpClient.post(`/system-manage/customer-type/delete/${id}`)
// }

export { getAllOrderApi, getDetailOrderApi, getAllOrderShopeeApi }
