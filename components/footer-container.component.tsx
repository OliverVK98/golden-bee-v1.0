import Image from "next/image";
import React from "react";
import styled from "styled-components";

const BlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  gap: 5px
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

const FooterContainerComponent: React.FC = () => {
    return (
        <FooterDivContainer>
            <BlockContainer>
                <Image src="/icons/bee.png" height={30} width={30} alt="logo"/>
                <span>Saving Pollinators Together</span>
            </BlockContainer>
            <BlockContainer>
                <Image src="/icons/eco.png" height={30} width={30} alt="logo"/>
                <span>100% Eco-Friendly Materials</span>
            </BlockContainer>
            <BlockContainer>
                <Image src="/icons/plane.svg" height={30} width={30} alt="logo"/>
                <span>Free Priority Shipping Daily</span>
            </BlockContainer>
            <BlockContainer>
                <Image src="/icons/lock.png" height={30} width={30} alt="logo"/>
                <span>Safe and Secure Checkout</span>
            </BlockContainer>
        </FooterDivContainer>

    )
}

export default FooterContainerComponent