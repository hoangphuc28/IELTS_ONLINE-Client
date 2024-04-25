'use client'

import IGroup from '@/src/app/(client)/exam-library/interfaces/IGroup'
import ComponentListQuestionContent from './listQuestionContent'
import { useParams } from 'next/navigation'

export default function ComponentListQuestion({
    data,
    startIndex,
}: {
    data: IGroup
    startIndex: number
}) {
    const startQuestionIndex = startIndex
    const endQuestionIndex = startIndex + data.questions.length - 1
    const params = useParams<{ skill: string }>()
    return (
        <>
            <section className="flex flex-col gap-3">
                <section>
                    {params.skill !== 'Speaking' && params.skill !== 'Writing' && (
                        <h3 className="text-lg font-bold text-rose-600">
                            Question <span>{startQuestionIndex}</span> -{' '}
                            <span>{endQuestionIndex}</span>
                        </h3>
                    )}
                </section>

                <section>
                    <ComponentListQuestionContent data={data} startQuestionIndex={startIndex} />
                </section>
            </section>
        </>
    )
}
