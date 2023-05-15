import {ref} from 'vue';
import { useRouter } from "vue-router";
import axios from "@/ultis/axios";
import Swal from "sweetalert2";

export default function useGroup(){
    const groups = ref([]);
    const group = ref([]);
    const router = useRouter()
    const errors = ref('');

    const getGroups = async (page)=> {
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/groups?page=${page}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
        groups.value = response.data;
    }
    const getGroup = async (id) => {
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/groups/`+id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
        group.value = response.data;
    }
    const storeGroup = async (data) => {
        errors.value = '';
        try {
            await axios.post(`http://127.0.0.1:8000/api/v1/groups/`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                }
            })
            Swal.fire('Tạo thành công ');
            await router.push({name: 'admin-group-list'});
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + '';
                }
            }
        }
    }
    const updateGroup = async (id) => {
        errors.value = ''
        try {
            await axios.put(`http://127.0.0.1:8000/api/v1/groups/${id}`, group.value, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                }
            });
            Swal.fire('Cập nhập thành công ');
            await router.push({name: 'admin-group-list'});
            window.location.reload();
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + '';
                }
            }
        }
    }
    const destroyGroup = async (id) => {
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
                await axios.delete(`http://127.0.0.1:8000/api/v1/groups/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                    }
                }).then(response => {
                    this.groups.splice(this.groups.indexOf(id), 1)
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
        groups,
        group,
        errors,
        getGroups,
        getGroup,
        storeGroup,
        updateGroup,
        destroyGroup

    }
}