import Image from "next/image";
import React from "react";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";

const BlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  gap: 5px;

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 576px) {
    width: 80px;
  }
`

const FooterDivContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255,222,89);
  width: 100vw;
  height: 100px;
`

const TextSpan = styled.span`
  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 576px) {
    font-size: 10px;
  }
`

const FooterContainer: React.FC = () => {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

    return (
        <FooterDivContainer>
            <BlockContainer>
                <Image src="/icons/bee.png" height={isSmallScreen ? 20 : 30} width={isSmallScreen ? 20 : 30} alt="logo"/>
                <TextSpan>Saving Pollinators Together</TextSpan>
            </BlockContainer>
            <BlockContainer>
                <Image src="/icons/eco.png" height={isSmallScreen ? 20 : 30} width={isSmallScreen ? 20 : 30} alt="logo"/>
                <TextSpan>100% Eco-Friendly Materials</TextSpan>
            </BlockContainer>
            <BlockContainer>
                <Image src="/icons/plane.svg" height={isSmallScreen ? 20 : 30} width={isSmallScreen ? 20 : 30} alt="logo"/>
                <TextSpan>Free Priority Shipping Daily</TextSpan>
            </BlockContainer>
            <BlockContainer>
                <Image src="/icons/lock.png" height={isSmallScreen ? 20 : 30} width={isSmallScreen ? 20 : 30} alt="logo"/>
                <TextSpan>Safe and Secure Checkout</TextSpan>
            </BlockContainer>
        </FooterDivContainer>

    )
}

export default FooterContainer