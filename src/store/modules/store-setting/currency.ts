import { defineStore } from 'pinia'
import {
  getListCurrencyApi,
  createCurrencyApi,
  deleteCurrencyApi,
  getDetailCurrencyApi,
  updateCurrencyApi,
  getListCurrencyInternationalApi,
  checkDefaultCurrencyApi
} from '../../../services/SettingStoreServices/currency.service'

export const useListCurrency = defineStore('ListCurrency', {
  state: () => ({
    listCurrency: [] as DataCurrency[],
    detailCurrency: {} as DataCurrency,
    listCurrencyInternational: [] as DataCurrencyInternational[],
    defaultCurrency: '',
    defaultStatus: ''
  }),
  getters: {
    getListCurrency: (state: any) => {
      return (payload: any) =>
      (state.listCurrency = payload?.map((item: DataCurrency) => ({
        id: item.id,
        title: item.title,
        code: item.code,
        symbol: item.symbol,
        symbol2: item.symbol2,
        decimal_number: item.decimal_number,
        rate: item.rate + '%',
        is_default: item.is_default, // == '1' ? 'Có' : 'Không',
        status: item.status, // == '1' ? 'Đang kích hoạt' : 'Chưa kích hoạt',
        created_by_id: item.created_by_id,
        created_by: item?.created_by,
        updated_by_id: item.updated_by_id,
        created_at: item.created_at,
        updated_at: item.updated_at,
        deleted_at: item.deleted_at,
      })))
    },
    getDetailCurrency: (state: any) => {
      return (payload: any) => (state.detailCurrency = payload)
    },
    getListCurrencyInternational: (state: any) => {
      return (payload: any) =>
      (state.listCurrencyInternational = payload?.map(
        (item: DataCurrencyInternational) => ({
          value: item.code,
          label: item.title,
        })
      ))
    },
    getDefaultCurrency: (state: any) => {
      return (payload: any) => {
        state.defaultStatus = payload.status.toString()
        state.defaultCurrency = payload.data
      }
    },
  },
  actions: {
    async getDefaultCurrencyAction() {
      await checkDefaultCurrencyApi()
        .then((payload: any) => {
          let res = payload?.data
          console.log(res)
          this.getDefaultCurrency(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getListCurrencyInternationalAction() {
      await getListCurrencyInternationalApi()
        .then((payload: any) => {
          let res = payload?.data?.data
          console.log(res)
          this.getListCurrencyInternational(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getListCurrencyAction() {
      await getListCurrencyApi()
        .then((payload: any) => {
          let res = payload?.data?.data
          this.getListCurrency(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getDetailCurrencyAction(id: number) {
      await getDetailCurrencyApi(id)
        .then((payload: any) => {
          let res = payload?.data?.data
          this.getDetailCurrency(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async createCurrencyAction(
      data: object,
      toast: any,
      router: any,
      EndTimeLoading: Function
      // handleCloseCreate: Function
    ) {
      await createCurrencyApi(data)
        .then((res) => {
          if (res.data.status == 'failed') {
            toast.error(res.data.messages)
            EndTimeLoading()
          } else {
            toast.success('Tạo mới thành công')
            EndTimeLoading()
            router.push('/list-currency')
          }
        })
        .catch((err) => {
          // this.messageError = err.response.data.messages
          // console.log(this.messageError);
          console.log(err)
          let arrMess = err.response.data.messages
          let errMess = arrMess[Object.keys(arrMess)[0]]
          toast.error(errMess[0])
        })
    },
    async updateCurrencyAction(
      id: number,
      data: object,
      toast: any,
      router: any,
      EndTimeLoading: Function
      // handleCloseCreate: Function
    ) {
      await updateCurrencyApi(id, data)
        .then((res) => {
          if (res.data.status == 'failed') {
            toast.error(res.data.messages)
            EndTimeLoading()
          } else {
            toast.success('Cập nhật thành công')
            router.push('/list-currency')
            EndTimeLoading()
          }
        })
        .catch((err) => {
          // this.messageError = err.response.data.messages
          // console.log(this.messageError);
          console.log(err)
          let arrMess = err.response.data.messages
          let errMess = arrMess[Object.keys(arrMess)[0]]
          toast.error(errMess[0])
        })
    },
    deleteCurrencyAction(
      id: number,
      toast: any,
      EndTimeLoading: Function,
      handleCloseConfirm: Function
    ) {
      deleteCurrencyApi(id)
        .then((res) => {
          if (res.data.status == 'success') {
            toast.success('Xóa thành công', 500)
            this.getListCurrencyAction()
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
