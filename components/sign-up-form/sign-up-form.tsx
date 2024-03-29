import Input from "../input/input";
import styled from "styled-components";
import {useForm, FormProvider} from "react-hook-form";
import {signUpResolver} from "../../utils/yup-form-schemas/sign-up-schema";
import AuthService from "../../utils/auth-api-helpers/auth-service";
import {useDispatch} from "react-redux"
import {setIsUserAuthenticated, setUserData} from "../../store/slices/userSlice";
import {setIsSignInModalOpen, setIsSignUpModalOpen} from "../../store/slices/modalSlice";
import {useState} from "react";
import ButtonLoaderWhite from "../button-loader-white";


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

  @media (max-width: 576px) {
    font-size: 15px;
    height: 40px;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

interface IFormValues {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

const SignUpForm = () => {
    const methods = useForm<IFormValues>({resolver: signUpResolver});
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const haveAccountClickHandler = () => {
        dispatch(setIsSignInModalOpen(true));
        dispatch(setIsSignUpModalOpen(false));
    }

    const signUpUserHandler = async ({password, lastName, email, firstName}: IFormValues) => {
        try {
            setIsLoading(true);
            const response  = await AuthService.registration(email, password, firstName, lastName);
            localStorage.setItem("accessToken", response.data.accessToken);
            dispatch(setIsUserAuthenticated(true));
            dispatch(setUserData(response.data.user));
            setIsLoading(false);
            dispatch(setIsSignUpModalOpen(false));
        } catch (e: any) {
            console.log(e.response?.data?.message)
        }
    }

    return(
        <FormProvider {...methods}>
            <FormContainer onSubmit={methods.handleSubmit(async (data)=>await signUpUserHandler(data))}>
                <Input imageUrl="/icons/person.svg" type="text" name="firstName" placeholder="Your First Name..."/>
                <Input imageUrl="/icons/person.svg" type="text" name="lastName" placeholder="Your Last Name..."/>
                <Input imageUrl="/icons/email.svg" type="text" name="email" placeholder="Your email..."/>
                <Input imageUrl="/icons/password.svg" type="password" name="password" placeholder="Your password..."/>
                <Input imageUrl="/icons/password.svg" type="password" name="confirmPassword" placeholder="Confirm your password..."/>
                <ButtonsContainer>
                    <CustomShopButton type="submit">
                        {
                            isLoading ? <ButtonLoaderWhite/> : "Register"
                        }
                    </CustomShopButton>
                    <CustomShopButton type="button" onClick={haveAccountClickHandler}>Already have an account? Sign In</CustomShopButton>
                </ButtonsContainer>
            </FormContainer>
        </FormProvider>
    )
}

export default SignUpForm

