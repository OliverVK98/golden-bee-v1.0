import styled from "styled-components";
import Image from "next/image";
import InputComponent from "./input.component";

const ModalContainer = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  z-index: 1000;
  height: fit-content;
  width: 380px;
  box-shadow: 0px 0px 10px 1px rgb(222,226,230);
`

const TopPartContainer = styled.div`
  display: flex;
  height: 45px;
  border-bottom: 1px solid rgb(222,226,230);
`

const TextContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

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
  align-self: flex-end;
  width: 90%;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const SignInModalComponent = () => {
    return (
        <ModalContainer>
            <TopPartContainer>
                <TextContainer>
                    Sign In
                </TextContainer>
                <ImageContainer>
                    <Image src="/icons/close.svg" alt="close-icon" height={20} width={20}/>
                </ImageContainer>
            </TopPartContainer>
            <FormContainer onSubmit={(e)=>e.preventDefault()}>
                <InputComponent imageUrl="/icons/person.svg" type="email" placeholder="Your email"/>
                <InputComponent imageUrl="/icons/password.svg" type="password" placeholder="Your password"/>
                <ButtonsContainer>
                    <CustomShopButton type="submit">Sign In</CustomShopButton>
                    <CustomShopButton type="submit">Sign In With Google</CustomShopButton>
                    <CustomShopButton type="submit">Sign In With Github</CustomShopButton>
                </ButtonsContainer>
            </FormContainer>
        </ModalContainer>
    )
}

export default SignInModalComponent