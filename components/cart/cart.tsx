import styled from "styled-components";
import Image from "next/image";
import {createPortal} from "react-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {useEffect} from "react";
import Link from "next/link";
import CartItem from "../cart-item";
import roundDecimals from "../../utils/round-decimals";
import {useRouter} from "next/router";
import {setIsCartOpen} from "../../store/slices/isCartOpenSlice";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ICartProps {
    isCartOpen: boolean | null
}

const CartContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: -400px;
  background-color: white;
  z-index: 1000;
  width: 400px;
  ${(props: ICartProps) => props.isCartOpen!=null ? !props.isCartOpen ? "animation: fadeOut 0.5s ease-out;" : "animation: fadeIn 0.5s ease-out;" : ""}
  animation-fill-mode: forwards;

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 576px) {
    width: 270px;
  }


  @keyframes fadeIn {
    from {
      opacity: 0;
      right: -400px;
    }
    to {
      opacity: 1;
      right: 0;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      right: 0;
    }
    to {
      opacity: 0;
      right: -400px;
    }
  }
`

const BlackBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.55);
  z-index: 999;
`

const HeaderCartContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  box-shadow: 0px 5px 10px -3px rgb(222,226,230);

  @media (max-width: 576px) {
    padding-right: 5px;
    padding-left: 5px;
  }
`

const HeaderTextContainer = styled.div`
  font-weight: bold;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
`

const HeaderRightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const HeaderLeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px
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
  font-size: 30px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
  }
`

const CustomShopButton = styled.button`
  border: 1px solid rgb(58,167,51);
  background-color: rgb(58,167,51);
  color: white;
  width: 250px;
  height: 55px;
  border-radius: 10px;
  padding: 16px 24px;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 800;
  font-style: normal;
  text-transform: initial;
  letter-spacing: .5px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 250px;
    font-size: 15px;
    height: 40px;
    padding: 12px 24px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
    width: 230px;
    height: 35px;
    padding: 8px 24px;
  }
`

const CheckoutButton = styled.button`
  border: 1px solid rgb(58,167,51);
  background-color: rgb(58,167,51);
  color: white;
  width: 360px;
  margin-left: 20px;
  height: 55px;
  border-radius: 10px;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 800;
  font-style: normal;
  text-transform: initial;
  letter-spacing: .5px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 250px;
    font-size: 15px;
    height: 40px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
    width: 230px;
    height: 35px;
  }
`

const CartBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(241,241,241);

`

const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
    width: 250px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
`

const TotalPriceAmountContainer = styled.div`
  font-weight: bold;
`

const Cart = () => {
    const isCartOpen = useSelector((state: RootState) => state.isCartOpenState.isCartOpen);
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cartState.cartItems);
    const pathName = useRouter().pathname;
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

    const handleEscapeKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape" && isCartOpen!=null) {
            dispatch(setIsCartOpen(false));
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleEscapeKeyPress);
        return () => {
            document.removeEventListener("keydown", handleEscapeKeyPress);
        };
    }, [isCartOpen]);

    return createPortal(
        <>
            {isCartOpen&&<BlackBackground onClick={() => dispatch(setIsCartOpen(!isCartOpen))}/>}
            <CartContainer isCartOpen={isCartOpen}>
                <HeaderCartContainer>
                    <HeaderLeftSide>
                        <Image src="/icons/cart.svg" alt="cart-logo" height={isSmallScreen ? 20 : 30} width={isSmallScreen ? 20 : 30}/>
                        <HeaderTextContainer>
                            My Shopping Cart
                        </HeaderTextContainer>
                    </HeaderLeftSide>
                    <HeaderRightSide>
                        <Image src="/icons/close.svg" alt="cart-logo" height={30} width={30}
                               onClick={()=>dispatch(setIsCartOpen(!isCartOpen))}/>
                    </HeaderRightSide>
                </HeaderCartContainer>
                {cartItems.length===0 && <EmptyCartContainer>
                    <EmptyCartTextContainer>
                        Your cart is empty 😭
                    </EmptyCartTextContainer>
                    <Image src="/images/emptycart.jpg" alt="empty-cart-logo" height={isSmallScreen ? 200 : 350} width={isSmallScreen ? 150 : 300}/>
                    <Link href={pathName==="/checkout" || "user/order-successful" ? "/" : pathName}>
                        <CustomShopButton onClick={() => dispatch(setIsCartOpen(!isCartOpen))}>
                            Continue Shopping
                        </CustomShopButton>
                    </Link>

                </EmptyCartContainer>}
                <CartBodyContainer>
                    {
                        cartItems.map((item, index)=>(
                            <CartItem key={index} {...item}/>
                        ))
                    }
                </CartBodyContainer>
                <TotalPriceContainer>
                    <div>
                        Total:
                    </div>
                    <TotalPriceAmountContainer>
                        ${roundDecimals(cartItems.reduce((totalPrice, item)=>{
                        const actualPrice = (item.discountedPrice ? item.discountedPrice : item.price) * (item.quantity as number)
                        return totalPrice+actualPrice;
                    }, 0))}
                    </TotalPriceAmountContainer>
                </TotalPriceContainer>
                <Link href="/pages/checkout">
                    <CheckoutButton onClick={()=>dispatch(setIsCartOpen(!isCartOpen))}>
                        Checkout
                    </CheckoutButton>
                </Link>
            </CartContainer>
        </>, document.getElementById('cart-portal') as HTMLElement
    )
}

export default Cart