'use client'

import IPart from '@/src/app/(client)/exam-library/interfaces/IPart'
import { useParams } from 'next/navigation'
import ComponentListQuestion from './listQuestion'

export default function ComponentPart({
    data,
    index,
    startQuestion,
}: {
    data: IPart
    index: number
    startQuestion: number
}) {
    const params = useParams<{ skill: string }>()
    const name = params.skill != 'Writing' ? 'Part' : 'Task'

    const startQuestionIndex = [startQuestion]

    for (let i = 1; i < data.groups.length; i++) {
        const group = data.groups[i - 1]
        startQuestionIndex.push(startQuestionIndex[i - 1] + group.questions.length)
    }

    return (
        <>
            <section
                className={'flex-col gap-2 ' + (index === 0 ? 'flex' : 'hidden')}
                data-according-content={data.id}
            >
                <section>
                    <h2 className="font-bold text-lg">
                        {name} {index + 1}
                    </h2>
                </section>

                <section className="flex flex-col gap-3">
                    {data.groups.map((group, index) => {
                        return (
                            <ComponentListQuestion
                                key={'exam-library-part-' + index + '-group-' + index}
                                data={group}
                                startIndex={startQuestionIndex[index]}
                            />
                        )
                    })}
                </section>
            </section>
        </>
    )
}
