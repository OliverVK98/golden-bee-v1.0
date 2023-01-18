import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const emailSchema = yup.object({
    email: yup.string().email("Email must be a valid email").required("Email is required to subscribe")
})


export const emailResolver = yupResolver(emailSchema);