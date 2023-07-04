import { defineStore } from "pinia";
import { updateSystemSettingApi, detailSystemSettingApi } from '../../../services/AdminSettingServices/systemsetting.services'
export const useSystemSetting = defineStore("SystemSetting", {
    state: () => ({
        dataSettingMail: {} as DataSystemSetting,
    }),
    getters: {},
    actions: {
        setDataSystem(payload: any) {
            this.dataSettingMail = payload?.data?.value
        },
        detailSystemSettingAction(code: string) {
            detailSystemSettingApi(code)
                .then((payload: any) => {
                    this.setDataSystem(payload.data)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        updateSystemSettingAction(data: any) {
            updateSystemSettingApi(data)
                .then((res: any) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err)
                });
        },
    },
})