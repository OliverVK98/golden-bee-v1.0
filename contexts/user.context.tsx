import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import {IAuthResponse} from "../utils/auth-api-helpers/auth-service";

export interface IUserData {
    userId: number,
    email: string
}

interface ContextProps {
    isUserAuthenticated: boolean;
    setIsUserAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    userData: IUserData;
    setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
}

export const UserContext = createContext<ContextProps>({
    isUserAuthenticated: false,
    setIsUserAuthenticated: () => {},
    userData: {} as IUserData,
    setUserData: () => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean>(false);
    const [userData, setUserData] = useState<IUserData>({} as IUserData);

    useEffect( ()=> {
        const isLoggedIn = async () => {
            if (localStorage.getItem("accessToken")) {
                setIsUserAuthenticated(true);
                try {
                    const response =  await axios.get<IAuthResponse>("http://localhost:3000/api/auth/refresh", {withCredentials: true});
                    localStorage.setItem("accessToken", response.data.accessToken);
                    setUserData(response.data.user);
                } catch (e: any) {
                    setIsUserAuthenticated(false);
                    console.log(e.response?.data?.message);
                }
            }
        }
        isLoggedIn();
    }, [])

    const value: ContextProps = {
        isUserAuthenticated,
        setIsUserAuthenticated,
        userData,
        setUserData,
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}