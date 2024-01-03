import { defineStore } from "pinia";
import {
    getAllSetAttributeGroupApi,
    getAllAttributeGroupApi,
    deleteAttributeGroupApi,
    getDetailSetAttributeGroupApi,
    createAttributeGroupApi,
    updateAttributeGroupApi,
    getDetailAttributeGroupApi,
    createAttributeCategoryApi,
    updateAttributeCategoryApi
} from '../../../services/SettingStoreServices/attributeGroup.service'

export const useAttributeGroup = defineStore("AttributeGroup", {
    state: () => ({
        listAttributeGroup: [] as DataAttribute[],
        listAttributeGroupOption: [] as DataGroupAttribute[],
        detailAttributeGroup: {} as DataGroupAttribute,
        listSetAttributeGroup: [] as SetDataAttribute[],
        listDefault: {} as SetDataAttribute,
        listSpecDefault: {} as SetDataAttribute,
        detailAttributeCategory: {} as SetDataAttribute,
        detailSetAttribute: {} as SetDataAttribute,
        detailSpecAttribute: {} as SetDataAttribute,
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
            return (payload: any) => {
                state.listAttributeGroup = payload
                state.listAttributeGroupOption = payload.map((item: DataGroupAttribute) => ({
                    id: item.id,
                    key: item.id.toString(),
                    code: item.code,
                    title: item.title
                }))
            }
        },
        getDetailGroupAttribute: (state: any) => {
            return (payload: any) => {
                state.detailAttributeGroup = payload
            }
        },
        getDetailSetAttribute: (state: any) => {
            return (payload: any) => {
                state.detailAttributeCategory = payload
                state.detailSetAttribute = payload.json_group_attribute_detail
                state.detailSpecAttribute = payload.json_group_specification_detail
            }
        },
    },
    actions: {
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
        async getDetailSetAttributeGroupAction(id: number) {
            await getDetailSetAttributeGroupApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getDetailSetAttribute(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async createAttributeGroupAction(data: object, toast: any, router: any, EndTimeLoading: Function) {
            await createAttributeGroupApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages)
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công")
                        router.push('/list-attribute-group')
                        EndTimeLoading()
                    }
                })
                .catch((err) => {
                    console.log(err)
                    let arrMess = err.response.data.messages;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                });
        },
        async createAttributeCategoryAction(data: object, toast: any, router: any, EndTimeLoading: Function) {
            await createAttributeCategoryApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages)
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công")
                        router.push('/list-attribute-category')
                        EndTimeLoading()
                    }
                })
                .catch((err) => {
                    console.log(err)
                    let arrMess = err.response.data.messages;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                });
        },
        async updateAttributeCategoryAction(
            id: number,
            data: object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await updateAttributeCategoryApi(id, data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages)
                        EndTimeLoading();
                    } else {
                        toast.success("Cập nhật thành công")
                        router.push('/list-attribute-category')
                        EndTimeLoading()
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
        async updateAttributeGroupAction(
            id: number,
            data: object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await updateAttributeGroupApi(id, data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages)
                        EndTimeLoading();
                    } else {
                        toast.success("Cập nhật thành công")
                        router.push('/list-attribute-group')
                        EndTimeLoading()
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
        async getDetailAttributeGroupAction(id: number) {
            await getDetailAttributeGroupApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getDetailGroupAttribute(res)
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