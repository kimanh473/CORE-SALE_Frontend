import { defineStore } from 'pinia'
import {
  getAllGroupInventoryApi,
  createGroupInventoryApi,
  deleteGroupInventoryApi,
  getDetailGroupInventoryApi,
  updateGroupInventoryApi,
} from '@/services/InventoryServices/groupInventory.service'
import {
  DetailGroupInvent,
  optionGroupInvent,
} from '@/store/modules/inventory/inventory.type'
export const useGroupInventory = defineStore('GroupInventory', {
  state: () => ({
    listGroupInventory: [] as DetailGroupInvent[],
    listActiveGroupInventory: [] as DetailGroupInvent[],
    detailGroupInventory: {} as DetailGroupInvent,
    selectGroupInvent: [] as optionGroupInvent[],
  }),
  getters: {
    getListGroupInventory: (state: any) => {
      return (payload: any) => {
        state.listGroupInventory = payload
        state.listActiveGroupInventory = payload?.filter(
          (item: DetailGroupInvent) => item.status === '1'
        )
      }
    },
    getDetailGroupInventory: (state: any) => {
      return (payload: any) => (state.detailGroupInventory = payload)
    },
  },
  actions: {
    // getListGroupInventory(payload: any) {
    //     this.listGroupInventory = payload.data
    // },
    async getListGroupInventoryAction() {
      await getAllGroupInventoryApi()
        .then((payload: any) => {
          const res = payload?.data?.data
          this.getListGroupInventory(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getDetailGroupInventoryAction(id: number) {
      await getDetailGroupInventoryApi(id)
        .then((payload: any) => {
          const res = payload?.data?.data
          this.getDetailGroupInventory(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async createGroupInventoryAction(
      data: Object,
      toast: any,
      router: any,
      EndTimeLoading: Function
      // handleCloseCreate: Function
    ) {
      await createGroupInventoryApi(data)
        .then((res) => {
          if (res.data.status === 'failed') {
            toast.error(res.data.messages)
            EndTimeLoading()
          } else {
            toast.success('Tạo mới thành công')
            router.push('/list-group-inventory')
            EndTimeLoading()
          }
        })
        .catch((err) => {
          this.messageError = err.response.data.messages
          console.log(err)
          const arrMess = err.response.data.messages
          const errMess = arrMess[Object.keys(arrMess)[0]]
          toast.error(errMess[0])
        })
    },
    async updateGroupInventoryAction(
      id: number,
      data: Object,
      toast: any,
      router: any,
      EndTimeLoading: Function
      // handleCloseCreate: Function
    ) {
      await updateGroupInventoryApi(id, data)
        .then((res) => {
          if (res.data.status === 'failed') {
            toast.error(res.data.messages)
            EndTimeLoading()
          } else {
            toast.success('Cập nhật thành công')
            router.push('/list-group-inventory')
            // handleCloseCreate();
            EndTimeLoading()
          }
        })
        .catch((err) => {
          this.messageError = err.response.data.messages
          console.log(err)
          const arrMess = err.response.data.messages
          const errMess = arrMess[Object.keys(arrMess)[0]]
          toast.error(errMess[0])
        })
    },
    deleteGroupInventoryAction(
      id: number,
      EndTimeLoading: Function,
      toast: any,
      handleCloseConfirm: Function
    ) {
      deleteGroupInventoryApi(id)
        .then((res) => {
          if (res.data.status === 'success') {
            toast.success('Xóa thành công', 500)
            this.getListGroupInventoryAction()
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
