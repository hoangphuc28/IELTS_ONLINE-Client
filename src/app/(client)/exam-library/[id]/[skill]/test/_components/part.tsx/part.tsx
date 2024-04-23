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
    let indexGroup = 1
    for (const group of data.groups) {
        startQuestionIndex.push(startQuestionIndex[indexGroup - 1] + group.questions.length)
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

                <section>
                    {data.groups.map((group, index) => (
                        <ComponentListQuestion
                            key={'exam-library-part-' + index + '-group-' + index}
                            data={group}
                            startIndex={startQuestionIndex[index]}
                        />
                    ))}
                </section>
            </section>
        </>
    )
}
