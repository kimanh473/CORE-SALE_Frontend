import axios from 'axios'
// import { API_URL, TOKEN } from "@/constants/ApiUrl";
// import httpClient from "../AccountServices/account.service";
export const UserLoginApi = async (user: object) => {
  const res = await axios({
    method: 'POST',
    url: `http://coresale-betest.btpholdings.vn:2000/api/v1/login`,
    data: user,
  })
  return res.data
}
