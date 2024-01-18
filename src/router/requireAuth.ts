import { useRouter } from 'vue-router'
import { useToast } from "vue-toastification";

const requireAuth = (to: any, next: any) => {
    let isAuthenticated = localStorage.getItem("authenticated");
    if (!isAuthenticated && to.path !== "/login") {
        const router = useRouter()
        useToast().info("Hết phiên đăng nhập, vui lòng đăng nhập lại!!");
        router.push('/login')
        // next({ name: "Login" });
    }
};
export default requireAuth;