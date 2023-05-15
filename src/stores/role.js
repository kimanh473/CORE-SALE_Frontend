import {ref} from 'vue';
import {useRouter} from "vue-router";
import axios from "@/ultis/axios";
// import Swal from "sweetalert2";

export default function useRole() {
    const roles = ref([])
    const role = ref([])
    const router = useRouter()
    const errors = ref('')
    const getRoles = async (page) => {
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/roles?page=${page}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
        roles.value = response.data;
    }
    const getRole = async (id) => {
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/roles/` + id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
        role.value = response.data;
    }
    // const storeWarehouse_group = async (data) => {
    //     errors.value = '';
    //
    //     try {
    //         await axios.post(`http://127.0.0.1:8000/api/v1/warehouse-group/`, data, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
    //             }
    //         })
    //         Swal.fire('Tạo thành công ');
    //         await router.push({name: 'admin-warehouse-group-list'});
    //     } catch (e) {
    //         if (e.response.status === 422) {
    //             for (const key in e.response.data.errors) {
    //                 errors.value += e.response.data.errors[key][0] + '';
    //             }
    //         }
    //     }
    // }
    // const updateWarehouse_group = async (id) => {
    //     errors.value = ''
    //     try {
    //         await axios.put(`http://127.0.0.1:8000/api/v1/warehouse-group/${id}`, warehouse_group.value, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
    //             }
    //         });
    //         Swal.fire('Cập nhập thành công ');
    //         await router.push({name: 'admin-warehouse-group-list'});
    //         window.location.reload();
    //     } catch (e) {
    //         if (e.response.status === 422) {
    //             for (const key in e.response.data.errors) {
    //                 errors.value += e.response.data.errors[key][0] + '';
    //             }
    //         }
    //     }
    // }
    // const destroyWarehouse_group = async (id) => {
    //     Swal.fire({
    //         title: 'Bạn có chắc muốn xóa?',
    //         text: "Bạn sẽ không thể hoàn tác!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             await axios.delete(`http://127.0.0.1:8000/api/v1/warehouse-group/${id}`, {
    //                 headers: {
    //                     Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
    //                 }
    //             }).then(response => {
    //                 this.warehouse_groups.splice(this.warehouse_groups.indexOf(id), 1)
    //                 Swal.fire(
    //                     'Deleted!',
    //                     'Your file has been deleted.',
    //                     'success',
    //                 )
    //             })
    //         }
    //     })
    // }
    return {
        roles,
        role,
        errors,
        getRoles,
        getRole,
        // storeWarehouse_group,
        // updateWarehouse_group,
        // destroyWarehouse_group
    }
}
