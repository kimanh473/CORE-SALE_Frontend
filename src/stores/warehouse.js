import {ref} from 'vue';
import { useRouter } from "vue-router";
import axios from "@/ultis/axios";
import Swal from "sweetalert2";

export default function useWarehouse(){
    const warehouses = ref([]);
    const warehouse = ref([]);
    const router = useRouter()
    const errors = ref('');

    const getWarehouses = async (page)=> {
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/warehouse?page=${page}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
        warehouses.value = response.data;
    }
    const getWarehouse = async (id) => {
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/warehouse/`+id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
        warehouse.value = response.data;
    }
    const storeWarehouse = async (data) => {
        errors.value = '';
        try {
            await axios.post(`http://127.0.0.1:8000/api/v1/warehouse/`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                }
            })
            Swal.fire('Tạo thành công ');
            await router.push({name: 'admin-warehouse-list'});
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + '';
                }
            }
        }
    }
    const updateWarehouse = async (id) => {
        errors.value = ''
        try {
            await axios.put(`http://127.0.0.1:8000/api/v1/warehouse/${id}`, warehouse.value, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                }
            });
            Swal.fire('Cập nhập thành công ');
            await router.push({name: 'admin-warehouse-list'});
            window.location.reload();
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + '';
                }
            }
        }
    }
    const destroyWarehouse = async (id) => {
        Swal.fire({
            title: 'Bạn có chắc muốn xóa?',
            text: "Bạn sẽ không thể hoàn tác!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`http://127.0.0.1:8000/api/v1/warehouse/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                    }
                }).then(response => {
                    this.warehouses.splice(this.warehouses.indexOf(id), 1)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success',
                    )
                })
            }
        })
    }
    return {
        warehouses,
        warehouse,
        errors,
        getWarehouses,
        getWarehouse,
        storeWarehouse,
        updateWarehouse,
        destroyWarehouse

    }
}