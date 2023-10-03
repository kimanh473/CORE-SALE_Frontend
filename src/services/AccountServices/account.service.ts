import axios from 'axios'
import { API_URL } from "../services";
// import httpClient from "../AccountServices/account.service";
export const UserLoginApi = async (user: object) => {
  const res = await axios({
    method: 'POST',
    url: `${API_URL}/login`,
    data: user,
  })
  return res.data
}
