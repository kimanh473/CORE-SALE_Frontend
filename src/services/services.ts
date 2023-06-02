import axios from 'axios';
const token = localStorage.getItem("TOKEN");
const API_URL = process.env.VUE_APP_API_URL;
const httpClient = axios.create({
  baseURL: API_URL,
  headers: { Authorization: `Bearer ${token}` },
});
export default httpClient;