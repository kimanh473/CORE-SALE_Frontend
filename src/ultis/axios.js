import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    withCredentials: true,
    headers: {
        Authorization : `Bearer ${localStorage.getItem("jwtToken")}`
    }
});
export default instance;
