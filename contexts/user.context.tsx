import React, { createContext, useState } from 'react';

interface ContextProps {
    isUserAuthenticated: boolean;
    setIsUserAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<ContextProps>({
    isUserAuthenticated: false,
    setIsUserAuthenticated: () => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean>(false);

    const value: ContextProps = {
        isUserAuthenticated,
        setIsUserAuthenticated,
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}