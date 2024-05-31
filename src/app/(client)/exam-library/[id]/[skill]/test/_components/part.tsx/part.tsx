'use client'

import IPart from '@/src/utils/shares/interfaces/IPart'
import { useParams } from 'next/navigation'
import { ComponentContainerListQuestion } from '../listQuestion/listQuestion'
import ComponentLeftSide from './leftSide'
import ComponentSubmit from '../submit'
import { GroupShowDTO } from '@utils/shares/dto/group-show.dto'

export default function ComponentPart({
    data,
    index,
}: // startQuestion,
{
    data: IPart
    index: number
    // startQuestion: number
}) {
    const params = useParams<{ skill: string }>()
    // const name = (params.skill != 'Writing' ? 'Part' : 'Task') + ' ' + (index + 1)
    const name = data.partNumber

    // console.log('[PART PARAM DATA] ', data)

    // const startQuestionIndex = [startQuestion]
    // for (let i = 1; i < data.groupQuestions.length; i++) {
    //     const group = data.groupQuestions[i - 1]
    //     startQuestionIndex.push(startQuestionIndex[i - 1] + group.data.length)
    // }

    return (
        <>
            <section
                className={'gap-2 h-full ' + (index === 0 ? 'flex' : 'hidden')}
                data-according-content={data.id}
            >
                <ComponentLeftSide name={name} skill={params.skill} data={data} />
                <section className={'w-full min-h-[60vh] h-full flex-col gap-2 flex'}>
                    <section>
                        <h2 className="font-bold text-lg">{name}</h2>
                    </section>

                    <section className="flex flex-col gap-3 w-full">
                        {data.groupQuestions.map((group, index) => {
                            const groupDto = new GroupShowDTO(group, data.id)
                            return (
                                <ComponentContainerListQuestion
                                    key={'exam-library-part-' + index + '-group-' + index}
                                    data={groupDto}
                                    startIndex={0} //startQuestionIndex[index]
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
