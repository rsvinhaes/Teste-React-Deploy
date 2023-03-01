import axios from 'axios'
import { getItem } from '../utils/storage'

const api = axios.create({
    baseURL: 'https://rsvinhaes-desafio-md5.herokuapp.com/',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
})

api.interceptors.request.use(async function (config) {
    const token = getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api
