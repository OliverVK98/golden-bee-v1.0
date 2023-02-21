import {createSlice} from "@reduxjs/toolkit";

export interface IUserData {
    userId: number,
    email: string,
    firstName: string,
    lastName: string
}

export interface IProviderUserData {
    providerId: number,
    email: string,
    name: string
}

interface IInitialState {
    isUserAuthenticated: boolean,
    userData: IUserData,
    providerUserData: IProviderUserData
}

const initialState: IInitialState = {
    isUserAuthenticated: false,
    userData: {} as IUserData,
    providerUserData: {} as IProviderUserData
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
        },
        setProviderUserData: (state, action) => {
            state.providerUserData = action.payload
        }
    }
})

export const {setIsUserAuthenticated, setUserData, setProviderUserData} = userSlice.actions

export default userSlice.reducer