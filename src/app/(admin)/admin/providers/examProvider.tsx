'use client'

import React, { createContext, useContext, useState } from 'react'
import { useSelector } from 'react-redux'

const AppContext = createContext(1)

export default function ExamProvider({ children }: { children: React.ReactNode }) {
    const [stepSelected, setStepSelected] = useState(1)
    const [isUnlimited, setIsUnlimited] = useState(false)
    const isLoading = useSelector((state) => state.common.isLoading)
    return (
        <AppContext.Provider value={{ stepSelected, setStepSelected, isUnlimited, setIsUnlimited }}>
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
