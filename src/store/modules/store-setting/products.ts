import { defineStore } from 'pinia'
import {
  getAllProductsApi,
  getAllProductsNoPagingApi,
  createProductApi,
  getDetailProductApi,
  filterProductApi,
} from '../../../services/SettingStoreServices/product.service'

export const useProduct = defineStore('Products', {
  state: () => ({
    listProduct: <any>[],
    totalPage: <number>null,
    currentPage: <number>null,
    listAllProduct: <any>[],
    listFiltered: <any>[],
    detailProduct: <any>{},
  }),
  getters: {
    getListProduct: (state: any) => {
      return (payload: any) => {
        state.listProduct = payload.data
        state.totalPage = payload.total
        state.currentPage = payload.current_page
      }
    },
    getListAllProduct: (state: any) => {
      return (payload: any) => (state.listAllProduct = payload)
    },
    getDetailProduct: (state: any) => {
      return (payload: any) => (state.detailProduct = payload)
    },
    getListFiltered: (state: any) => {
      return (payload: any) => (state.listFiltered = payload)
    },
  },
  actions: {
    async getListProductAction(
      perPage: number,
      page: number,
      EndTimeLoading: Function
    ) {
      await getAllProductsApi(perPage, page)
        .then((payload: any) => {
          const res = payload?.data?.data
          this.getListProduct(res)
          EndTimeLoading()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getListProductNoPagingAction() {
      await getAllProductsNoPagingApi()
        .then((payload: any) => {
          const res = payload?.data?.data?.data
          console.log(res)

          this.getListAllProduct(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getDetailProductAction(id: number) {
      await getDetailProductApi(id)
        .then((payload: any) => {
          const res = payload?.data?.data
          this.getDetailProduct(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async filterProductAction(data: object) {
      await filterProductApi(data)
        .then((payload: any) => {
          const res = payload?.data?.data
          this.getListFiltered(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async createProductAction(
      data: object,
      toast: any,
      router: any,
      EndTimeLoading: Function
      // handleCloseCreate: Function
    ) {
      await createProductApi(data)
        .then((res) => {
          if (res.data.status === 'failed') {
            toast.error(res.data.messages)
            EndTimeLoading()
          } else {
            toast.success('Tạo mới thành công')
            EndTimeLoading()
            router.push('/products-list/page/1')
          }
        })
        .catch((err) => {
          // this.messageError = err.response.data.messages
          // console.log(this.messageError);
          console.log(err)
          const arrMess = err.response.data.messages
          const errMess = arrMess[Object.keys(arrMess)[0]]
          toast.error(errMess[0])
        })
    },
  },
})
