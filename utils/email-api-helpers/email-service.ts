import axios, {AxiosResponse} from "axios";
import {WEBSITE_URL} from "../../config/const";

export default class EmailService {
    static async submitUserEmail(email: string): Promise<AxiosResponse<any>> {
        return axios.post(`${WEBSITE_URL}/api/customers/subscribe`, {
            email
        })
    }
}
