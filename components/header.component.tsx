import {FunctionComponent, ReactElement, useContext, useEffect} from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/legacy/image";
import {ModalSignInContext} from "../contexts/modal.context";
import {IUserData, UserContext} from "../contexts/user.context";
import {signOut, useSession} from "next-auth/react";
import AuthService, {IAuthResponse} from "../utils/auth-api-helpers/auth-service";
import axios from "axios";

const HeaderContainer = styled.header`
  width: 100vw;
  height: 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3%;
  box-shadow: 0px 0px 10px 1px gray;
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

const HeaderComponent: FunctionComponent = (): ReactElement => {
    const {isSignInModalOpen, setIsSignInModalOpen} = useContext(ModalSignInContext);
    const {isUserAuthenticated, setIsUserAuthenticated, setUserData} = useContext(UserContext);

    const handleUserSignOut = async () => {
        try {
            const response  = await AuthService.logout();
            localStorage.removeItem("accessToken");
            setIsUserAuthenticated(false);
            setUserData({} as IUserData);
        } catch (e: any) {
            console.log(e.response?.data?.message)
        }
    }

    return(
        <HeaderContainer>
            <CustomHeaderRight>
                <Link href="/">
                    <LogoContainer>
                        <LeftLogoText>Bee</LeftLogoText>
                        <Image src="/icons/logo.jpg" height={50} width={50} alt="bee logo"/>
                        <RightLogoText>Kind</RightLogoText>
                    </LogoContainer>
                </Link>

                <Link href='/'>Home</Link>
                <Link href='/all'>All Products</Link>
                <Link href='/'  onClick={async () => console.log(await AuthService.getCart())}>Help</Link>
            </CustomHeaderRight>
            <CustomHeaderLeft>
                <Image src="/icons/cart.svg" height={20} width={20} alt="cart icon"/>
                {!isUserAuthenticated && <AuthContainer onClick={() => setIsSignInModalOpen(!isSignInModalOpen)}>Sign In</AuthContainer>}
                {isUserAuthenticated && <AuthContainer onClick={handleUserSignOut}>Sign Out</AuthContainer>}
            </CustomHeaderLeft>
        </HeaderContainer>
    )
}

export default HeaderComponent;
