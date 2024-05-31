'use client'

import { MouseEvent } from 'react'
import IAnswer from '@/src/utils/shares/interfaces/IAnswer'
import IQuestion from '@/src/utils/shares/interfaces/IQuestion'

import { AnswerAddDTO } from '@utils/shares/db/answer/dtos/answer-add.dto'
import { multipleChoice } from '@/src/utils/shares/db/answer/services/answers/multipleChoice.service'
import { IAnswerProps } from '@/src/utils/shares/db/answer/dtos/IAnswerProps.dto'

export default function ComponentContainerMultiChoice({
    examSkillDetailId,
    data,
    groupId,
}: IAnswerProps) {
    return (
        <section className="flex flex-col gap-1">
            <h3 dangerouslySetInnerHTML={{ __html: data.question || '' }}></h3>

            <section className="flex flex-col gap-1">
                {data.answers.map((answer, index) => (
                    <ComponentQuestionMultipleChoiceItem
                        examSkillDetailId={examSkillDetailId}
                        questionId={data.id || ''}
                        groupId={groupId}
                        data={answer}
                        key={'question-' + data.id + '-answer-' + index}
                    />
                ))}
            </section>
        </section>
    )
}

function ComponentQuestionMultipleChoiceItem({
    examSkillDetailId,
    questionId,
    groupId,
    data,
}: {
    examSkillDetailId: string
    groupId: string
    questionId: string
    data: IAnswer
}) {
    return (
        <section className="flex items-center gap-2">
            <input
                onClick={async (e) => await handleChoiceAnswer(e)}
                id={data.id}
                type="radio"
                name={questionId}
                value={data.id}
            />
            <label htmlFor={data.id} dangerouslySetInnerHTML={{ __html: data.content }}></label>
        </section>
    )

    async function handleChoiceAnswer(e: MouseEvent<HTMLInputElement, any>) {
        const input = e.currentTarget as HTMLInputElement | null
        if (!input) {
            console.log('Error: No input element.')
            return
        }
        const questionId = input.name
        const answerContent = input.value
        if (questionId.length === 0 || answerContent.length === 0) {
            console.log('Error: Answer empty.')
            return
        }

        const answer = new AnswerAddDTO({
            id: questionId,
            value: [answerContent],
            groupQuestionId: groupId,
            examSkillDetailId: examSkillDetailId,
        })
        await multipleChoice.addAnswer(answer)
    }
}
