import Image from "next/image";
import styled from "styled-components";
import React, {ChangeEvent, ForwardedRef, SetStateAction, useState} from "react";

const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
  height: 40px;
`

const UserInfoContainer = styled.div`
  display: flex;
  gap: 10px;
`

const CustomInput = styled.input`
  border-radius: 10px;
  width: 300px;
  padding-left: 5px;
  font-size: 20px;
  height: 40px;
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
            <Image src="/icons/edit.svg" alt="edit-icon" height={28} width={28}
                   style={{alignSelf: "center", cursor: "pointer"}} onClick={()=>setIsEditable(true)}/>
        </InfoContainer>
    )
})

export default UserInfoInputComponent