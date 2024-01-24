import { defineStore } from 'pinia'
import {
  getAllAttributeProductsApi,
  deleteAttributeApi,
  createAttributeApi,
  getDetailAttributeProductsApi,
  updateAttributeApi,
} from '@/services/SettingStoreServices/attributeProduct.service'
import { DataAttribute } from '@/store/modules/store-setting/store.type'
export const useAttributeProduct = defineStore('AttributeProduct', {
  state: () => ({
    listAttributeProduct: [] as DataAttribute[],
    listAttributeProductOption: [] as DataAttribute[],
    detailAttribute: {} as DataAttribute,
    listAttributeSpecification: [] as DataAttribute[],
  }),
  getters: {
    // getData: (state) => {
    //     return state.listInventory
    // },
    // getListInventory: (state: any) => {
    //     return (payload: any) => state.listInventory = payload.map((item: any) => ({
    //         id: item.id,
    //         title: item.title,
    //         code: item.code,
    //         status: item.status == null || item.status == '0' ? false : true,
    //         json_type_code: item.json_type_code.map((item: any) => item + ' '),
    //         address: item.address,
    //         fullname: item.user_created.fullname,
    //         created_at: item.created_at.substring(0, 10),
    //     }))
    // },
    getListAttribute: (state: any) => {
      return (payload: any) => {
        state.listAttributeProduct = payload
        state.listAttributeProductOption = payload.map(
          (item: DataAttribute) => ({
            id: item.id,
            key: item.id.toString(),
            code: item.attribute_code,
            title: item.frontend_label,
          })
        )
      }
    },
    getDetailAttribute: (state: any) => {
      return (payload: any) => (state.detailAttribute = payload)
    },
    getlistAttributeSpecification: (state: any) => {
      return (payload: any) =>
        (state.listAttributeSpecification = payload.filter(
          (item: DataAttribute) =>
            item.frontend_input === 'text' ||
            item.frontend_input === 'textarea' ||
            item.frontend_input === 'selection'
        ))
    },
  },
  actions: {
    async getListAttributeAction() {
      await getAllAttributeProductsApi()
        .then((payload: any) => {
          const res = payload?.data?.data?.data
          this.getListAttribute(res)
          this.getlistAttributeSpecification(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getDetailAttributeAction(id: number) {
      await getDetailAttributeProductsApi(id)
        .then((payload: any) => {
          const res = payload?.data?.data
          this.getDetailAttribute(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async createAttributeAction(
      data: Object,
      toast: any,
      router: any,
      EndTimeLoading: Function
      // handleCloseCreate: Function
    ) {
      await createAttributeApi(data)
        .then((res) => {
          if (res.data.status === 'failed') {
            toast.error(res.data.messages)
            EndTimeLoading()
          } else {
            toast.success('Tạo mới thành công')
            router.push('/list-attribute-product')
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
    async updateProductUnitAction(
      id: number,
      data: object,
      toast: any,
      router: any,
      EndTimeLoading: Function
      // handleCloseCreate: Function
    ) {
      await updateAttributeApi(id, data)
        .then((res) => {
          if (res.data.status === 'failed') {
            toast.error(res.data.messages)
            EndTimeLoading()
          } else {
            toast.success('Cập nhật thành công')
            router.push('/list-attribute-product')
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
    deleteAttributeAction(
      id: number,
      EndTimeLoading: Function,
      toast: any,
      handleCloseConfirm: Function
    ) {
      deleteAttributeApi(id)
        .then((res) => {
          if (res.data.status === 'success') {
            toast.success('Xóa thành công', 500)
            this.getListAttributeAction()
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
