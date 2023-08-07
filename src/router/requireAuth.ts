import { useRouter } from 'vue-router'
const requireAuth = (to: any, next: any) => {
    let isAuthenticated = localStorage.getItem("authenticated");
    if (!isAuthenticated && to.path !== "/login") {
        const router = useRouter()
        alert("Hết phiên đăng nhập, vui lòng đăng nhập lại!!");
        router.push('/login')
        // next({ name: "Login" });
    }
};
export default requireAuth;