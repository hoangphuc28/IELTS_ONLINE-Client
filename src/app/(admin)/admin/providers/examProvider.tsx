'use client'

import React, { createContext, useContext, useState } from 'react'
import { useSelector } from 'react-redux'
interface ExamContextType {
    stepSelected: number;
    setStepSelected: React.Dispatch<React.SetStateAction<number>>;
    isLoading: boolean;
    isUnlimited: boolean;
    setIsUnlimited: React.Dispatch<React.SetStateAction<boolean>>;
}
const AppContext = createContext<ExamContextType | null>(null);
export default function ExamProvider({ children }: { children: React.ReactNode }) {
    const [stepSelected, setStepSelected] = useState(1)
    const [isUnlimited, setIsUnlimited] = useState(false)
    const isLoading = useSelector((state: any) => state.common.isLoading)
// const AppContext = createContext({stepSelected, setStepSelected, isUnlimited, isLoading, setIsUnlimited })
    return (
        <AppContext.Provider value={{ stepSelected, setStepSelected, isUnlimited, isLoading, setIsUnlimited }}>
            {isLoading && (
                <div className="loader-layer1">
                    <span className="loader"></span>
                    <div className="loader-layer2"></div>
                </div>
            )}
            {children}
        </AppContext.Provider>
    )
}
export function useExamContext() {
    return useContext(AppContext)
}
