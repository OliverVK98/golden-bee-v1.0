import {createSlice} from "@reduxjs/toolkit";

interface IInitialState {
    isSignInModalOpen: boolean,
    isSignUpModalOpen: boolean
}

const initialState: IInitialState = {
    isSignInModalOpen: false,
    isSignUpModalOpen: false
}

export const modalSlice = createSlice({
    name: "modalState",
    initialState,
    reducers: {
        setIsSignInModalOpen: (state, action) => {
            state.isSignInModalOpen = action.payload
        },
        setIsSignUpModalOpen: (state, action) => {
            state.isSignUpModalOpen = action.payload
        }
    }
})

export const {setIsSignUpModalOpen, setIsSignInModalOpen} = modalSlice.actions

export default modalSlice.reducer