'use client'
import IMiniTest from '@clientExamLibrary/interfaces/IMiniTest'
import ComponentSpeakingItem from './speakingItem'
import { useEffect, useState } from 'react'
import IQuestion from '@clientExamLibrary/interfaces/IQuestion'
import IPart from '@clientExamLibrary/interfaces/IPart'

export enum listStatus {
    newQuestion = 'newQuestion',
    newPart = 'newPart',
    complete = 'complete',
}

export default function ComponentManagerSpeakingItem({ data }: { data: IMiniTest }) {
    const speakingData: Record<string, number> = {
        part: 0,
        group: 0,
        question: 0,
    }
    const [status, setStatus] = useState<string>(listStatus.newQuestion)
    const [locateQuestionData, setLocateQuestionData] =
        useState<Record<string, number>>(speakingData)
    const [part, setPart] = useState<IPart>({ ...data.parts[locateQuestionData.part] })
    const [question, setQuestion] = useState<IQuestion>({
        ...part.groups[locateQuestionData.group].questions[locateQuestionData.question],
    })
    useEffect(() => {
        // console.group('new data:  ', locateQuestionData)
        // console.groupEnd()
        setPart({ ...data.parts[locateQuestionData.part] })
        setQuestion({
            ...data.parts[locateQuestionData.part].groups[locateQuestionData.group].questions[
                locateQuestionData.question
            ],
        })
    }, [locateQuestionData])
    return (
        <>
            <section>
                <ComponentSpeakingItem
                    part={part}
                    index={locateQuestionData}
                    question={question}
                    status={status}
                    nextCallback={() => next(setLocateQuestionData)}
                />
            </section>
        </>
    )

    function next(setterCallback: CallableFunction) {
        const lastPartIndex = data.parts.length - 1
        const lastPart = data.parts[lastPartIndex]
        if (
            locateQuestionData.part >= lastPartIndex &&
            locateQuestionData.question >= lastPart.groups[0].questions.length - 1
        ) {
            return
        }
        setterCallback((prev: Record<string, number>) => {
            const newData = { ...prev }
            newData.question += 1
            if (newData.question >= part.groups[0].questions.length) {
                if (prev.part < data.parts.length - 1) {
                    newData.part += 1
                    newData.question = 0
                }
            }
            if (newData.question < part.groups[0].questions.length - 1) {
                setStatus(listStatus.newQuestion)
            } else if (prev.part < data.parts.length - 1) {
                setStatus(listStatus.newPart)
            } else if (prev.part >= data.parts.length - 1) {
                setStatus(listStatus.complete)
            }
            return newData
        })
    }
}
