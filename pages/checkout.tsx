import styled from "styled-components";
import CheckoutItemComponent from "../components/checkout-item.component";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import Image from "next/image";
import Link from "next/link";
import roundDecimals from "../utils/round-decimals";
import GuestOrUserComponent from "../components/guest-or-user.component";
import useMediaQuery from "@mui/material/useMediaQuery";

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

const TopTextContainer = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  height: fit-content;
  padding-bottom: 20px;
  margin-bottom: 10px;
`

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const EmptyCartContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`

const EmptyCartTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 40px;
  font-weight: bold;
`

interface ITextProps {
    width: number,
    isCenter: boolean
}

const CustomTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props: ITextProps) => props.isCenter ? "center" : "flex-start" };
  width: ${(props: ITextProps) => props.width}px;
  
  @media (max-width: 600px) {
  font-size: 11px;
  }
`

const CustomShopButton = styled.button`
  border: 1px solid rgb(58,167,51);
  background-color: rgb(58,167,51);
  color: white;
  width: 200px;
  height: 55px;
  border-radius: 10px;
  padding: 16px 24px;
  line-height: 1.5;
  display: inline-block;
  text-align: center;
  font-size: 17px;
  font-weight: 800;
  font-style: normal;
  text-transform: initial;
  letter-spacing: .5px;
  cursor: pointer;
`

const TotalContainer = styled.div`
  display: flex;
  width: 900px;
  align-items: center;
  height: 80px;
  font-size: 30px;
  justify-content: flex-end;

  @media (max-width: 1000px) {
    width: 680px;
  }

  @media (max-width: 800px) {
    width: 600px;
    font-size: 24px;
  }

  @media (max-width: 600px) {
    width: 320px;
    font-size: 18px;
  }
`

const Checkout = () => {
    const cartItems = useSelector((state: RootState) => state.cartState.cartItems);
    const isLaptopScreen = useMediaQuery('(max-width: 1000px)');
    const isSmallScreen = useMediaQuery('(max-width: 800px)');
    const isMobileScreen = useMediaQuery('(max-width: 600px)');

    if (cartItems.length===0) return (
        <EmptyCartContainer>
            <EmptyCartTextContainer>
                Your cart is empty 😭
            </EmptyCartTextContainer>
            <Image src="/images/emptycart.jpg" alt="empty-cart-logo" height={700} width={600}/>
            <Link href="/">
                <CustomShopButton>
                    Continue Shopping
                </CustomShopButton>
            </Link>
        </EmptyCartContainer>
    )

    return (
        <CheckoutContainer>
            <TopTextContainer>
                <CustomTextContainer isCenter={false} width={isMobileScreen ? 70 : isSmallScreen ? 120 : 200}>
                    Product
                </CustomTextContainer>
                <CustomTextContainer isCenter={false} width={isMobileScreen ? 70 : isLaptopScreen ? 120 : 150}>
                    Description
                </CustomTextContainer>
                <CustomTextContainer isCenter={true}  width={isMobileScreen ? 70 : isLaptopScreen ? 120: 150}>
                    Quantity
                </CustomTextContainer>
                <CustomTextContainer isCenter={true}  width={isMobileScreen ? 70 : isLaptopScreen ? 120: 150}>
                    Price
                </CustomTextContainer>
                <CustomTextContainer isCenter={true}  width={isMobileScreen ? 40 : isLaptopScreen ? 120: 150}>
                    Remove
                </CustomTextContainer>
            </TopTextContainer>
            <CartItemsContainer>
                {
                    cartItems.map((item, index) => <CheckoutItemComponent key={index} {...item}/>)
                }
            </CartItemsContainer>
            <TotalContainer>
                TOTAL: ${
                roundDecimals(cartItems.reduce((totalSum, {quantity, price, discountedPrice})=>{
                    return totalSum + (quantity as number) * (discountedPrice ? discountedPrice : price);
                }, 0))
            }
            </TotalContainer>
            <GuestOrUserComponent cartItems={cartItems}/>
        </CheckoutContainer>
    )
}

export default Checkout