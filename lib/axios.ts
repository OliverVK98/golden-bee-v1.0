import axios from "axios";
import {IAuthResponse} from "../utils/auth-api-helpers/auth-service";
import {WEBSITE_URL} from "../config/const";

const $api = axios.create({
    withCredentials: true,
    baseURL: WEBSITE_URL,
    validateStatus: (status) => status === 400 || status === 200
})

$api.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    return config
})

$api.interceptors.response.use((config) => config, async (error): Promise<any> => {
    if (error.response.status === 401) {
        const response =  await axios.get<IAuthResponse>(`${WEBSITE_URL}/api/auth/refresh`, {withCredentials: true});
        localStorage.setItem("accessToken", response.data.accessToken);
        return $api.request(error.config);
    }
})

export default $api