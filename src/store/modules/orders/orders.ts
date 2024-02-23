import { defineStore } from 'pinia'
import {
  getAllOrderApi,
  getDetailOrderApi,
} from '@/services/OrderServices/Order.services'
import { Order } from '@/store/modules/orders/order.type'
export const useOrder = defineStore('customerGroup', {
  state: () => ({
    listOrder: [] as Order[],
    detailOrder: {} as Order,
    totalPage: <number>null,
    currentPage: <number>null,
  }),
  getters: {
    getListOrderPagination: (state: any) => {
      return (payload: any) => {
        state.listOrder = payload.data
        state.totalPage = payload.total
        state.currentPage = payload.current_page
      }
    },
    getDetailOrder: (state: any) => {
      return (payload: any) => {
        state.detailOrder = payload
      }
    },
  },

  actions: {
    getAllOrderPaginateAction(
      perPage: number,
      page: number,
      EndTimeLoading: Function
    ) {
      getAllOrderApi(perPage, page)
        .then((payload: any) => {
          const res = payload?.data?.data
          this.getListOrderPagination(res)
          EndTimeLoading()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getDetailOrderAction(id: number, EndTimeLoading: Function) {
      getDetailOrderApi(id)
        .then((payload: any) => {
          console.log(payload?.data?.data?.order_detail)
          const res = payload?.data?.data?.order_detail
          this.getDetailOrder(res)
          EndTimeLoading()
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
})
