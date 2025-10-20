import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

const apiUrl = "https://c49b730b-264b-48ef-a3c1-8da09e369256-dev.e1-us-east-azure.choreoapis.dev/djangonotes/backend/v1"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api