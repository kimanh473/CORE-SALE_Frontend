import { defineStore } from 'pinia'
import {
  getAllProductsApi,
  getAllProductsNoPagingApi,
  createProductApi,
  getDetailProductApi,
  filterProductApi,
  deleteProductApi,
  deleteAllProductApi,
  updateProductApi,
} from '@/services/SettingStoreServices/product.service'

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

    // sửa sản phẩm
    async updateProductAction(
      id: number,
      data: Object,
      toast: any,
      router: any,
      EndTimeLoading: Function
    ) {
      await updateProductApi(id, data)
        .then((res) => {
          if (res.data.status === 'failed') {
            toast.error(res.data.messages)
            EndTimeLoading()
          } else {
            toast.success('Cập nhật thành công')
            router.push('/products-list/page/1')
            EndTimeLoading()
          }
        })
        .catch((err) => {
          this.messageError = err.response?.data?.messages
          console.log(err)
          const arrMess = err.response.data.messages
          const errMess = arrMess[Object.keys(arrMess)[0]]
          toast.error(errMess[0])
        })
    },
  },
})
