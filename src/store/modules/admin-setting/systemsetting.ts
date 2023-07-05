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
        updateSystemSettingAction(data: any, toast: any) {
            updateSystemSettingApi(data)
                .then((res: any) => {
                    if (res?.data?.status == 'success') {
                        toast.success("Cập nhật thành công");
                    } else {
                        toast.warning(res.data.messages.title);
                    }
                })
                .catch((err) => {
                    console.log(err)
                    if (err.response.status == 403) {
                        toast.warning("Bạn không có quyền thực hiện chức năng này");
                    } else if (err.response.status == 422) {
                        console.log(err.response);
                        toast.warning(err.response.data.error?.title[0]);
                    }
                });
        },
    },
})