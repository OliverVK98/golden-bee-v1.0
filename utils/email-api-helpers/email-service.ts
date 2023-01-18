import axios, {AxiosResponse} from "axios";

export default class EmailService {
    static async submitUserEmail(email: string): Promise<AxiosResponse<any>> {
        return axios.post('http://localhost:3000/api/customers/subscribe', {
            email
        })
    }
}
