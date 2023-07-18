const requireAuth = (to: any, next: any) => {
    let isAuthenticated = localStorage.getItem("authenticated");
    if (!isAuthenticated && to.path !== "/login") {
        next({ name: "Login" });
    }
};
export default requireAuth;