import styled from "styled-components";
import React, {useEffect} from "react";
import ItemsSuggestionComponent from "../../components/items-suggestion.component";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import UserOrderComponent from "../../components/user-order.component";
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
            <UserOrderComponent cartItems={orderedItems as IOrderData[]}/>
            <ItemsSuggestionComponent/>
        </Container>
    );
}

export default OrderSuccessful