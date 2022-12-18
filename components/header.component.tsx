import {FunctionComponent, ReactElement} from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

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

const HeaderComponent: FunctionComponent = (): ReactElement => {
    return(
        <HeaderContainer>
            <CustomHeaderRight>
                <Link href="/">
                    <LogoContainer>
                        <LeftLogoText>Bee</LeftLogoText>
                        <Image src="/logo/logo.jpg" height={50} width={50} alt="bee logo"/>
                        <RightLogoText>Kind</RightLogoText>
                    </LogoContainer>
                </Link>

                <Link href='/'>Home</Link>
                <Link href='/'>All Products</Link>
                <Link href='/'>Help</Link>
            </CustomHeaderRight>
            <Image src="/icons/cart.svg" height={20} width={20} alt="cart icon"/>
        </HeaderContainer>
    )
}

export default HeaderComponent;
