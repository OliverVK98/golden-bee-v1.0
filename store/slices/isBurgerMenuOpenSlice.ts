import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IInitialState {
    isBurgerMenuOpen: boolean | null,
}

const initialState: IInitialState = {
    isBurgerMenuOpen: null,
}

export const isBurgerMenuOpenSlice = createSlice({
    name: "cartState",
    initialState,
    reducers: {
        setIsBurgerMenuOpen: (state, action: PayloadAction<boolean>) => {
            state.isBurgerMenuOpen = action.payload;
        }
    }
})

export const {setIsBurgerMenuOpen} = isBurgerMenuOpenSlice.actions

export default isBurgerMenuOpenSlice.reducer