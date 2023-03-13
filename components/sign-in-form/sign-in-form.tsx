import Input from "../input/input";
import styled from "styled-components";
import {useForm, FormProvider} from "react-hook-form";
import {signInResolver} from "../../utils/yup-form-schemas/sign-in-schema";
import {useDispatch} from "react-redux"
import AuthService from "../../utils/auth-api-helpers/auth-service";
import {setIsUserAuthenticated, setUserData} from "../../store/slices/userSlice";
import {setIsSignInModalOpen, setIsSignUpModalOpen} from "../../store/slices/modalSlice";
import GoogleSignInButton from "../google-sign-in-button/google-sign-in-button";
import GithubSignInButton from "../github-sign-in-button/github-sign-in-button";
import {useState} from "react";
import ButtonLoaderWhite from "../button-loader-white";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 20px;

  @media (max-width: 576px) {
    gap: 10px;
  }
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

  @media (max-width: 576px) {
    font-size: 16px;
    height: 40px;
  }
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

  @media (max-width: 576px) {
    margin-top: 20px;
  }
`

const ErrorContainer = styled.p`
  color: red;
  margin-top: -5px;
  margin-bottom: -5px;
`

interface IFormValues {
    email: string,
    password: string
}

const SignInForm = () => {
    const methods = useForm<IFormValues>({resolver: signInResolver});
    const dispatch = useDispatch();
    const createAccountClickHandler = () => {
        dispatch(setIsSignInModalOpen(false));
        dispatch(setIsSignUpModalOpen(true));
    }
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>("")

    const signInHandler = async ({email, password}: IFormValues) => {
        try {
            setIsLoading(true);
            setLoginError(false);
            setErrorMessage("");
            const response  = await AuthService.login(email, password);
            if (response.status===200) {
                localStorage.setItem("accessToken", response.data.accessToken);
                dispatch(setIsUserAuthenticated(true));
                dispatch(setUserData(response.data.user));
                dispatch(setIsSignInModalOpen(false));
            }
            if (response.status===400) {
                if (response.data.error === "No user with that email exist") {
                    setLoginError(true);
                    setErrorMessage("No user with that email exist");
                }
                if (response.data.error === "Password is incorrect") {
                    setLoginError(true);
                    setErrorMessage("Password is incorrect");
                }
            }
            setIsLoading(false);
        } catch (e: any) {
            //console.log(e.response?.data?.message)
        }
    }

    return(
        <FormProvider {...methods}>
            <FormContainer onSubmit={methods.handleSubmit((data)=>signInHandler(data))}>
                <Input imageUrl="/icons/person.svg" type="text" name="email" placeholder="Your email..."/>
                <Input imageUrl="/icons/password.svg" type="password" name="password" placeholder="Your password..."/>
                {loginError && <ErrorContainer>
                    {errorMessage}
                </ErrorContainer>}
                <ButtonsContainer>
                    <CustomShopButton type="submit">
                        {
                        isLoading ? <ButtonLoaderWhite/> : "Sign In"
                        }
                    </CustomShopButton>
                    <GoogleSignInButton/>
                    <GithubSignInButton/>
                    <OrContainer>Don't have an account?</OrContainer>
                    <CustomShopButton type="button" onClick={createAccountClickHandler}>Create an account</CustomShopButton>
                </ButtonsContainer>
            </FormContainer>
        </FormProvider>
    )
}

export default SignInForm

