'use client'

import React, { createContext, useContext, useMemo, useState } from 'react'

export enum ListSkillType {
    listening = 'Listening',
    reading = 'Reading',
    writing = 'Writing',
    speaking = 'Speaking',
}

export interface IQuestionContext {
    step: {
        stepSelected: number
        setStepSelected: React.Dispatch<React.SetStateAction<number>>
    }
    skillType: {
        type: string
        setType: React.Dispatch<React.SetStateAction<string>>
    }
}

const DEFAULT_CONTEXT: IQuestionContext = {
    step: {
        stepSelected: 1,
        setStepSelected: () => {},
    },
    skillType: {
        type: ListSkillType.listening,
        setType: () => {},
    },
}

const AppContext = createContext(DEFAULT_CONTEXT)

export default function QuestionProvider({ children }: { children: React.ReactNode }) {
    const [stepSelected, setStepSelected] = useState(DEFAULT_CONTEXT.step.stepSelected)
    const [skillType, setSkillType] = useState(DEFAULT_CONTEXT.skillType.type)

    const values: IQuestionContext = useMemo(
        () => ({
            step: {
                stepSelected,
                setStepSelected,
            },
            skillType: {
                type: skillType,
                setType: setSkillType,
            },
        }),
        [stepSelected, setStepSelected],
    )

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}
export function useQuestionContext() {
    return useContext(AppContext)
}
