import styled from "styled-components";
import Image from "next/image";
import {createPortal} from "react-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {useEffect} from "react";
import Link from "next/link";
import CartItemComponent from "./cart-item.component";
import roundDecimals from "../utils/round-decimals";
import {useRouter} from "next/router";
import {setIsCartOpen} from "../redux/slices/cartSlice";

interface ICartProps {
    isCartOpen: boolean
}

const CartContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  z-index: 1000;
  width: 400px;
  animation: ${(props: ICartProps) => !props.isCartOpen ? "fadeOut 0.5s ease-out;" : "fadeIn 0.5s ease-out;"}
  animation-fill-mode: forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100%);
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
`

const HeaderTextContainer = styled.div`
  font-weight: bold;
  font-size: 20px;
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
`

const CustomShopButton = styled.button`
  border: 1px solid rgb(58,167,51);
  background-color: rgb(58,167,51);
  color: white;
  width: 250px;
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

const CheckoutButton = styled.button`
  border: 1px solid rgb(58,167,51);
  background-color: rgb(58,167,51);
  color: white;
  width: 360px;
  margin-left: 20px;
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
`

const TotalPriceAmountContainer = styled.div`
  font-weight: bold;
`

const CartComponent = () => {
    const { isCartOpen = false } = useSelector((state: RootState) => state.cartState);
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cartState.cartItems);
    const pathName = useRouter().pathname;

    const handleEscapeKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            dispatch(setIsCartOpen(false));
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleEscapeKeyPress);
        return () => {
            document.removeEventListener("keydown", handleEscapeKeyPress);
        };
    }, []);

    return createPortal(
        <>
            {isCartOpen&&<BlackBackground onClick={() => dispatch(setIsCartOpen(!isCartOpen))}/>}
            <CartContainer isCartOpen={isCartOpen}>
                <HeaderCartContainer>
                    <HeaderLeftSide>
                        <Image src="/icons/cart.svg" alt="cart-logo" height={30} width={30}/>
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
                    <Image src="/images/emptycart.jpg" alt="empty-cart-logo" height={350} width={300}/>
                    <Link href={pathName==="/checkout" ? "/" : pathName}>
                        <CustomShopButton onClick={() => dispatch(setIsCartOpen(!isCartOpen))}>
                            Continue Shopping
                        </CustomShopButton>
                    </Link>

                </EmptyCartContainer>}
                <CartBodyContainer>
                    {
                        cartItems.map((item, index)=>(
                            <CartItemComponent key={index} {...item}/>
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
                <Link href="/checkout">
                    <CheckoutButton onClick={()=>dispatch(setIsCartOpen(!isCartOpen))}>
                        Checkout
                    </CheckoutButton>
                </Link>
            </CartContainer>
        </>, document.getElementById('cart-portal') as HTMLElement
    )
}

export default CartComponent