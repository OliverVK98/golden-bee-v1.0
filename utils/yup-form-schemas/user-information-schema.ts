import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const userInformationSchema = yup.object({
    firstName: yup.string().required("First Name can't be blank"),
    lastName: yup.string().required("Last Name can't be blank"),
    email: yup.string().email("Email must be a valid email").required("Email can't be blank"),
})


export const userInformationResolver = yupResolver(userInformationSchema);