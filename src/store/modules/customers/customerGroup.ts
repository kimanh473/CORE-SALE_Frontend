import {defineStore} from "pinia";
import {
    getAllGroupCustomerApi,
    createGroupCustomerApi
} from '../../../services/CustomerProfileServices/customerGroup.services'

export const useGroupCustomer = defineStore("customerGroup", {
    state: () => ({
        listGroupCustomer: [] as DataGroupCustomer[],
        detailGroupCustomer: {} as DataGroupCustomer,
        idState: [],
        idWard: [],
        idDistrict: null,
        is_default: null,
    }),
    getters: {
        getListGroupCustomerPagination: (state: any) => {
            return (payload: any) => state.listGroupCustomer = payload?.map((item: any) => ({
                id: item.id,
                code: item.code,
                title: item.title,
                status: item.status,
                is_default: item.is_default,
                desc: item.desc,
                rule: item.rule,
                json_rule_detail: item.json_rule_detail
            }))
        },
        getDetailGroupCustomer: (state: any) => {
            return (payload: any) => {
                state.detailGroupCustomer = payload
            }
        },
    },

    actions: {
        getAllGroupCustomerPaginateAction() {
            getAllGroupCustomerApi()
                .then((payload: any) => {
                    let res = payload?.data?.data?.data;
                    this.getListGroupCustomerPagination(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async createGroupCustomerAction(
            data: Object,
            toast: any,
            EndTimeLoading: Function,
            handleCloseCreate: Function
        ) {
            await createGroupCustomerApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công");
                        EndTimeLoading();
                        handleCloseCreate();
                        this.getAllCustomerAccountPaginateAction()
                    }
                })
                .catch((err) => {
                    // this.messageError = err.response.data.messages
                    // console.log(this.messageError);
                    console.log(err);
                    EndTimeLoading();
                    let arrMess = err.response.data.message;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                });
        },
    }
});