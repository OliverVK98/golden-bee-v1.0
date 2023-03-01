import Image from "next/image";
import styled from "styled-components";
import React, {ChangeEvent, ForwardedRef, SetStateAction, useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

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
    infoToDisplay: string;
    label: string;
    isEditable: boolean,
    setIsEditable: React.Dispatch<SetStateAction<boolean>>,
    ref: ForwardedRef<HTMLInputElement>
}

const UserInfoInputComponent: React.FC<IUserInfoProps> = React.forwardRef((props, ref) => {
    const {infoToDisplay, setIsEditable, isEditable, label} = props;
    const [userInput, setUserInput] = useState(infoToDisplay);
    const isSmallScreen = useMediaQuery('(max-width: 576px)');

    const onChangeHandler = (e: any) => {
        setUserInput(e.target.value);
    }

    return (
        <InfoContainer>
            <UserInfoContainer>
                <div>
                    {label}:
                </div>
                {
                    !isEditable ? (
                        <div>
                            {userInput}
                        </div>
                    ) : (
                        <CustomInput ref={ref} value={userInput} onChange={onChangeHandler}/>
                    )
                }
            </UserInfoContainer>
            <Image src="/icons/edit.svg" alt="edit-icon" height={isSmallScreen ? 17 : 28} width={isSmallScreen ? 17 : 28}
                   style={{alignSelf: "center", cursor: "pointer"}} onClick={()=>setIsEditable(true)}/>
        </InfoContainer>
    )
})

export default UserInfoInputComponent