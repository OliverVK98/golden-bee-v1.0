import axios, {AxiosResponse} from "axios";

export default class EmailService {
    static async submitUserEmail(email: string): Promise<AxiosResponse<any>> {
        return axios.post(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/customers/subscribe`, {
            email
        })
    }
}
