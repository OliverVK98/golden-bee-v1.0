import InputComponent from "./input.component";
import styled from "styled-components";
import {useForm, FormProvider} from "react-hook-form";
import {signInResolver} from "../utils/yup-form-schemas/sign-in-schema";
import {useDispatch} from "react-redux"
import AuthService from "../utils/auth-api-helpers/auth-service";
import {setIsUserAuthenticated, setUserData} from "../redux/slices/userSlice";
import {setIsSignInModalOpen, setIsSignUpModalOpen} from "../redux/slices/modalSlice";

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
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const OrContainer = styled.p`
  text-align: center;
  margin-top: 30px;
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

    const signInHandler = async ({email, password}: IFormValues) => {
        try {
            const response  = await AuthService.login(email, password);
            localStorage.setItem("accessToken", response.data.accessToken);
            dispatch(setIsUserAuthenticated(true));
            dispatch(setUserData(response.data.user));
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
                    <CustomShopButton type="submit">Sign In</CustomShopButton>
                    <CustomShopButton type="button">Sign In With Google</CustomShopButton>
                    <CustomShopButton type="button">Sign In With Github</CustomShopButton>
                    <OrContainer>Don't have an account?</OrContainer>
                    <CustomShopButton type="button" onClick={createAccountClickHandler}>Create an account</CustomShopButton>
                </ButtonsContainer>
            </FormContainer>
        </FormProvider>
    )
}

export default SignInFormComponent

