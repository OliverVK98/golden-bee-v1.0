import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import styled from "styled-components";
import {FieldError, useForm} from "react-hook-form";
import {changePasswordResolver} from "../../utils/yup-form-schemas/change-password-schema";
import ButtonLoaderWhiteComponent from "../../components/button-loader-white.component";
import AuthService from "../../utils/auth-api-helpers/auth-service";

const TopLevelContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  padding-top: 200px;
`

const FormContainer = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-size: 30px;
  gap: 30px;
`

const LabelAndInputContainer = styled.div`
  display: flex;
  gap: 20px;
`

const CustomInput = styled.input`
  width: 300px;
  border-radius: 10px;
  padding-left: 5px;
`

const CustomButton = styled.button`
  border: 1px solid rgb(58,167,51);
  background-color: rgb(58,167,51);
  color: white;
  width: 300px;
  height: 55px;
  border-radius: 10px;
  padding: 16px 24px;
  line-height: 1.5;
  display: inline-block;
  text-align: center;
  font-size: 17px;
  font-weight: 800;
  font-style: normal;
  text-transform: initial;
  letter-spacing: .5px;
  cursor: pointer;
  align-self: center;
  
  :disabled {
    cursor: not-allowed;
  }
`

const ErrorContainer = styled.div`
  margin-top: -18px;
  font-size: 18px;
  color: red;
  align-self: flex-start;
`

interface IFormValues {
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string
}

const ChangePassword = () => {
    const isAuth = useSelector((state: RootState) => state.userState.isUserAuthenticated);
    const {register, formState: {errors}, handleSubmit} = useForm<IFormValues>({resolver: changePasswordResolver});
    const router = useRouter();
    const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const userId = useSelector((state: RootState) => state.userState.userData.userId);

    useEffect(() => {
        if (!isAuth || !userId) {
            router.push('/404');
        }
    }, [isAuth]);

    if (!isAuth || !userId) {
        return null;
    }

    const onSubmitHandler = async (data: IFormValues) => {
        try {
            setIsPasswordIncorrect(false);
            setIsLoading(true);
            const response = await AuthService.changePassword(data.currentPassword, data.newPassword);
            setIsLoading(false);
            if (response.data?.error === "Incorrect password") {
                setIsPasswordIncorrect(true);
                return;
            }
        } catch (error: any) {
            console.log("error", error);
        }
    }

    return (
        <TopLevelContainer>
            <FormContainer onSubmit={handleSubmit(async (data)=>{await onSubmitHandler(data)})}>
                <LabelAndInputContainer>
                    <div>
                        Current Password
                    </div>
                    <CustomInput type="password" {...register("currentPassword")}/>
                </LabelAndInputContainer>
                {errors["currentPassword"]?.message && <ErrorContainer>{(errors["currentPassword"] as FieldError).message }</ErrorContainer>}
                {isPasswordIncorrect && <ErrorContainer>Password is Incorrect</ErrorContainer>}
                <LabelAndInputContainer>
                    <div>
                        New Password
                    </div>
                    <CustomInput type="password" {...register("newPassword")}/>
                </LabelAndInputContainer>
                {errors["newPassword"]?.message && <ErrorContainer>{(errors["newPassword"] as FieldError).message }</ErrorContainer>}
                <LabelAndInputContainer>
                    <div>
                        Confirm New Password
                    </div>
                    <CustomInput type="password" {...register("confirmNewPassword")}/>
                </LabelAndInputContainer>
                {errors["confirmNewPassword"]?.message && <ErrorContainer>{(errors["confirmNewPassword"] as FieldError).message }</ErrorContainer>}
                <CustomButton>
                    {
                        isLoading ? <ButtonLoaderWhiteComponent/> : "Update Password"
                    }
                </CustomButton>
            </FormContainer>
        </TopLevelContainer>
    )
}

export default ChangePassword