import { defineStore } from 'pinia'
import {
  getAllOrderApi,
  getDetailOrderApi,
  getAllOrderShopeeApi,
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
        state.dataCount = payload.status_total
        console.log(payload)
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
          this.getListOrderPagination(res)
          EndTimeLoading()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getOrderShopeeAction(
      perPage: number,
      page: number,
      status: any,
      time_from: string,
      time_to: string,
      toast: any,
      EndTimeLoading: Function
    ) {
      getAllOrderShopeeApi(time_from, time_to)
        .then((payload: any) => {
          if (payload.data.status === 'error') {
            toast.error(payload.data.message)
            EndTimeLoading()
          } else {
            toast.success('Cập nhật thành công')
            this.getAllOrderPaginateAction(
              perPage,
              page,
              status,
              EndTimeLoading
            )
            EndTimeLoading()
          }
        })
        .catch((err) => {
          console.log(err)
          const arrMess = err.response.data.messages
          const errMess = arrMess[Object.keys(arrMess)[0]]
          toast.error(errMess[0])
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
