import axios from 'axios';
import router from '../router/router';
const token = localStorage.getItem("TOKEN");
// const API_URL = process.env.VUE_APP_API_URL;
const httpClient = axios.create({
  baseURL: 'http://coresale-betest.btpholdings.vn:2000/api/v1',
  headers: { Authorization: `Bearer ${token}` },
});
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
const responseInterceptor = (response: any) => {
  if (response.data.messages == 'Token has expired') {
    router.push({ path: "/login" });
    localStorage.removeItem('TOKEN')
    localStorage.removeItem('authenticated')
    window.location.reload()
  }
  return response;
}
httpClient.interceptors.response.use(responseInterceptor);
export default httpClient;