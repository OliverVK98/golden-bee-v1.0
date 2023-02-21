import styled from "styled-components";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {useFormContext, FieldError} from "react-hook-form"

interface ICustomProps {
    isError: boolean
}

const CustomInput = styled.input`
  height: 50px;
  border-radius: 10px;
  padding: 5px;
  width: 90%;
  border: ${(props: ICustomProps) => props.isError ? "1px solid red" : "1px solid rgb(222,226,230)"};
  font-size: 20px;
`

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ErrorContainer = styled.div`
  width: 90%;
  align-self: flex-end;
  margin-top: -18px;
  font-size: 14px;
  color: red;
`

interface ICustomInputProps {
    placeholder: string,
    name: string,
    type: string,
    imageUrl: string
}

const InputComponent: React.FC<ICustomInputProps> = ({imageUrl, placeholder, name, type}) => {

    const {register, formState: {errors}} = useFormContext();
    const [isInputError, setIsInputError] = useState(false);

    useEffect(()=>{
        if (errors[name]) {
            setIsInputError(true)
        } else setIsInputError(false);
    }, [errors[name]])

    return(
        <>
            <InputContainer>
                <Image src={imageUrl} alt="sign-in-logo" height={50} width={50}/>
                <CustomInput isError={isInputError} type={type} {...register(name)} name={name} placeholder={placeholder}/>
            </InputContainer>
            {errors[name]?.message && <ErrorContainer>{(errors[name] as FieldError).message }</ErrorContainer>}
        </>
    )
}

export default InputComponent