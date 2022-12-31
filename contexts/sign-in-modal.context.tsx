import React, { createContext, useState } from 'react';

interface ContextProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalSignInContext = createContext<ContextProps>({
    isModalOpen: false,
    setIsModalOpen: () => {}
});

export function ModalSignInProvider({ children }: { children: React.ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const value: ContextProps = {
        isModalOpen,
        setIsModalOpen
    }

    return (
        <ModalSignInContext.Provider value={value}>
            {children}
        </ModalSignInContext.Provider>
    );
}