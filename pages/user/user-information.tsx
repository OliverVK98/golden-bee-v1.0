import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import React, {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import styled from "styled-components";
import UserInfoInput from "../../components/user-info-input";
import {setUserData} from "../../store/slices/userSlice";
import ButtonLoaderWhite from "../../components/button-loader-white";
import AuthService from "../../utils/auth-api-helpers/auth-service";
import {useForm, FormProvider, FieldError} from "react-hook-form";
import {userInformationResolver} from "../../utils/yup-form-schemas/user-information-schema";

const TopLevelContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  padding-top: 200px;
`

const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-size: 30px;
  gap: 30px;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 20px;

  @media (max-width: 576px) {
    gap: 10px;
  }
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

  @media (max-width: 576px) {
    width: 200px;
    font-size: 15px;
  }
  
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
    firstName: string,
    email: string,
    lastName: string
}


const UserInformation = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [isInputEditable, setIsInputEditable] = useState({
        firstName: false,
        lastName: false,
        email: false
    })
    const isChanged = Object.values(isInputEditable).includes(true)

    const userId = useSelector((state: RootState) => state.userState.userData.userId);
    const isAuth = useSelector((state: RootState) => state.userState.isUserAuthenticated);
    const {firstName, email, lastName} = useSelector((state: RootState) => state.userState.userData);

    const methods = useForm<IFormValues>({resolver: userInformationResolver, defaultValues:  {firstName, lastName, email} });
    const isFormDirty = methods.formState.isDirty

    useEffect(() => {
        if (!userId) {
            router.push('/404');
        }
    }, [isAuth]);

    if (!userId) {
        return null;
    }

    const onClickHandler = async (values: IFormValues) => {
        if(!isFormDirty){
            setIsInputEditable({
                firstName: false,
                lastName: false,
                email: false
            })
            return
        }

        try {
            setIsLoading(true);
            const response = await AuthService.updateUserInformation(values.firstName, values.lastName, values.email);
            dispatch(setUserData(response.data));
            setIsLoading(false);
            setIsInputEditable({
                firstName: false,
                lastName: false,
                email: false
            })

        } catch (e: any) {
            console.log(e);
        }
    }


    return (
        <TopLevelContainer>
            <FormProvider {...methods}>
                <FormContainer onSubmit={methods.handleSubmit((data)=> onClickHandler(data))}>
                    <UserInfoInput setIsInputEditable={setIsInputEditable}  isEditable={isInputEditable}  label="First Name" initVal={firstName} name="firstName"/>
                    {methods.formState.errors["firstName"]?.message && <ErrorContainer>{(methods.formState.errors["firstName"] as FieldError).message }</ErrorContainer>}
                    <UserInfoInput setIsInputEditable={setIsInputEditable} isEditable={isInputEditable}  label="Last Name" initVal={lastName} name="lastName"/>
                    {methods.formState.errors["lastName"]?.message && <ErrorContainer>{(methods.formState.errors["lastName"] as FieldError).message }</ErrorContainer>}
                    <UserInfoInput setIsInputEditable={setIsInputEditable}  isEditable={isInputEditable}  label="Email" initVal={email} name="email"/>
                    {methods.formState.errors["email"]?.message && <ErrorContainer>{(methods.formState.errors["email"] as FieldError).message }</ErrorContainer>}
                    {isChanged && <CustomButton type="submit"  disabled={isLoading} >{
                        isLoading ? <ButtonLoaderWhite/> : "Save changes"
                    }</CustomButton>}
                </FormContainer>
            </FormProvider>
            <ContentContainer>

            </ContentContainer>
        </TopLevelContainer>
    )
}

export default UserInformation