import {ref} from 'vue';
import { useRouter } from "vue-router";
import axios from "@/ultis/axios";
import Swal from "sweetalert2";

export default function useCare_service() {
    const care_services = ref([])
    const care_service = ref([])
    const router = useRouter()
    const errors = ref('')
    const getCare_services = async (page) => {
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/care-service?page=${page}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
        care_services.value = response.data;
    }
    const getCare_service = async (id) => {
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/care-service/` + id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
        care_service.value = response.data;
        console.log(response.data);
    }
    const storeCare_service = async (data) => {
        errors.value = '';
        try {
            await axios.post(`http://127.0.0.1:8000/api/v1/care-service/`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                }
            })
            Swal.fire('Tạo thành công ');
            await router.push({name: 'admin-careservice-list'});
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + '';
                }
            }
        }
    }
    const updateCare_service = async (id) => {
        errors.value = ''
        try {
            await axios.put(`http://127.0.0.1:8000/api/v1/care-service/${id}`, care_service.value, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                }
            });
            Swal.fire('Cập nhập thành công ');
            await router.push({name: 'admin-careservice-list'});
            window.location.reload();
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + '';
                }
            }
        }
    }
    const destroyCare_service = async (id) => {
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
                await axios.delete(`http://127.0.0.1:8000/api/v1/care-service/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                    }
                }).then(response => {
                    this.care_services.splice(this.care_services.indexOf(id), 1)
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
        care_services,
        care_service,
        errors,
        getCare_services,
        getCare_service,
        storeCare_service,
        updateCare_service,
        destroyCare_service
    }
}
