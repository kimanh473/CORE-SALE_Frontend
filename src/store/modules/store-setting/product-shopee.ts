import { defineStore } from 'pinia'
import {
  getAllProductsShopeeApi,
  getAllProductsShopeeNoPagingApi,
  getDetailProductApi,
  filterProductApi,
  deleteProductApi,
  deleteAllProductApi,
  // getShopShopeeApi,
  // getAllProductShopeeToDBApi,
  // getBackToListShopeeProductApi
  // updateProductApi,
} from '@/services/SettingStoreServices/product.service'
// import { update } from 'lodash-es'

export const useProductShopee = defineStore('ProductsShopee', {
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
    // async getListProductAction(
    //   time_range_field: any,
    //   perPage: number,
    //   page: number,
    //   EndTimeLoading: Function
    // ) {
    //   await getAllProductShopeeToDBApi()
    //     .then((payload1: any) => {
    //       const res = payload1?.data
    //       console.log(res)

    //       if (res.status === 'success') {
    //         getAllProductsShopeeApi(perPage, page).then((payload2: any) => {
    //           const resShopee = payload2?.data?.data
    //           this.getListProduct(resShopee)
    //         })
    //       }
    //       EndTimeLoading()
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // },
    async getListProductAction(
      web_site_code: string,
      perPage: number,
      page: number,
      EndTimeLoading: Function
    ) {
      await getAllProductsShopeeApi(web_site_code, perPage, page)
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
      await getAllProductsShopeeNoPagingApi()
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

    deleteProductAction(
      id: number,
      EndTimeLoading: Function,
      toast: any,
      handleCloseConfirm: Function,
      perPage: number,
      page: number
    ) {
      deleteProductApi(id)
        .then((res) => {
          if (res.data.status === 'success') {
            toast.success('Xóa thành công', 500)
            this.getListProductAction(perPage, page, EndTimeLoading)
          } else {
            toast.error(res.data.messages, 500)
          }
          EndTimeLoading()
          handleCloseConfirm()
        })
        .catch((err) => {
          console.log(err)
          handleCloseConfirm()
          EndTimeLoading()
        })
    },
    // delete all ko dùng api delete all
    // deleteAllProductAction(id: number, toast: any) {
    //   deleteProductApi(id)
    //     .then((res) => {
    //       if (res.data.status === 'success') {
    //         toast.success('Xóa thành công', 500)
    //       } else {
    //         toast.error(res.data.messages, 500)
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // },

    // delete all dùng api delete all
    deleteAllProductAction(
      data: Object,
      EndTimeLoading: Function,
      toast: any,
      handleCloseConfirmAll: Function,
      perPage: number,
      page: number
    ) {
      deleteAllProductApi(data)
        .then((res) => {
          if (res.data.status === 'success') {
            toast.success('Xóa thành công', 500)
            this.getListProductAction(perPage, page, EndTimeLoading)
          } else {
            toast.error(res.data.messages, 500)
          }
          EndTimeLoading()
          handleCloseConfirmAll()
        })
        .catch((err) => {
          console.log(err)
          handleCloseConfirmAll()
          EndTimeLoading()
        })
    },
    // async updateProductAction(
    //   id: number,
    //   data: object,
    //   toast: any,
    //   router: any,
    //   EndTimeLoading: Function
    // ) {
    // await updateProductApi(id, data)
    //     .then((res) => {
    //       if (res.data.status === 'failed') {
    //         toast.error(res.data.messages)
    //         EndTimeLoading()
    //       } else {
    //         toast.success('Cập nhật thành công')
    //         router.push('/products-list/page/1')
    //         EndTimeLoading()
    //       }
    //     })
    //     .catch((err) => {
    //       this.messageError = err.response?.data?.messages
    //       console.log(err)
    //       const arrMess = err.response.data.messages
    //       const errMess = arrMess[Object.keys(arrMess)[0]]
    //       toast.error(errMess[0])
    //     })
    // },
  },
})
