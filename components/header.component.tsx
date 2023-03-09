import Link from "next/link";
import styled from "styled-components";
import Image from "next/legacy/image";
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../store/store";
import { setIsSignInModalOpen } from "../store/slices/modalSlice";
import {setIsCartOpen} from "../store/slices/isCartOpenSlice";
import UserAccountComponent from "./user-account.component";
import BurgerButtonComponent from "./burger-button.component";
import useMediaQuery from "@mui/material/useMediaQuery";
import getTotalCartItemsCount from "../utils/get-total-cart-items-count";
import useSocialAuthCheck from "../hooks/useSocialAuthCheck";
import useAuthCheck from "../hooks/useAuthCheck";

const HeaderContainer = styled.header`
  width: 100vw;
  height: clamp(3vh, 55px, 100px);
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
  position: relative;
`

const TotalItemsContainer = styled.div`
  position: absolute;
  z-index: 3;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  color: rgb(58,167,50);
  font-size: 19px;
`

const HeaderComponent = () => {
  const isCartOpen = useSelector((state: RootState) => state.isCartOpenState.isCartOpen)
  const isUserAuthenticated = useSelector(
    (state: RootState) => state.userState.isUserAuthenticated
  )
  const isSignInModalOpen = useSelector((state: RootState) => state.modalState.isSignInModalOpen);
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const totalCartItems = getTotalCartItemsCount(useSelector((state: RootState)=>state.cartState.cartItems));

  useAuthCheck();
  useSocialAuthCheck();

  //TODO: SSG vs SSR for pages
    // TODO: stripe in production doesn't track past orders
    //TODO: make header sticky

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
        <CursorPointerWrapper onClick={() => dispatch(setIsCartOpen(!isCartOpen))}>
            <TotalItemsContainer>
                {
                    totalCartItems===0 ? "" : totalCartItems
                }
            </TotalItemsContainer>
          <Image src="/icons/cart.svg" height={40} width={40} alt="cart icon"/>
        </CursorPointerWrapper>
        {!isUserAuthenticated && !isSmallScreen && <AuthContainer onClick={() => dispatch(setIsSignInModalOpen(!isSignInModalOpen))}>Sign In</AuthContainer>}
        {isUserAuthenticated && !isSmallScreen && <UserAccountComponent/>}
      </CustomHeaderLeft>
    </HeaderContainer>
  )
}

export default HeaderComponent;
