import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const signUpSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email("Email must be a valid email").required("Email is required for registration"),
    password: yup.string()
        .min(4, "Password must be at least 4 characters long")
        .max(20, "Password shouldn't be longer than 20 characters")
        .required("Please enter a password"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
});

export const signUpResolver = yupResolver(signUpSchema);