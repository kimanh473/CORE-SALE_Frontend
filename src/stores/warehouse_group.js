import { ref } from 'vue';
import { useRouter } from "vue-router";
import axios from "@/ultis/axios";
export default function useWarehouse_group(){
    const warehouse_groups = ref([])
    const warehouse_group = ref([])
    const router = useRouter()
    const errors = ref('')
    const getWarehouse_groups = async (page = 1) =>{
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/warehouse-group?page=${page}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
        warehouse_groups.value = response.data;
    }
    const getWarehouse_group = async (id) =>{
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/warehouse-group/`+id,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
        warehouse_group.value = response.data;
        console.log(response.data)
    }
    const storeWarehouse_group = async (data) => {
        errors.value = ''
        try {
            await axios.post(`http://127.0.0.1:8000/api/v1/warehouse-group/`,data,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                }
            })
            await router.push({ name:'admin-warehouse-group-list' });
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors){
                    errors.value += e.response.data.errors[key][0]+'';
                }
            }
        }
    }
    const updateWarehouse_group = async (id) =>{
        errors.value = ''
        try {
            await axios.put(`http://127.0.0.1:8000/api/v1/warehouse-group/`+id,warehouse_group.value,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                }
            })
            await router.push({name:'admin-warehouse-group-list'})
        } catch (e) {
            if (e.response.status === 422){
                for (const key in e.response.data.errors){
                    errors.value += e.response.data.errors[key][0] + '';
                }
            }
        }
    }
    const destroyWarehouse_group = async (id) =>{
        await axios.delete(`http://127.0.0.1:8000/api/v1/warehouse-group/`+id,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
    }
    return {
        warehouse_groups,
        warehouse_group,
        errors,
        getWarehouse_groups,
        getWarehouse_group,
        storeWarehouse_group,
        updateWarehouse_group,
        destroyWarehouse_group
    }
}
