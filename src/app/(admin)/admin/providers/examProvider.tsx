'use client'

import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext(1)

export default function ExamProvider({ children }: { children: React.ReactNode }) {
    const [stepSelected, setStepSelected] = useState(1)
    const [isUnlimited, setIsUnlimited] = useState(false)

    return (
        <AppContext.Provider value={{ stepSelected, setStepSelected, isUnlimited, setIsUnlimited }}>
            {children}
        </AppContext.Provider>
    )
}
export function useExamContext() {
    return useContext(AppContext)
}
