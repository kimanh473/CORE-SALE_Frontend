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

            router.push({ name: 'admin-subsystem-list' })
            console.log('aaa');
        } catch (e) {
            if (e.response.status === 422){
                for (const key in e.response.data.errors){
                    errors.value += e.response.data.errors[key][0] + '';
                }
            }
        }
    }
    const destroySubsystem = async (id) =>{
        await axios.delete(`http://127.0.0.1:8000/api/v1/subsystem/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        }).then(response=>{
            this.subsystems.splice(this.subsystems.indexOf(id),1)
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
