'use client'

import IPart from '@/src/utils/shares/interfaces/IPart'
import { useParams } from 'next/navigation'
import { ComponentContainerListQuestion } from '../listQuestion/listQuestion'
import ComponentLeftSide from './leftSide'
import ComponentSubmit from '../submit'
import { GroupShowDTO } from '@utils/shares/dto/group-show.dto'
import { testSkill } from '@/src/utils/shares/interfaces/IMiniTest'
import { FormEvent } from 'react'
import { AnswerAddDTO } from '@/src/utils/shares/db/answer/dtos/answer-add.dto'
import { fillInTheBlank } from '@/src/utils/shares/db/answer/services/answers/fillInTheBlank.service'

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
    const isShowSideBar =
        params.skill.toLowerCase() === testSkill.READING.toLowerCase() ||
        params.skill.toLowerCase() === testSkill.WRITING.toLowerCase()

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
                {isShowSideBar && (
                    <ComponentLeftSide name={name} skill={params.skill} data={data} />
                )}
                <section className={'w-full min-h-[60vh] h-full flex-col gap-2 flex'}>
                    <section>
                        <h2 className="font-bold text-lg">{name}</h2>
                    </section>

                    <section className="flex flex-col gap-3 w-full">
                        {params.skill.toLowerCase() === 'Writing'.toLowerCase() ? (
                            <ComponentWritingQuestion data={data} />
                        ) : (
                            data.groupQuestions.map((group, index) => {
                                const groupDto = new GroupShowDTO(group, data.id)
                                return (
                                    <ComponentContainerListQuestion
                                        key={'exam-library-part-' + index + '-group-' + index}
                                        data={groupDto}
                                        startIndex={0} //startQuestionIndex[index]
                                    />
                                )
                            })
                        )}
                    </section>

                    <section className="mt-auto text-end">
                        <ComponentSubmit target="" />
                    </section>
                </section>
            </section>
        </>
    )

    function ComponentWritingQuestion({ data }: { data: IPart }) {
        return (
            <section className="flex flex-col gap-5 px-5 w-full">
                <textarea
                    key={index}
                    name={data.id}
                    className="w-full rounded-lg border-violet-500 border-2"
                    rows={16}
                    onInput={(e) => handleInput(e, data.id, data.id, '')}
                ></textarea>
            </section>
        )

        async function handleInput(
            e: FormEvent<HTMLTextAreaElement>,
            examSkillDetailId: string,
            groupId: string,
            id: string,
        ) {
            const value = e.currentTarget.value
            const data = new AnswerAddDTO({
                examSkillDetailId,
                groupQuestionId: groupId,
                questionId: id,
                answer: value,
            })
            await fillInTheBlank.addAnswer(data)
        }
    }
}
