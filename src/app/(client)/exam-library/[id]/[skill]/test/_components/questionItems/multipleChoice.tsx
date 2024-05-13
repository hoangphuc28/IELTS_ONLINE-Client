'use client'

import { MouseEvent } from 'react'
import IAnswer from '@/src/utils/shares/interfaces/IAnswer'
import IQuestion from '@/src/utils/shares/interfaces/IQuestion'

import { AnswerAddDTO } from '@utils/shares/db/answer/dtos/answer-add.dto'
import { multipleChoice } from '@/src/utils/shares/db/answer/services/answers/multipleChoice.service'

export default function ComponentContainerMultiChoice({
    examSkillDetailId,
    data,
}: {
    examSkillDetailId: string
    data: IQuestion
}) {
    return (
        <section className="flex flex-col gap-1">
            <h3 dangerouslySetInnerHTML={{ __html: data.content }}></h3>

            <section className="flex flex-col gap-1">
                {data.answers.map((answer, index) => (
                    <ComponentQuestionMultipleChoiceItem
                        examSkillDetailId={examSkillDetailId}
                        questionId={data.id}
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
    data,
}: {
    examSkillDetailId: string
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
                value={data.content}
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
            examSkillDetailId: examSkillDetailId,
        })
        await multipleChoice.addAnswer(answer)
    }
}
