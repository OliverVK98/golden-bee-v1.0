import styled from "styled-components";

const EmailInput = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 10px;
  border: none;
  padding-left: 5px;
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  gap: 10px;
`

const EmailInputComponent = () => {
    return(
        <InputContainer>
            <TextContainer>Subscribe for exclusive deals</TextContainer>
            <Form onSubmit={(e)=>e.preventDefault()}>
                <EmailInput placeholder="Your email" type="email"></EmailInput>
                <SubmitButton>Subscribe</SubmitButton>
            </Form>
        </InputContainer>
    )
}

export default EmailInputComponent