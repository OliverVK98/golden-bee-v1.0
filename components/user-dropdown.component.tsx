import styled from "styled-components";
import React, {SetStateAction} from "react";
import AuthService from "../utils/auth-api-helpers/auth-service";
import {IUserData, setIsUserAuthenticated, setProviderUserData, setUserData} from "../store/slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import Link from "next/link";
import {RootState} from "../store/store";
import {signOut} from "next-auth/react";
import {useRouter} from "next/router";

interface IDropDownProps {
    providerUserData: any
}

const DropDownContainer = styled.div`
  position: absolute;
  width: 250px;
  background-color: rgb(247,247,247);
  z-index: 3;
  bottom: ${(props:IDropDownProps) => Object.keys(props.providerUserData).length > 0 ? "-160px" : "-260px"};
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
    setIsDropDownOpen: React.Dispatch<SetStateAction<boolean>>
}

const UserDropdownComponent: React.FC<IUserDropDownProps> = ({setIsDropDownOpen}) => {
    const dispatch = useDispatch();
    const providerUserData = useSelector((state: RootState) => state.userState.providerUserData);
    const userData = useSelector((state: RootState) => state.userState.userData);
    const router = useRouter();

    const handleUserSignOut = async () => {
        try {
            if (Object.keys(providerUserData).length > 0) {
                await signOut({redirect: false});
                dispatch(setIsUserAuthenticated(false));
                dispatch(setProviderUserData({}));
                router.push("/")
            } else {
                const response = await AuthService.logout();
                localStorage.removeItem("accessToken");
                dispatch(setIsUserAuthenticated(false));
                dispatch(setUserData({} as IUserData));
                router.push("/")
            }
        } catch (e: any) {
            console.log(e.response?.data?.message)
        }
    }

    const handleClick = () => {
        setIsDropDownOpen(false);
    }

    return (
        <DropDownContainer providerUserData={providerUserData}>
            <UserInfoContainer>
                <UserAccountNameContainer>
                    {
                        Object.keys(providerUserData).length > 0 ? providerUserData.name[0] : `${userData.firstName[0]}${userData.lastName[0]}`
                    }
                </UserAccountNameContainer>
                <UserNameContainer>
                    {
                        Object.keys(providerUserData).length > 0 ? providerUserData.name : `${userData.firstName} ${userData.lastName}`
                    }
                </UserNameContainer>
            </UserInfoContainer>
            {userData.userId && <Link href="/user/user-information">
                <SelectionContainer onClick={handleClick}>
                    Update Account Information
                </SelectionContainer>
            </Link>}
            {userData.userId && <Link href="/user/change-password">
                <SelectionContainer onClick={handleClick}>
                    Change Password
                </SelectionContainer>
            </Link>}
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