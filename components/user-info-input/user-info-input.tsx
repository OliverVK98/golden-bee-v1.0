import Image from "next/image";
import styled from "styled-components";
import React, { ForwardedRef, SetStateAction, useState, useEffect} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useFormContext, useController } from "react-hook-form";

const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
  height: 40px;
  align-items: center;

  @media (max-width: 576px) {
    gap: 10px;
    font-size: 18px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
  
  @media (max-width: 576px) {
    font-size: 16px;
  }
  
`

const CustomInput = styled.input`
  border-radius: 10px;
  width: 300px;
  padding-left: 5px;
  font-size: 20px;
  height: 40px;

  @media (max-width: 576px) {
    gap: 10px;
    font-size: 16px;
    width: 220px;
    height: 30px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
    gap: 10px;
    width: 170px;
  }
`

interface IUserInfoProps {
    initVal: string;
    name: string;
    label: string;
    isEditable: any,
    setIsInputEditable: any,
}

const UserInfoInputComponent: React.FC<IUserInfoProps> = React.forwardRef((props, ref) => {
    const {setIsInputEditable, label, isEditable, name} = props;
    const {
        field: {onChange, value},
    } = useController({
        name,
    });

    const isSmallScreen = useMediaQuery('(max-width: 576px)');

    return (
        <InfoContainer>
            <UserInfoContainer>
                <div>
                    {label}:
                </div>
                {
                    !isEditable[name] ? (
                        <div>
                            {value}
                        </div>
                    ) : (
                        <CustomInput  value={value} onChange={onChange} />
                    )
                }
            </UserInfoContainer>
            <Image src="/icons/edit.svg" alt="edit-icon" height={isSmallScreen ? 17 : 28} width={isSmallScreen ? 17 : 28}
                   style={{alignSelf: "center", cursor: "pointer"}} onClick={()=> {
                setIsInputEditable({...isEditable, [name]:  !isEditable[name]})
            }}/>
        </InfoContainer>
    )
})

export default UserInfoInputComponent