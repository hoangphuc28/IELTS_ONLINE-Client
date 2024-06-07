'use client'

import { createToastDanger } from '@/src/app/(client)/_components/toast/sysToast'
import { AnswerAddDTO } from '@/src/utils/shares/db/answer/dtos/answer-add.dto'
import { dropDown } from '@/src/utils/shares/db/answer/services/answers/dropdown.service'
import IAnswer from '@/src/utils/shares/interfaces/IAnswer'
import IGroup from '@/src/utils/shares/interfaces/IGroup'
import IQuestion from '@/src/utils/shares/interfaces/IQuestion'
import { ChangeEvent, useRef } from 'react'

export default function ComponentDropdownItem({
    examSkillDetailId,
    data,
    answers,
    groupId,
}: {
    examSkillDetailId: string
    data: IQuestion
    groupId: string
    answers: IAnswer[]
}) {
    return (
        <>
            {!!data.question && ( // grid grid-cols-12
                <section className="flex items-start gap-2 items-center pe-4 overflow-hidden">
                    <h3
                        // className="col-span-10"
                        dangerouslySetInnerHTML={{ __html: data.question || '' }}
                    ></h3>
                    <section
                    // className="col-span-2"
                    >
                        <select
                            name={data.id}
                            className="px-4 py-1 rounded"
                            onChange={async (e) => await handleChoiceAnswer(e)}
                        >
                            <option value={''}>-- Choose your answer --</option>
                            {answers.map((answer, index) => (
                                <option
                                    value={answer.id}
                                    // value={answer.content}
                                    key={'question-' + data.id + '-answer-' + index}
                                >
                                    {answer.content}
                                </option>
                            ))}
                        </select>
                    </section>
                </section>
            )}
        </>
    )

    async function handleChoiceAnswer(e: ChangeEvent<HTMLSelectElement>) {
        const id = e.target.name
        const value = e.target.value
        try {
            const data = new AnswerAddDTO({
                examSkillDetailId,
                groupQuestionId: groupId,
                questionId: id,
                answer: value,
            })
            await dropDown.addAnswer(data)
        } catch (error) {
            e.target.value = ''
            console.log(error)
            createToastDanger()
        }
    }
}
