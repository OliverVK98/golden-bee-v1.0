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
    cartItems: ICartItem[]
}

const initialState: IInitialState = {
    cartItems: [] as ICartItem[]
}

export const cartSlice = createSlice({
    name: "cartState",
    initialState,
    reducers: {
        addCartItems: (state, action: PayloadAction<ICartItem>) => {
            const itemExists = state.cartItems.filter((item) => item.productId === action.payload.productId);
            if (itemExists.length > 0) {
                state.cartItems = state.cartItems.reduce((newCart: ICartItem[], item: ICartItem, index) => {
                    if (item.productId!=action.payload.productId) newCart.push(item)
                    else {
                        newCart.push({
                            ...action.payload,
                            quantity: state.cartItems[index].quantity as number + ((action.payload.quantity as number) || 1)
                        })
                    }
                    return newCart
                }, [])
            } else {

                state.cartItems = [
                    ...state.cartItems,
                    {
                        ...action.payload,
                        quantity: action.payload.quantity || 1
                    }
                ]
            }
        },
        addOneCartItemById: (state, action) => {
            state.cartItems = [
                ...state.cartItems.reduce((newCart: ICartItem[], item: ICartItem, index) => {
                    if (item.productId != action.payload) newCart.push(item)
                    else {
                        newCart.push({
                            ...state.cartItems[index],
                            quantity: state.cartItems[index].quantity as number + 1
                        })
                    }
                    return newCart
                }, [])
            ]
        },
        deleteOneCartItemById: (state, action) => {
            state.cartItems = [
                ...state.cartItems.reduce((newCart: ICartItem[], item: ICartItem, index) => {
                    if (item.productId != action.payload) newCart.push(item)
                    else {
                        if (item.quantity != 1) {
                            newCart.push({
                                ...state.cartItems[index],
                                quantity: state.cartItems[index].quantity as number - 1
                            })
                        }
                    }
                    return newCart
                }, [])
            ]
        },
        deleteCartItemById: (state, action) => {
            state.cartItems = [
                ...state.cartItems.reduce((newCart: ICartItem[], item: ICartItem, index) => {
                    if (item.productId != action.payload) newCart.push(item)
                    return newCart
                }, [])
            ]
        },
        resetCart: (state) => {
            state.cartItems = [];
        }
    }
})

export const {addCartItems, addOneCartItemById, deleteOneCartItemById, deleteCartItemById, resetCart} = cartSlice.actions

export default cartSlice.reducer