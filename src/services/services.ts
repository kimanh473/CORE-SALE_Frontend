import axios from 'axios';
const token = localStorage.getItem("TOKEN");
// const API_URL = process.env.VUE_APP_API_URL;
const httpClient = axios.create({
  baseURL: 'http://coresale-betest.btpholdings.vn:2000/api/v1',
  headers: { Authorization: `Bearer ${token}` },
});
export default httpClient;