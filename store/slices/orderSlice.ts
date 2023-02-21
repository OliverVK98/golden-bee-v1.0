import {createSlice} from "@reduxjs/toolkit";

export interface IOrderData {
    discountedPrice: number,
    frontImageUrl: string,
    itemName: string,
    price: number,
    productId: number,
    quantity: number,
}

interface IInitialState {
    orderData: IOrderData[] | {}
}

const initialState: IInitialState = {
    orderData: {}
}

export const orderSlice = createSlice({
    name: "orderState",
    initialState,
    reducers: {
        setOrderData: (state, action) => {
            state.orderData = action.payload
        }
    }
})

export const {setOrderData} = orderSlice.actions

export default orderSlice.reducer