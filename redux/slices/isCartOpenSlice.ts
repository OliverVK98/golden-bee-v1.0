import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ICartItem {
    itemName: string,
    price: number,
    discountedPrice: number,
    productId: number,
    frontImageUrl: string,
    quantity?: number
}

interface IInitialState {
    isCartOpen: boolean | null,
    cartItems: ICartItem[]
}

const initialState: IInitialState = {
    isCartOpen: null,
    cartItems: [] as ICartItem[]
}

export const isCartOpenSlice = createSlice({
    name: "cartState",
    initialState,
    reducers: {
        setIsCartOpen: (state, action: PayloadAction<boolean>) => {
            state.isCartOpen = action.payload;
        }
    }
})

export const {setIsCartOpen} = isCartOpenSlice.actions

export default isCartOpenSlice.reducer