'use client'

import IAnswer from '@/src/app/(client)/exam-library/interfaces/IAnswer'
import IGroup from '@/src/app/(client)/exam-library/interfaces/IGroup'
import IQuestion from '@/src/app/(client)/exam-library/interfaces/IQuestion'
import { useRef } from 'react'

export default function ComponentDropdownItem({
    data,
    answers,
}: {
    data: IQuestion
    answers: IAnswer[]
}) {
    return (
        <>
            <section className="grid grid-cols-12 items-center gap-2 items-center">
                <h3 className="col-span-10">{data.content}</h3>
                <section className="col-span-2">
                    <select name={data.id} className="px-4 py-1 rounded">
                        {answers.map((answer, index) => (
                            <option
                                value={answer.id}
                                key={'question-' + data.id + '-answer-' + index}
                            >
                                {answer.content}
                            </option>
                        ))}
                    </select>
                </section>
            </section>
        </>
    )
}
