'use client'
import IPart from '@clientExamLibrary/interfaces/IPart'
import { useEffect, useState } from 'react'
import IQuestion from '@clientExamLibrary/interfaces/IQuestion'
import { listStatus } from './managerSpeakingItem'

export default function ComponentSpeakingItem({
    part,
    question,
    index,
    status,
    nextCallback,
}: {
    part: IPart
    question: IQuestion
    index: Record<string, number>
    status: string
    nextCallback: CallableFunction
}) {
    let btn = (
        <button
            onClick={() => nextCallback()}
            className="w-full bg-rose-500 text-white px-2 py-1 rounded-lg"
        >
            Start Now{' '}
        </button>
    )
    if (status === listStatus.complete) {
        btn = (
            <button
                onClick={() => nextCallback()}
                className="w-full bg-rose-500 text-white px-2 py-1 rounded-lg"
            >
                Submit{' '}
            </button>
        )
    }
    if (status === listStatus.newPart) {
        btn = (
            <button
                onClick={() => nextCallback()}
                className="w-full bg-rose-500 text-white px-2 py-1 rounded-lg"
            >
                Next Part{' '}
            </button>
        )
    }
    return (
        <>
            <section className="relative flex flex-col gap-2 bg-white max-w-[900px] min-h-[300px] py-3 pe-3 mx-auto my-3 rounded shadow-lg">
                <section className="flex border-b pb-3">
                    <p className="w-full text-center font-bold text-xl">
                        Part {index.part + 1} {part.description}
                    </p>
                    <div className="min-w-[100px] absolute top-3 right-3">
                        {btn}
                        {/* <button
                            onClick={() => nextCallback()}
                            className="w-full bg-rose-500 text-white px-2 py-1 rounded-lg"
                        >
                            Start Now{' '}
                        </button>
                        <button
                            onClick={() => nextCallback()}
                            className="w-full bg-rose-500 text-white px-2 py-1 rounded-lg"
                        >
                            Next Part{' '}
                        </button>
                        <button
                            onClick={() => nextCallback()}
                            className="w-full bg-rose-500 text-white px-2 py-1 rounded-lg"
                        >
                            Submit{' '}
                        </button> */}
                    </div>
                </section>
                <section className="flex flex-col gap-3 items-center">
                    <p className="font-bold text-2xl text-violet-800">
                        Question {index.question + 1}
                    </p>
                    <p className="font-bold text-lg">{question.content}</p>
                    <div className="w-[100px] h-[100px] rounded-full shadow-2xl flex items-center justify-center">
                        <i className="fa-solid fa-microphone-lines text-6xl text-violet-700"></i>
                    </div>
                </section>
            </section>
        </>
    )
}
