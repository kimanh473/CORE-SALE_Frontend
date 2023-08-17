import { defineStore } from "pinia";
import { getAllAttributeProductsApi, deleteAttributeApi, createAttributeApi, getDetailAttributeProductsApi, updateAttributeApi } from '../../../services/SettingStoreServices/attributeProduct.service'

export const useAttributeProduct = defineStore("AttributeProduct", {
    state: () => ({
        listAttributeProduct: [] as DataAttribute[],
        detailAttribute: {} as DataAttribute
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
            return (payload: any) => state.listAttributeProduct = payload?.map((item: DataAttribute) => ({
                id: item.id,
                attribute_code: item.attribute_code,
                frontend_label: item.frontend_label,
                is_required: item.is_required == '1' ? 'Có' : 'Không',
                backend_type: item.backend_type,
                is_unique: item.is_unique == '1' ? 'Có' : 'Không',
                is_user_defined: item.is_user_defined == '1' ? 'Có' : 'Không',
                user_created: item.user_created,
                created_at: item.created_at,
                updated_at: item.updated_at,
                user_updated: item.user_updated

            }))

        },
        getDetailAttribute: (state: any) => {
            return (payload: any) => state.detailAttribute = payload
        }
    },
    actions: {
        // getListInventory(payload: any) {
        //     this.listInventory = payload.data?.data
        // },
        // getDetailInventory(payload: any) {
        //     this.detailInventory = payload.data
        // },
        async getListAttributeAction() {
            await getAllAttributeProductsApi()
                .then((payload: any) => {
                    let res = payload?.data?.data?.data
                    this.getListAttribute(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async getDetailAttributeAction(id: number) {
            await getDetailAttributeProductsApi(id)
                .then((payload: any) => {
                    let res = payload?.data?.data
                    this.getDetailAttribute(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async createAttributeAction(
            data: Object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await createAttributeApi(data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages);
                        EndTimeLoading();
                    } else {
                        toast.success("Tạo mới thành công");
                        router.push('/list-attribute-product');
                        EndTimeLoading();
                    }
                })
                .catch((err) => {
                    console.log(err);
                    let arrMess = err.response.data.messages;
                    let errMess = arrMess[Object.keys(arrMess)[0]]
                    toast.error(errMess[0]);
                });
        },
        async updateProductUnitAction(
            id: number,
            data: object,
            toast: any,
            router: any,
            EndTimeLoading: Function,
            // handleCloseCreate: Function
        ) {
            await updateAttributeApi(id, data)
                .then((res) => {
                    if (res.data.status == "failed") {
                        toast.error(res.data.messages)
                        EndTimeLoading();
                    } else {
                        toast.success("Cập nhật thành công")
                        router.push('/list-attribute-product')
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
        deleteAttributeAction(id: number, EndTimeLoading: Function, toast: any, handleCloseConfirm: Function) {
            deleteAttributeApi(id)
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