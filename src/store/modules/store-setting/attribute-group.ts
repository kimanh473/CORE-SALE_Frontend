import { defineStore } from "pinia";
import { getAllSetAttributeGroupApi, getAllAttributeGroupApi, deleteAttributeGroupApi } from '../../../services/SettingStoreServices/attributeGroup.service'

export const useAttributeGroup = defineStore("AttributeGroup", {
    state: () => ({
        listAttributeGroup: [] as DataAttribute[],
        listSetAttributeGroup: [] as SetDataAttribute[],
        listDefault: {} as SetDataAttribute,
        listSpecDefault: {} as SetDataAttribute
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
        getListSetAttribute: (state: any) => {
            return (payload: any) => {
                state.listSetAttributeGroup = payload;
                state.listDefault = payload[0].json_group_attribute_detail.map((item: any) => ({
                    title: item.title,
                    attribute: item.attribute_detail
                }))
                state.listSpecDefault = payload[0].json_group_specification_detail.map((item: any) => ({
                    title: item.title,
                    attribute: item.attribute_detail
                }))
            }
        },
        getListAttribute: (state: any) => {
            return (payload: any) => state.listAttributeGroup = payload
        }
    },
    actions: {
        // getListInventory(payload: any) {
        //     this.listInventory = payload.data?.data
        // },
        // getDetailInventory(payload: any) {
        //     this.detailInventory = payload.data
        // },
        async getListSetAttributeGroupAction() {
            await getAllSetAttributeGroupApi()
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getListSetAttribute(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async getListAttributeGroupAction() {
            await getAllAttributeGroupApi()
                .then((payload: any) => {
                    let res = payload?.data?.data?.data
                    this.getListAttribute(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        deleteGroupAttributeAction(id: number, EndTimeLoading: Function, toast: any, handleCloseConfirm: Function) {
            deleteAttributeGroupApi(id)
                .then((res) => {
                    if (res.data.status == "success") {
                        toast.success("Xóa thành công", 500);
                        this.getListAttributeGroupAction()
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
        //     getDetailInventoryAction(id: number) {
        //         detailInventoryApi(id)
        //             .then((payload: any) => {
        //                 let res = payload?.data?.data
        //                 this.getDetailInventory(res)
        //             })
        //             .catch((err) => {
        //                 console.log(err)
        //             });
        //     },
        //     async createInventoryAction(
        //         data: Object,
        //         toast: any,
        //         router: any,
        //         EndTimeLoading: Function,
        //         // handleCloseCreate: Function
        //     ) {
        //         await createInventoryApi(data)
        //             .then((res) => {
        //                 if (res.data.status == "failed") {
        //                     toast.error(res.data.messages);
        //                     EndTimeLoading();
        //                 } else {
        //                     toast.success("Tạo mới thành công");
        //                     router.push('/list-inventory');
        //                     EndTimeLoading();
        //                 }
        //             })
        //             .catch((err) => {
        //                 toast.error("Tạo mới thất bại");
        //                 this.messageError = err.response.data.messages
        //                 console.log(this.messageError);
        //                 console.log(err);
        //             });
        //     },
        //     async updateInventoryAction(
        //         id: number,
        //         data: Object,
        //         toast: any,
        //         EndTimeLoading: Function,
        //         // handleCloseCreate: Function
        //     ) {
        //         await updateInventoryApi(id, data)
        //             .then((res) => {
        //                 if (res.data.status == "failed") {
        //                     toast.error(res.data.messages);
        //                     EndTimeLoading();
        //                 } else {
        //                     toast.success("Cập nhật thành công");
        //                     // handleCloseCreate();
        //                     EndTimeLoading();
        //                 }
        //             })
        //             .catch((err) => {
        //                 toast.error("Cập nhật thất bại");
        //                 this.messageError = err.response.data.messages
        //                 console.log(this.messageError);
        //                 console.log(err);
        //             });
        //     },
        //     deleteInventoryAction(id: number, EndTimeLoading: Function, toast: any, handleCloseConfirm: Function) {
        //         deleteInventoryApi(id)
        //             .then((res) => {
        //                 if (res.data.status == "success") {
        //                     toast.success("Xóa thành công", 500);
        //                 } else {
        //                     toast.error(res.data.messages, 500);
        //                 }
        //                 EndTimeLoading();
        //                 handleCloseConfirm();
        //             })
        //             .catch((err) => {
        //                 console.log(err);
        //                 handleCloseConfirm();
        //                 EndTimeLoading();
        //             });
        //     },
    },
})