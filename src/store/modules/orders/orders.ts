import { defineStore } from 'pinia'
import {
  getAllOrderApi,
  getDetailOrderApi,
} from '@/services/OrderServices/Order.services'
import {
  Order,
  OrderDetail,
  countStatus,
} from '@/store/modules/orders/order.type'
export const useOrder = defineStore('customerGroup', {
  state: () => ({
    listOrder: [] as Order[],
    detailOrder: {} as OrderDetail,
    totalPage: <number>null,
    currentPage: <number>null,
    dataCount: {} as countStatus,
  }),
  getters: {
    getListOrderPagination: (state: any) => {
      return (payload: any) => {
        state.listOrder = payload.data?.data
        state.totalPage = payload.data?.total
        state.currentPage = payload.data?.current_page
        state.dataCount = payload.total_status
        console.log(state.dataCount)
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
      status: any,
      EndTimeLoading: Function
    ) {
      getAllOrderApi(perPage, page, status)
        .then((payload: any) => {
          const res = payload?.data
          console.log(res)
          this.getListOrderPagination(res)
          EndTimeLoading()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getDetailOrderAction(id: number, EndTimeLoading: Function) {
      await getDetailOrderApi(id)
        .then((payload: any) => {
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
