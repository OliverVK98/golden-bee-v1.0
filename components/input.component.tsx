import styled from "styled-components";
import React from "react";
import Image from "next/image";

const CustomInput = styled.input`
  height: 30px;
  border-radius: 10px;
  padding: 5px;
  width: 90%;
  border: 1px solid rgb(222,226,230)
`

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

interface ICustomInputProps {
    type: string,
    imageUrl: string,
    placeholder: string
}

const InputComponent: React.FC<ICustomInputProps> = ({imageUrl, type , placeholder}) => {
    return(
        <InputContainer>
            <Image src={imageUrl} alt="sign-in-logo" height={30} width={30}/>
            <CustomInput type={type} placeholder={placeholder}/>
        </InputContainer>
    )
}

export default InputComponent