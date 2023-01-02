import InputComponent from "./input.component";
import styled from "styled-components";
import {useForm, FormProvider} from "react-hook-form";
import {signUpResolver} from "../utils/yup-form-schemas/sign-up-schema";

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
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

interface IFormValues {
    email: string,
    password: string
}

const SignUpFormComponent = () => {
    const methods = useForm<IFormValues>({resolver: signUpResolver});

    return(
        <FormProvider {...methods}>
            <FormContainer onSubmit={methods.handleSubmit((data)=>console.log(data))}>
                <InputComponent imageUrl="/icons/person.svg" type="text" name="firstName" placeholder="Your First Name..."/>
                <InputComponent imageUrl="/icons/person.svg" type="text" name="lastName" placeholder="Your Last Name..."/>
                <InputComponent imageUrl="/icons/email.svg" type="text" name="email" placeholder="Your email..."/>
                <InputComponent imageUrl="/icons/password.svg" type="password" name="password" placeholder="Your password..."/>
                <InputComponent imageUrl="/icons/password.svg" type="password" name="confirmPassword" placeholder="Confirm your password..."/>
                <ButtonsContainer>
                    <CustomShopButton type="submit">Register</CustomShopButton>
                    <CustomShopButton type="submit">Already have an account? Sign In</CustomShopButton>
                </ButtonsContainer>
            </FormContainer>
        </FormProvider>
    )
}

export default SignUpFormComponent

