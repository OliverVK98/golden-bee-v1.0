import styled from "styled-components";
import React from "react";

const EmailInput = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 10px;
  border: none;
  padding-left: 5px;
  background-color: ${(props: IInputProps) => props.mainColor==="white" ? "rgb(247,247,247)" : "white"};;
`

const SubmitButton = styled.button`
  border-radius: 10px;
  border: none;
  background-color: rgb(58,170,53);
  color: white;
  font-weight: bold;
  cursor: pointer;
`

const TextContainer = styled.h1`
  font-size: 22px;
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

interface IEmailProps {
    mainColor: "gray" | "white",
    title: string
}

const EmailInputComponent: React.FC<IEmailProps> = ({mainColor, title}) => {

  return (
    <InputContainer mainColor={mainColor}>
      <TextContainer>{title}</TextContainer>
      <Form onSubmit={(e) => e.preventDefault()}>
        <EmailInput mainColor={mainColor} placeholder="Your email" type="email"></EmailInput>
        <SubmitButton>Subscribe</SubmitButton>
      </Form>
    </InputContainer>
  )
}

export default EmailInputComponent