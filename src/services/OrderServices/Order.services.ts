import httpClient from '@/services/services'
const getAllOrderApi = (perPage: number, page: number, status: any) => {
  // return httpClient.get(`/user/order/list-order`)
  return httpClient.get(
    `shopee/order/get_order_list_db?per_page=${perPage}&page=${page}&status=${status}`
  )
}

const getAllOrderShopeeFilterApi = (
  search_word: string,
  time_from: string,
  time_to: string,
  shop_id: string,
  platform: string,
  order_status: string
) => {
  return httpClient.get(`shopee/order/get_order_list_sp`, {
    params: {
      search_word,
      time_from,
      time_to,
      shop_id,
      platform,
      order_status,
    },
  })
}
const getAllOrderShopeeApi = (time_from: string, time_to: string) => {
  // return httpClient.get(`/user/order/list-order`)
  return httpClient.get(`shopee/order/get_order_list_sp`, {
    params: { time_from, time_to },
  })
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

export {
  getAllOrderApi,
  getAllOrderShopeeFilterApi,
  getDetailOrderApi,
  getAllOrderShopeeApi,
}
