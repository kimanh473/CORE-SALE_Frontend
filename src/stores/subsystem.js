import { ref } from 'vue';
import { useRouter } from "vue-router";
import axios from "@/ultis/axios";
import Swal from "sweetalert2";

export default function useSubsystem(){
    const subsystems = ref([])
    const subsystem = ref([])
    const router = useRouter()
    const errors = ref('')
    const getSubsystems = async () =>{
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/subsystem`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
        subsystems.value = response.data;
    }
    const getSubsystem = async (id) =>{
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/subsystem/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
        subsystem.value = response.data;
    }
    const storeSubsystem = async (data) => {
        errors.value = '';
        try {
            await axios.post(`http://127.0.0.1:8000/api/v1/subsystem`,data,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                }
            })
            Swal.fire('Tạo thành công ');
            await router.push({ name: 'admin-subsystem-list' });
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors){
                    errors.value += e.response.data.errors[key][0]+'';
                }
            }
        }
    }
    const updateSubsystem = async (id) =>{
        errors.value = ''
        try {
            await axios.put(`http://127.0.0.1:8000/api/v1/subsystem/${id}`,subsystem.value,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                }
            })
            Swal.fire('Cập nhập thành công ');

             await router.push({ name: 'admin-subsystem-list' });
             window.location.reload();
        } catch (e) {
            if (e.response.status === 422){
                Swal.fire('Cập nhập không thành công');
                for (const key in e.response.data.errors){
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }
    const destroySubsystem = async (id) =>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`http://127.0.0.1:8000/api/v1/subsystem/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                    }
                }).then(response => {
                    this.subsystems.splice(this.subsystems.indexOf(id), 1)
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
        subsystems,
        subsystem,
        errors,
        getSubsystems,
        getSubsystem,
        storeSubsystem,
        updateSubsystem,
        destroySubsystem
    }
}
