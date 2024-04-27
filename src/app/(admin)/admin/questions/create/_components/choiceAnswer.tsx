'use client'
import Link from 'next/link'
import { useRef } from 'react'
import ComponentAnswer from './answer'

export default function ComponentChoiceAnswer() {
    const refListQuestion = useRef<HTMLElement>(null)
    return (
        <>
            <section className="flex flex-col gap-3 ps-7 pe-3 w-full">
                <div className="flex items-start gap-3 w-full">
                    <div className="flex gap-2 items-start w-full">
                        <label htmlFor="">Group Description</label>
                        <textarea
                            className="text-base rounded-lg px-2 py-1 w-full max-w-[620px]"
                            name=""
                            id=""
                            rows={3}
                        ></textarea>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full">
                    <div className="flex gap-2 items-center w-full">
                        <label htmlFor="test-question">Question</label>
                        <input
                            className="text-base rounded-lg px-2 py-1 w-full"
                            id="test-question"
                            type="text"
                        />
                    </div>

                    <div>
                        <Link
                            href={''}
                            className="text-nowrap px-3 py-2 bg-violet-300 rounded border-0 text-base"
                        >
                            Add Question
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <section>
                        <p>- Answers:</p>
                    </section>
                    <div className="flex items-end gap-3">
                        <section
                            ref={refListQuestion}
                            className="flex flex-col items-center gap-3 w-full"
                        >
                            <section className="flex items-center w-full gap-2">
                                <p className="min-w-[62px]">Correct</p>
                                <p>Answer</p>
                            </section>
                            <ComponentAnswer />
                        </section>
                        <Link
                            className="block w-[30px] h-[30px] flex items-center justify-center text-xl font-bold rounded bg-blue-300"
                            href={''}
                        >
                            +
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
