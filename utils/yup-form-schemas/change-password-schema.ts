import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const changePasswordSchema = yup.object({
    currentPassword: yup.string().required("Please enter a password"),
    newPassword: yup.string()
        .min(4, "New password must be at least 4 characters long")
        .max(20, "New password shouldn't be longer than 20 characters")
        .test("not-equal-to-current", "New password should be different from current password", function (value) {
            return this.parent.currentPassword !== value;
        })
        .required("Please enter a new password"),
    confirmNewPassword: yup.string().oneOf([yup.ref("newPassword")], "New passwords don't match")
});

export const changePasswordResolver = yupResolver(changePasswordSchema);