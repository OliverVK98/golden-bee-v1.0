import React, { createContext, useState } from 'react';


interface ContextProps {
    isSignInModalOpen: boolean;
    setIsSignInModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isSignUpModalOpen: boolean;
    setIsSignUpModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalSignInContext = createContext<ContextProps>({
    isSignInModalOpen: false,
    setIsSignInModalOpen: () => {},
    isSignUpModalOpen: false,
    setIsSignUpModalOpen: () => {}
});

export function ModalSignInProvider({ children }: { children: React.ReactNode }) {
    const [isSignInModalOpen, setIsSignInModalOpen] = useState<boolean>(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState<boolean>(false);

    const value: ContextProps = {
        isSignInModalOpen,
        setIsSignInModalOpen,
        isSignUpModalOpen,
        setIsSignUpModalOpen
    }

    return (
        <ModalSignInContext.Provider value={value}>
            {children}
        </ModalSignInContext.Provider>
    );
}