'use client'

import IPart from '@/src/utils/shares/interfaces/IPart'
import { useParams } from 'next/navigation'
import ComponentListQuestion from './listQuestion'
import ComponentLeftSide from './leftSide'
import ComponentSubmit from '../submit'
import { GroupShowDTO } from '@utils/shares/dto/group-show.dto'

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
    const name = (params.skill != 'Writing' ? 'Part' : 'Task') + ' ' + (index + 1)

    const startQuestionIndex = [startQuestion]

    for (let i = 1; i < data.groups.length; i++) {
        const group = data.groups[i - 1]
        startQuestionIndex.push(startQuestionIndex[i - 1] + group.questions.length)
    }

    return (
        <>
            <section className="flex gap-2 h-full">
                <ComponentLeftSide name={name} skill={params.skill} data={data} />
                <section
                    className={
                        'w-full min-h-[60vh] h-full flex-col gap-2 ' +
                        (index === 0 ? 'flex' : 'hidden')
                    }
                    data-according-content={data.id}
                >
                    <section>
                        <h2 className="font-bold text-lg">{name}</h2>
                    </section>

                    <section className="flex flex-col gap-3 w-full">
                        {data.groups.map((group, index) => {
                            const groupDto = new GroupShowDTO(group, data.examSkillDetailId)
                            return (
                                <ComponentListQuestion
                                    key={'exam-library-part-' + index + '-group-' + index}
                                    data={groupDto}
                                    startIndex={startQuestionIndex[index]}
                                />
                            )
                        })}
                    </section>

                    <section className="mt-auto text-end">
                        <ComponentSubmit target="" />
                    </section>
                </section>
            </section>
        </>
    )
}
