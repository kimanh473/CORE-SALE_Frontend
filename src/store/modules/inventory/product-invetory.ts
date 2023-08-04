import { defineStore } from "pinia";
import { getAllInventoryApi, createInventoryApi, updateInventoryApi, deleteInventoryApi, detailInventoryApi } from '../../../services/InventoryServices/inventory.service'

export const useInventory = defineStore("Inventory", {
    state: () => ({
        listInventory: [] as DataInventory[],
        detailInventory: {} as DetailInvent,
        messageError: {} as DetailErorr
    }),
    getters: {
        // getData: (state) => {
        //     return state.listInventory
        // },
        getListInventory: (state: any) => {
            return (payload: any) => state.listInventory = payload.map((item: any) => ({
                id: item.id,
                title: item.title,
                code: item.code,
                status: item.status == null || item.status == '0' ? 'Chưa kích hoạt' : 'Đang kích hoạt',
                json_type_code: item.json_type_code.map((item: any) => item + ' '),
                address: item.address,
                fullname: item.user_created.fullname,
                created_at: item.created_at.substring(0, 10),
            }))
        },
        getDetailInventory: (state: any) => {
            return (payload: any) => state.detailInventory = payload
        }
    },
    actions: {
        // getListInventory(payload: any) {
        //     this.listInventory = payload.data?.data
        // },
        // getDetailInventory(payload: any) {
        //     this.detailInventory = payload.data
        // },
        async getListInventoryAction() {
            await getAllInventoryApi()
                .then((payload: any) => {
                    let res = payload?.data?.data?.data
                    this.getListInventory(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        getDetailInventoryAction(id: number) {
            detailInventoryApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getDetailInventory(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async createInventoryAction(
            data: Object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await createInventoryApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công");
                        router.push('/list-inventory');
                        EndTimeLoading();
                    }
                })
                .catch((err) => {
                    this.messageError = err.response.data.messages
                    console.log(err);
                    let arrMess = err.response.data.messages;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                });
        },
        async updateInventoryAction(
            id: number,
            data: Object,
            toast: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await updateInventoryApi(id, data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Cập nhật thành công");
                        // handleCloseCreate();
                        EndTimeLoading();
                    }
                })
                .catch((err) => {
                    this.messageError = err.response.data.messages
                    console.log(err);
                    let arrMess = err.response.data.messages;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                });
        },
        deleteInventoryAction(id: number, EndTimeLoading: Function, toast: any, handleCloseConfirm: Function) {
            deleteInventoryApi(id)
                .then((res) => {
                    if (res.data.status == "success") {
                        toast.success("Xóa thành công", 500);
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