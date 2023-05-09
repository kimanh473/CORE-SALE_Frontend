import { ref } from 'vue';
import { useRouter } from "vue-router";
import axios from "@/ultis/axios";
export default function useTax(){
    const Taxes = ref([])
    const Tax = ref([])
    const router = useRouter()
    const errors = ref('')
    const getTaxes = async () =>{
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/tax`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
        Taxes.value = response.data;
    }
    const getTax = async (id) =>{
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/tax/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
        Tax.value = response.data;
    }
    const storeTax = async (data) => {
        errors.value = ''
        try {
            await axios.post(`http://127.0.0.1:8000/api/v1/tax`,data,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                }
            })
            await router.push({ name:'admin-tax-list' });
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors){
                    errors.value += e.response.data.errors[key][0]+'';
                }
            }
        }
    }
    const updateTax = async (id) =>{
        errors.value = ''
        try {
            await axios.put(`http://127.0.0.1:8000/api/v1/tax/${id}`,Tax.value,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                }
            })
            await router.push({name:'admin-tax-list'})
        } catch (e) {
            if (e.response.status === 422){
                for (const key in e.response.data.errors){
                    errors.value += e.response.data.errors[key][0] + '';
                }
            }
        }
    }
    const destroyTax = async (id) =>{
        await axios.delete(`http://127.0.0.1:8000/api/v1/tax/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        }).then(response=>{
            this.Taxes.splice(this.Taxes.indexOf(id),1)
        })
    }
    return {
        Taxes,
        Tax,
        errors,
        getTaxes,
        getTax,
        storeTax,
        updateTax,
        destroyTax
    }
}
