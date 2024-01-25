import { defineStore } from 'pinia'
import {
  getAdjustPriceApi,
  getdetailAdjustPriceApi,
  createAdjustPriceApi,
  updateAdjustPriceApi,
  deleteAdjustPriceApi,
} from '@/services/SettingStoreServices/priceAdjust.service'
import dayjs from 'dayjs'
import {
  DataAdjustPrice,
  Period,
} from '@/store/modules/store-setting/store.type'
export const useAdjustPrice = defineStore('AdjustPrice', {
  state: () => ({
    listAdjustPrice: [] as DataAdjustPrice[],
    detailAdjustPrice: {} as DataAdjustPrice,
    listPeriod: [] as Period[],
    listCodeWeb: [],
    listCodeCategory: [],
    listTableDetail: [],
  }),
  getters: {
    getListAdjustPrice: (state: any) => {
      return (payload: any) => (state.listAdjustPrice = payload)
    },
    getDetailAdjustPrice: (state: any) => {
      return (payload: any) => {
        state.detailAdjustPrice = payload
        state.listTableDetail = payload.json_product_price_detail.map(
          (item: any, index: number) => ({
            key: index,
            name: item.name,
            sku: item.sku,
            unit: item.unit,
            code: item.code,
            detail: item.detail,
          })
        )
        state.listPeriod = payload.json_period.map((item: Period) => ({
          title: item.title,
          date_start: dayjs(item.date_start),
          date_end: dayjs(item.date_end),
          listed_price: item.listed_price,
          wholesale_price: item.wholesale_price,
          retail_price: item.retail_price,
        }))
        state.listCodeWeb = payload.json_website_list.map(
          (item: any) => item.code
        )
        state.listCodeCategory = payload.json_nganh_hang_list.map(
          (item: any) => item.code
        )
      }
    },
  },
  actions: {
    async getListAdjustPriceAction() {
      await getAdjustPriceApi()
        .then((payload: any) => {
          const res = payload?.data?.data?.data
          console.log(res)
          this.getListAdjustPrice(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getDetailAdjustPriceAction(id: number) {
      await getdetailAdjustPriceApi(id)
        .then((payload: any) => {
          const res = payload?.data?.data
          console.log(res)
          this.getDetailAdjustPrice(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async createAdjustPriceAction(
      data: object,
      toast: any,
      router: any,
      EndTimeLoading: Function
      // handleCloseCreate: Function
    ) {
      await createAdjustPriceApi(data)
        .then((res) => {
          if (res.data.status === 'failed') {
            toast.error(res.data.messages)
            EndTimeLoading()
          } else {
            toast.success('Tạo mới thành công')
            EndTimeLoading()
            router.push('/price-adjust')
          }
        })
        .catch((err) => {
          // this.messageError = err.response.data.messages
          // console.log(this.messageError);
          console.log(err)
          const arrMess = err.response.data.messages
          const errMess = arrMess[Object.keys(arrMess)[0]]
          toast.error(errMess[0])
          EndTimeLoading()
        })
    },
    async updateAdjustPriceAction(
      id: number,
      data: object,
      router: any,
      toast: any,
      EndTimeLoading: Function
      // handleCloseCreate: Function
    ) {
      await updateAdjustPriceApi(id, data)
        .then((res) => {
          if (res.data.status === 'failed') {
            toast.error(res.data.messages)
            EndTimeLoading()
          } else {
            toast.success('Cập nhật thành công')
            router.push('/price-adjust')
            EndTimeLoading()
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
    deleteAdjustPriceAction(
      id: number,
      toast: any,
      EndTimeLoading: Function,
      handleCloseConfirm: Function
    ) {
      deleteAdjustPriceApi(id)
        .then((res) => {
          if (res.data.status === 'success') {
            toast.success('Xóa thành công', 500)
            this.getListAdjustPriceAction()
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
  },
})
