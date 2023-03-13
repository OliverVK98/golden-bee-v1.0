import styled from "styled-components";
import {createPortal} from "react-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import Link from "next/link";
import {setIsSignInModalOpen} from "../../store/slices/modalSlice";
import {signOut} from "next-auth/react";
import {IUserData, setIsUserAuthenticated, setProviderUserData, setUserData} from "../../store/slices/userSlice";
import AuthService from "../../utils/auth-api-helpers/auth-service";
import {useRouter} from "next/router";
import {setIsBurgerMenuOpen} from "../../store/slices/isBurgerMenuOpenSlice";
import React from "react";
import Image from "next/image";

interface  IBurgerProps {
    isBurgerMenuOpen: null | boolean
}

const BurgerMenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: -300px;
  z-index: 1000;
  width: 300px;
  background-color: rgb(247,247,247);
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-top: 10px;

  ${(props: IBurgerProps) => props.isBurgerMenuOpen!=null ? !props.isBurgerMenuOpen ? "animation: fadeOutMenu 0.5s ease-out;" : "animation: fadeInMenu 0.5s ease-out;" : ""}
  animation-fill-mode: forwards;
  
  @media (max-width: 576px) {
    width: 270px;
    font-size: 18px;
    gap: 50px;
  }
  
  @keyframes fadeInMenu {
    from {
      opacity: 0;
      left: -300px;
    }
    to {
      opacity: 1;
      left: 0;
    }
  }

  @keyframes fadeOutMenu {
    from {
      opacity: 1;
      left: 0;
    }
    to {
      opacity: 0;
      left: -300px;
    }
  }
`

const TextContainer = styled.div`
  padding-left: 30px;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 576px) {
    padding-left: 10px;
  }
`

const GenericButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`

const UserSpecificButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`

const BlackBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.55);
  z-index: 999;
`

const CloseButtonWrapper = styled.div`
  align-self: flex-end;
`

const BurgerMenu = () => {
    const isBurgerMenuOpen = useSelector((state: RootState) => state.isBurgerMenuOpenState.isBurgerMenuOpen);
    const isUserAuthenticated = useSelector((state: RootState) => state.userState.isUserAuthenticated);
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

    return createPortal((
        <>
            {isBurgerMenuOpen && <BlackBackground onClick={()=>dispatch(setIsBurgerMenuOpen(false))}/>}
            <BurgerMenuContainer isBurgerMenuOpen={isBurgerMenuOpen}>
                <GenericButtonsContainer>
                    <CloseButtonWrapper>
                        <Image src="/icons/close.svg" alt="close-logo" height={30} width={30}
                               onClick={()=>dispatch(setIsBurgerMenuOpen(false))}/>
                    </CloseButtonWrapper>
                    <Link href="/pages">
                        <TextContainer onClick={()=>dispatch(setIsBurgerMenuOpen(false))}>
                            Home
                        </TextContainer>
                    </Link>
                    <Link href="/pages/all">
                        <TextContainer onClick={()=>dispatch(setIsBurgerMenuOpen(false))}>
                            All Products
                        </TextContainer>
                    </Link>
                    {!isUserAuthenticated && <TextContainer onClick={() => {
                        dispatch(setIsBurgerMenuOpen(false));
                        dispatch(setIsSignInModalOpen(true));
                    }}>
                        Sign In
                    </TextContainer>}

                </GenericButtonsContainer>
                <UserSpecificButtonsContainer>
                    {userData.userId && isUserAuthenticated && <Link href="/user/user-information">
                        <TextContainer onClick={()=>dispatch(setIsBurgerMenuOpen(false))}>
                            Update Account Information
                        </TextContainer>
                    </Link>}
                    {userData.userId && isUserAuthenticated && <Link href="/user/change-password">
                        <TextContainer onClick={() => dispatch(setIsBurgerMenuOpen(false))}>
                            Change Password
                        </TextContainer>
                    </Link>}
                    {isUserAuthenticated && <Link href="/user/past-orders">
                        <TextContainer onClick={() => dispatch(setIsBurgerMenuOpen(false))}>
                            Past Orders
                        </TextContainer>
                    </Link>}
                    {isUserAuthenticated && <TextContainer onClick={() => {
                        dispatch(setIsBurgerMenuOpen(false));
                        handleUserSignOut();
                    }}>
                        Sign Out
                    </TextContainer>}
                </UserSpecificButtonsContainer>
            </BurgerMenuContainer>
        </>
    ), document.getElementById('burger-menu') as HTMLElement)
}

export default BurgerMenu