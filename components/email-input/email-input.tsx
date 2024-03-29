import styled from "styled-components";
import React, {useState} from "react";
import {FieldError, useForm} from "react-hook-form";
import {emailResolver} from "../../utils/yup-form-schemas/email-schema";
import EmailService from "../../utils/email-api-helpers/email-service";

const EmailInputStyles = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 10px;
  border: none;
  padding-left: 5px;
  background-color: ${(props: IInputProps) => props.mainColor==="white" ? "rgb(247,247,247)" : "white"};

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 576px) {
    width: 220px;
  }
`

const SubmitButton = styled.button`
  border-radius: 10px;
  border: none;
  background-color: rgb(58,170,53);
  color: white;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 576px) {
    width: 80px;
    font-size: 12px;
  }
`

const TextContainer = styled.h1`
  font-size: 22px;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`

interface IInputProps {
    mainColor: "gray" | "white"
}

const InputContainer = styled.div`
  width: 100vw;
  background-color: ${(props: IInputProps) => props.mainColor==="gray" ? "rgb(247,247,247)" : "white"};
  padding: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid rgb(247,247,247);
  height: 200px;
`

const Form = styled.form`
  display: flex;
  gap: 10px;
`

const ErrorContainer = styled.div`
  justify-self: center;
  margin-top: -18px;
  font-size: 14px;
  color: red;
`

const SuccessContainer = styled.div`
  justify-self: center;
  margin-top: -18px;
  font-size: 14px;
  color: green;
`

interface IEmailProps {
    mainColor: "gray" | "white",
    title: string
}

interface IFormValues {
    email: string
}

const EmailInput: React.FC<IEmailProps> = ({mainColor, title}) => {
    const {register, formState: {errors}, handleSubmit} = useForm<IFormValues>({resolver: emailResolver});
    const [emailExists, setEmailExists] = useState(false);
    const [emailSubscribed, setEmailSubscribed] = useState(false);

    const notifyEmailSubscribed = () => {
        setEmailSubscribed(true);
        setTimeout(()=>{
            setEmailSubscribed(false);
        }, 5000);
    }

    const notifyEmailAlreadySubscribed = () => {
        setEmailExists(true);
        setTimeout(()=>{
            setEmailExists(false);
        }, 5000);
    }

    const submitEmail = async (email: string) => {
        try {
            const response = await EmailService.submitUserEmail(email);
            if (response.status===200) notifyEmailSubscribed();
        } catch (e: any) {
            if (e.response.data.error === "User already subscribed") notifyEmailAlreadySubscribed();
        }
    }

    return (
        <InputContainer mainColor={mainColor}>
          <TextContainer>{title}</TextContainer>
          <Form onSubmit={handleSubmit(async (data) => await submitEmail(data.email))}>
            <EmailInputStyles mainColor={mainColor} placeholder="Your email" {...register("email")}/>
            <SubmitButton>Subscribe</SubmitButton>
          </Form>
            {errors["email"]?.message && <ErrorContainer>{(errors["email"] as FieldError).message }</ErrorContainer>}
            {emailExists && <ErrorContainer>This email is already subscribed</ErrorContainer>}
            {emailSubscribed && <SuccessContainer>Email successfully added to the subscription list</SuccessContainer>}
        </InputContainer>
      )
}

export default EmailInput