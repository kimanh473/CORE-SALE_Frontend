import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import {
  getAllProductsShopeeApi,
  getAllProductsShopeeNoPagingApi,
  getDetailProductApi,
  filterProductApi,
  deleteProductApi,
  getShopShopeeApi,
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
    async getListProductAction(
      perPage: number,
      page: number,
      EndTimeLoading: Function
    ) {
      await getAllProductsShopeeApi(perPage, page)  
        .then((payload: any) => {
          console.log(payload);
          const res = payload?.data?.data
          console.log(res)
          console.log(res.message)
          if (res.message === 'Invalid access_token.') {
            getShopShopeeApi()
              .then((payload2: any)=>{
                console.log(payload2);
                const resShopee = payload2?.data
                window.location = resShopee.url
            })
          }
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
    deleteAllProductAction(id: number, toast: any) {
      deleteProductApi(id)
        .then((res) => {
          if (res.data.status === 'success') {
            toast.success('Xóa thành công', 500)
            // this.getListProductAction(perPage, page, EndTimeLoading)
          } else {
            toast.error(res.data.messages, 500)
          }
        })
        .catch((err) => {
          console.log(err)
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
