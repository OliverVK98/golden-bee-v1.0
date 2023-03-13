import styled from "styled-components";
import React, {useEffect} from "react";
import ItemsSuggestion from "../../components/items-suggestion/items-suggestion";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import UserOrder from "../../components/user-order/user-order";
import {IOrderData} from "../../store/slices/orderSlice";
import {resetCart} from "../../store/slices/cartSlice";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 30px;
`

const OrderSuccessful = () => {
    const router = useRouter();
    const prevPath = sessionStorage.getItem("currentPath");

    if (prevPath!="/checkout") {
        router.push("/")
        return null;
    }

    const orderedItems = useSelector((state: RootState) => state.orderState.orderData);
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(resetCart());
    });

    return (
        <Container>
            <h1>Thanks for purchasing our products!</h1>
            <p>We are processing your order and your order will be shipped soon</p>
            <UserOrder cartItems={orderedItems as IOrderData[]}/>
            <ItemsSuggestion/>
        </Container>
    );
}

export default OrderSuccessful