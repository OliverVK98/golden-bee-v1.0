import InputComponent from "./input.component";
import styled from "styled-components";
import {useForm, FormProvider} from "react-hook-form";
import {signInResolver} from "../utils/yup-form-schemas/sign-in-schema";
import {useDispatch} from "react-redux"
import AuthService from "../utils/auth-api-helpers/auth-service";
import {setIsUserAuthenticated, setUserData} from "../store/slices/userSlice";
import {setIsSignInModalOpen, setIsSignUpModalOpen} from "../store/slices/modalSlice";
import GoogleSignInButtonComponent from "./google-sign-in-button.component";
import GithubSignInButtonComponent from "./github-sign-in-button.component";
import {useState} from "react";
import ButtonLoaderWhiteComponent from "./button-loader-white.component";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 20px;
`

const CustomShopButton = styled.button`
  border: 1px solid rgb(58,167,51);
  background-color: rgb(58,167,51);
  color: white;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`

const OrContainer = styled.p`
  text-align: center;
  margin-top: 50px;
  font-size: 18px;
`

interface IFormValues {
    email: string,
    password: string
}

const SignInFormComponent = () => {
    const methods = useForm<IFormValues>({resolver: signInResolver});
    const dispatch = useDispatch();
    const createAccountClickHandler = () => {
        dispatch(setIsSignInModalOpen(false));
        dispatch(setIsSignUpModalOpen(true));
    }
    const [isLoading, setIsLoading] = useState(false);

    const signInHandler = async ({email, password}: IFormValues) => {
        try {
            setIsLoading(true);
            const response  = await AuthService.login(email, password);
            localStorage.setItem("accessToken", response.data.accessToken);
            dispatch(setIsUserAuthenticated(true));
            dispatch(setUserData(response.data.user));
            setIsLoading(false);
            dispatch(setIsSignInModalOpen(false));
        } catch (e: any) {
            console.log(e.response?.data?.message)
        }
    }

    return(
        <FormProvider {...methods}>
            <FormContainer onSubmit={methods.handleSubmit((data)=>signInHandler(data))}>
                <InputComponent imageUrl="/icons/person.svg" type="text" name="email" placeholder="Your email..."/>
                <InputComponent imageUrl="/icons/password.svg" type="password" name="password" placeholder="Your password..."/>
                <ButtonsContainer>
                    <CustomShopButton type="submit">
                        {
                        isLoading ? <ButtonLoaderWhiteComponent/> : "Sign In"
                        }
                    </CustomShopButton>
                    <GoogleSignInButtonComponent/>
                    <GithubSignInButtonComponent/>
                    <OrContainer>Don't have an account?</OrContainer>
                    <CustomShopButton type="button" onClick={createAccountClickHandler}>Create an account</CustomShopButton>
                </ButtonsContainer>
            </FormContainer>
        </FormProvider>
    )
}

export default SignInFormComponent

