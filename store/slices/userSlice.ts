import {createSlice} from "@reduxjs/toolkit";

export interface IUserData {
    userId: number,
    email: string,
    firstName: string,
    lastName: string
}

interface IInitialState {
    isUserAuthenticated: boolean,
    userData: IUserData
}

const initialState: IInitialState = {
    isUserAuthenticated: false,
    userData: {} as IUserData
}

export const userSlice = createSlice({
    name: "userState",
    initialState,
    reducers: {
        setIsUserAuthenticated: (state, action) => {
            state.isUserAuthenticated = action.payload
        },
        setUserData: (state, action) => {
            state.userData = action.payload
        }
    }
})

export const {setIsUserAuthenticated, setUserData} = userSlice.actions

export default userSlice.reducer