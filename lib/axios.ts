import axios, {AxiosRequestConfig} from "axios";
import {IAuthResponse} from "../utils/auth-api-helpers/auth-service";

export const API_URL="http://localhost:3000"

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    return config
})

$api.interceptors.response.use((config) => config, async (error): Promise<any> => {
    if (error.response.status === 401) {
        const response =  await axios.get<IAuthResponse>("http://localhost:3000/api/auth/refresh", {withCredentials: true});
        localStorage.setItem("accessToken", response.data.accessToken);
        return $api.request(error.config);
    }
})

export default $api