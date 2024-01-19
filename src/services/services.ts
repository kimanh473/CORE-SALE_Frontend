import axios from 'axios'
import router from '../router/router'
import { useToast } from 'vue-toastification'
// const API_URL = process.env.VUE_APP_API_URL;
export const API_URL = import.meta.env.VITE_APP_BASE_API
export const UrlImg = import.meta.env.VITE_APP_IMG_URL
const httpClient = axios.create({
  baseURL: API_URL,
})

// catch error
// const errorInterceptor = (error: any) => {
//   // check if it's a server error
//   if (!error.response) {
//     console.log('Network/Server error');
//     return Promise.reject(error);
//   }
//   // all the other error responses
//   switch (error?.response?.status) {
//     case 400:
//       console.error(error?.response?.status, error?.message);
//       console.log('Nothing to display', 'Data Not Found');
//       break;
//     case 401: // authentication error, logout the user
//       console.log('Please login again', 'Session Expired');
//       localStorage.removeItem('token');
//       useRouter().push('/login');
//       break;
//     default:
//       console.error(error?.response?.status, error?.message);
//       console.log('Server Error');
//   }
//   return Promise.reject(error);
// }
// Interceptor for responses
const token = localStorage.getItem('TOKEN')
let isRefreshToken = false
httpClient.interceptors.request.use(
  function (request: any) {
    // Đính token vào header mới
    isRefreshToken = true
    const newHeaders = {
      ...request.headers,
      Authorization: `Bearer ${token}`,
    }

    // Đính header mới vào lại request trước khi được gửi đi
    request = {
      ...request,
      headers: newHeaders,
    }
    return request
  },

  function (error) {
    // Xử lý lỗi
    isRefreshToken = false
    return Promise.reject(error)
  }
)
const responseInterceptor = (response: any) => {
  // 5. After that, to clear all setup
  if (response?.data?.status == 'failed') {
    isRefreshToken = false
    router.push({ path: '/login' })
    useToast().info('Phiên đăng nhập đã hết hạn,vui lòng đăng nhập!!!')
  }
  return response
}
httpClient.interceptors.response.use(responseInterceptor)

export default httpClient
