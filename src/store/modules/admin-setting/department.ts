import { defineStore } from 'pinia'
import { getAllDepartmentNoPaginateApi } from '../../../services/AdminSettingServices/department.service'
import { DataDepartment } from '@/store/modules/admin-setting/systemsetting.type'
export const useDepartment = defineStore('Departments', {
  state: () => ({
    listDepartment: [] as DataDepartment[],
  }),
  getters: {
    getListDepartment: (state: any) => {
      return (payload: any) =>
        (state.listDepartment = payload?.map((item: DataDepartment) => ({
          label: item.title,
          value: item.id,
        })))
    },
  },
  actions: {
    async getListDepartmentAction() {
      await getAllDepartmentNoPaginateApi()
        .then((payload: any) => {
          const res = payload?.data?.data
          this.getListDepartment(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
})
