import axios from 'axios'
import router from '../router/router'
// import { useToast } from 'vue-toastification'
// const API_URL = process.env.VUE_APP_API_URL;
export const API_URL = import.meta.env.VITE_APP_BASE_API
export const UrlImg = import.meta.env.VITE_APP_IMG_URL
const token = localStorage.getItem('TOKEN')
const httpClient = axios.create({
  baseURL: API_URL,
  headers: { Authorization: `Bearer ${token}` },
})

// Interceptor for responses
// let isRefreshToken = false
// httpClient.interceptors.request.use(
//   function (request: any) {
//     // Đính token vào header mới
//     isRefreshToken = true
//     const newHeaders = {
//       ...request.headers,
//       Authorization: `Bearer ${token}`,
//     }

//     // Đính header mới vào lại request trước khi được gửi đi
//     request = {
//       ...request,
//       headers: newHeaders,
//     }
//     return request
//   },

//   function (error) {
//     // Xử lý lỗi
//     isRefreshToken = false
//     return Promise.reject(error)
//   }
// )
const responseInterceptor = (response: any) => {
  if (response.data.messages === 'Token has expired') {
    router.push({ path: '/login' })
    localStorage.removeItem('TOKEN')
    localStorage.removeItem('authenticated')
    window.location.reload()
  }
  return response
}
httpClient.interceptors.response.use(responseInterceptor)

export default httpClient
