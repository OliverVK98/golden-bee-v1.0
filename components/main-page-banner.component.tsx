import {FunctionComponent, ReactElement, useState} from "react";
import styled from "styled-components"
import Image from "next/legacy/image";
import CustomRoundButton from "./round-button.component";

interface IButtonProps {
    isPrimary: boolean
}

const Banner = styled.div`
  transition: all .3s ease;
  background-size: 100vw 30vh;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 5px;
  position: relative;
  object-fit: cover;
`

const CustomShopButton = styled.button`
  border: 1px solid rgb(58,167,51);
  background-color: rgb(58,167,51);
  color: white;
  width: 200px;
  height: 55px;
  border-radius: 5px;
  padding: 16px 24px;
  line-height: 1.5;
  display: inline-block;
  text-align: center;
  font-size: 17px;
  font-weight: 800;
  font-style: normal;
  text-transform: initial;
  letter-spacing: .5px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  position: absolute;
  top: 95%;
`

const AnimationContainer = styled.div`
  text-align:center;
  color: white;
  justify-self: center;
  align-items: center;
  gap: 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5%;
  margin: 0 0.5rem;
  animation: fadeInUp 1100ms ease forwards;
  font-size: 52px;
  z-index: 5;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
`

const MainPageBannerComponent: FunctionComponent = (): ReactElement => {
    const [isPrimary, setIsPrimary] = useState<boolean>(true);

    return (
        <Banner>
            <AnimationContainer key={Math.random()}>
                {isPrimary ? "Holiday Gift Guide" : "Share Your Love"}
                <CustomShopButton>Shop now</CustomShopButton>
            </AnimationContainer>
            {isPrimary && <Image
                src="https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Bee_Kind_Gifts_1476b296-308e-477c-9afe-c1c50cb668e8_1728x.jpg?v=1616179446"
                alt="cover image"
                layout={"fill"}
                objectFit={"cover"}/>}
            {!isPrimary && <Image
                src="https://cdn.shopify.com/s/files/1/0457/5648/1703/files/LSP06126.jpg?v=1614308356"
                alt="cover image"
                layout={"fill"}
                objectFit={"cover"}/>}
            <ButtonContainer>
                <CustomRoundButton isPrimary={isPrimary} mainColor="white" secondaryColor="transparent"
                                   borderColor="white" onClick={() => setIsPrimary(true)}/>
                <CustomRoundButton isPrimary={isPrimary} mainColor="transparent" secondaryColor="white"
                                   borderColor="white" onClick={() => setIsPrimary(false)}/>
            </ButtonContainer>
        </Banner>
    )
}

export default MainPageBannerComponent