import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const signInSchema = yup.object({
    email: yup.string().email("Email must be a valid email").required("Email is required for registration"),
    password: yup.string()
        .min(4, "Password must be at least 4 characters long")
        .max(20, "Password shouldn't be longer than 20 characters")
        .required("Please enter a password"),
})


export const signInResolver = yupResolver(signInSchema);