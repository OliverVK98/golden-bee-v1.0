import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IInitialState {
    isCartOpen: boolean | null,
}

const initialState: IInitialState = {
    isCartOpen: null,
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