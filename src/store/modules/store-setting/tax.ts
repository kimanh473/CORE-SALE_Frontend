import { defineStore } from "pinia";
import { getListTaxApi, createTaxApi, deleteTaxApi } from '../../../services/SettingStoreServices/tax.service'

export const useListTax = defineStore("ListTax", {
    state: () => ({
        listTax: [] as DataTax[],
    }),
    getters: {
        getListTax: (state: any) => {
            return (payload: any) => state.listTax = payload?.map((item: DataTax) => ({
                id: item.id,
                title: item.title,
                code: item.code,
                tax_rate: item.tax_rate + '%',
                desc: item.desc,
                status: item.status == '1' ? 'Đang kích hoạt' : 'Chưa kích hoạt',
                created_by_id: item.created_by_id,
                updated_by_id: item.updated_by_id,
                created_at: item.created_at,
                updated_at: item.updated_at,
                deleted_at: item.deleted_at,
            }))
        },

    },
    actions: {
        async getListTaxAction() {
            await getListTaxApi()
                .then((payload: any) => {
                    let res = payload?.data?.data?.data
                    console.log(res);

                    this.getListTax(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async createTaxAction(
            data: object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await createTaxApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages)
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công")
                        EndTimeLoading()
                        router.push('/list-tax')
                    }
                })
                .catch((err) => {
                    // this.messageError = err.response.data.messages
                    // console.log(this.messageError);
                    console.log(err);
                    let arrMess = err.response.data.messages;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                });
        },
        deleteTaxAction(id: number, toast: any, EndTimeLoading: Function, handleCloseConfirm: Function) {
            deleteTaxApi(id)
                .then((res) => {
                    if (res.data.status == "success") {
                        toast.success("Xóa thành công", 500);
                        this.getListTaxAction()
                    } else {
                        toast.error(res.data.messages, 500);
                    }
                    EndTimeLoading();
                    handleCloseConfirm();
                })
                .catch((err) => {
                    console.log(err);
                    handleCloseConfirm();
                    EndTimeLoading();
                });
        },
    },
})