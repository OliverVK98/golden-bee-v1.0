import styled from "styled-components";
import React, {SetStateAction} from "react";
import AuthService from "../utils/auth-api-helpers/auth-service";
import {IUserData, setIsUserAuthenticated, setUserData} from "../store/slices/userSlice";
import {useDispatch} from "react-redux";
import Link from "next/link";

const DropDownContainer = styled.div`
  position: absolute;
  height: 250px;
  width: 250px;
  background-color: rgb(247,247,247);
  z-index: 3;
  bottom: -260px;
  right: -15px;
  border-radius: 10px;
  overflow: hidden;
`

const UserInfoContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  padding-left: 5px;
  gap: 10px;
  border-bottom: 0.5px solid black;
`

const UserAccountNameContainer = styled.div`
  border-radius: 50%;
  border: 1px solid black;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  position: relative;
`

const UserNameContainer = styled.div`
  font-size: 18px;
`

const SelectionContainer = styled.div`
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
  padding-left: 5px;
  
  :hover {
    background-color: rgb(247,247,230);
  }
`

interface IUserDropDownProps {
    firstName: string,
    lastName: string,
    setIsDropDownOpen: React.Dispatch<SetStateAction<boolean>>
}

const UserDropdownComponent: React.FC<IUserDropDownProps> = ({firstName, lastName, setIsDropDownOpen}) => {
    const dispatch = useDispatch();

    const handleUserSignOut = async () => {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem("accessToken");
            dispatch(setIsUserAuthenticated(false));
            dispatch(setUserData({} as IUserData));
        } catch (e: any) {
            console.log(e.response?.data?.message)
        }
    }

    const handleClick = () => {
        setIsDropDownOpen(false);
    }

    return (
        <DropDownContainer>
            <UserInfoContainer>
                <UserAccountNameContainer>
                    {firstName[0]}{lastName[0]}
                </UserAccountNameContainer>
                <UserNameContainer>
                    {firstName} {lastName}
                </UserNameContainer>
            </UserInfoContainer>
            <Link href="/user/user-information">
                <SelectionContainer onClick={handleClick}>
                    Update Account Information
                </SelectionContainer>
            </Link>
            <Link href="/user/change-password">
                <SelectionContainer onClick={handleClick}>
                    Change Password
                </SelectionContainer>
            </Link>
            <Link href="/user/past-orders">
                <SelectionContainer onClick={handleClick}>
                    Past Orders
                </SelectionContainer>
            </Link>
            <SelectionContainer onClick={()=>handleUserSignOut()}>
                Sign Out
            </SelectionContainer>

        </DropDownContainer>
    )
}

export default UserDropdownComponent