"use client";
// ModalContext.tsx
import { createContext, useContext, useState } from "react";

const ModalContext = createContext<any | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode}) => {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content: any) => {
        setModalContent(content);
    }

    const closeModal = () => {
        setModalContent(null);
    }

    return (
        <ModalContext.Provider value={{ modalContent, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext);
