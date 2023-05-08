import { ref } from 'vue';
import { useRouter } from "vue-router";
import axios from "@/ultis/axios";
export default function useCategory(){
    const categories = ref([])
    const category = ref([])
    const router = useRouter()
    const errors = ref('')
    const getCategories = async () =>{
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/category`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
        categories.value = response.data;
    }
    const getCategory = async (id) =>{
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/category/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        })
        category.value = response.data;
        // console.log(response.data)
    }
    const storeCategory = async (data) => {
        errors.value = ''
        try {
            await axios.post(`http://127.0.0.1:8000/api/v1/category`,data,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                }
            })
            await router.push({ name:'admin-category-list' });
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors){
                    errors.value += e.response.data.errors[key][0]+'';
                }
            }
        }
    }
    const updateCategory = async (id) =>{
        errors.value = ''
        try {
            await axios.put(`http://127.0.0.1:8000/api/v1/category/${id}`,category.value,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                }
            })
            await router.push({name:'admin-category-list'})
        } catch (e) {
            if (e.response.status === 422){
                for (const key in e.response.data.errors){
                    errors.value += e.response.data.errors[key][0] + '';
                }
            }
        }
    }
    const destroyCategory = async (id) =>{
        await axios.delete(`http://127.0.0.1:8000/api/v1/subsystem/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
            }
        }).then(res=>{
            console.log(res.data.success)
        })
    }
    return {
        categories,
        category,
        errors,
        getCategories,
        getCategory,
        storeCategory,
        updateCategory,
        destroyCategory
    }
}
