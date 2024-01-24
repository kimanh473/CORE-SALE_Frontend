import axios from 'axios'
import { API_URL } from '../services'
// import httpClient from "../AccountServices/account.service";
export const UserLoginApi = async (user: object) => {
  const res = await axios({
    method: 'POST',
    url: `${API_URL}/login`,
    data: user,
  })
  return res.data
}
const TOKEN = (token: string) => {
  return { Authorization: `Bearer ${token}` }
}
export const UserLogoutApi = async (token: string) => {
  const res = await axios({
    method: 'POST',
    url: `${API_URL}/logout`,
    headers: TOKEN(token),
  })
  return res.data
}
