import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const personalInfoSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email("Email must be a valid email").required("Email is required for registration"),
});

export const personalInfoResolver = yupResolver(personalInfoSchema);