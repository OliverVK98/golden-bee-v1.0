import { FunctionComponent, ReactElement, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/legacy/image";
import { useSelector, useDispatch } from "react-redux"
import {IUserData, setIsUserAuthenticated, setProviderUserData, setUserData} from "../store/slices/userSlice";
import { RootState } from "../store/store";
import { setIsSignInModalOpen } from "../store/slices/modalSlice";
import axios from "axios";
import {IAuthResponse} from "../utils/auth-api-helpers/auth-service";
import {setIsCartOpen} from "../store/slices/isCartOpenSlice";
import UserAccountComponent from "./user-account.component";
import BurgerButtonComponent from "./burger-button.component";
import useMediaQuery from "@mui/material/useMediaQuery";

const HeaderContainer = styled.header`
  width: 100vw;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3%;
  box-shadow: 0px 0px 10px 1px gray;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 576px) {
    font-size: 10px;
  }
`

const CustomHeaderRight = styled.header`
  display: flex;
  align-items: center;
  gap: 15px;
`

const CustomHeaderLeft = styled.header`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const LeftLogoText = styled.span`
  margin-right: -10px;
  z-index: 2;
`

const RightLogoText = styled.span`
  margin-left: -10px;
  z-index: 2;
`

const AuthContainer = styled.div`
  cursor: pointer;
`

const CursorPointerWrapper = styled.div`
  cursor: pointer;
`

const HeaderComponent = () => {
  const isCartOpen = useSelector((state: RootState) => state.isCartOpenState.isCartOpen)
  const isUserAuthenticated = useSelector(
    (state: RootState) => state.userState.isUserAuthenticated
  )
  const isSignInModalOpen = useSelector((state: RootState) => state.modalState.isSignInModalOpen);
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  useEffect( ()=> {
      const isLoggedIn = async () => {
          if (localStorage.getItem("accessToken")) {
              try {
                  const response =  await axios.get<IAuthResponse>(`${process.env.VERCEL_URL}/api/auth/refresh`, {withCredentials: true});
                  localStorage.setItem("accessToken", response.data.accessToken);
                  setUserData(response.data.user);
              } catch (e: any) {
                  setIsUserAuthenticated(false);
                setUserData({});
              }
          }
      }
      isLoggedIn();
  }, []);


    //TODO: Update black loader on Github/Google Sign in options
    //TODO: Track if user deleted cookies and is still authed.
    //TODO: Black Shadow in cart, fix ui
    //TODO: add tabs names in the browser
    //TODO: you may also like not showing up

  return (
    <HeaderContainer>
      <CustomHeaderRight>
      {isSmallScreen && <BurgerButtonComponent/>}
        <Link href="/">
          <LogoContainer>
            <LeftLogoText>Golden</LeftLogoText>
            <Image src="/icons/logo.jpg" height={50} width={50} alt="bee logo" />
            <RightLogoText>Bee</RightLogoText>
          </LogoContainer>
        </Link>

        {!isSmallScreen && <Link href='/'>Home</Link>}
        {!isSmallScreen && <Link href='/all'>All Products</Link>}
        <Link href='/'>Help</Link>
      </CustomHeaderRight>
      <CustomHeaderLeft>
        <CursorPointerWrapper>
          <Image src="/icons/cart.svg" height={20} width={20} alt="cart icon" onClick={() => dispatch(setIsCartOpen(!isCartOpen))} />
        </CursorPointerWrapper>
        {!isUserAuthenticated && !isSmallScreen && <AuthContainer onClick={() => dispatch(setIsSignInModalOpen(!isSignInModalOpen))}>Sign In</AuthContainer>}
        {isUserAuthenticated && !isSmallScreen && <UserAccountComponent/>}
      </CustomHeaderLeft>
    </HeaderContainer>
  )
}

export default HeaderComponent;
