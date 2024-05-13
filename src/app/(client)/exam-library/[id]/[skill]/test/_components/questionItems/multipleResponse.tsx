'use client'

import { AnswerAddDTO } from '@/src/utils/shares/db/answer/dtos/answer-add.dto'
import { multipleResponse } from '@/src/utils/shares/db/answer/services/answers/multipleResponse.service'
import IAnswer from '@/src/utils/shares/interfaces/IAnswer'
import IQuestion from '@/src/utils/shares/interfaces/IQuestion'
import { MouseEvent } from 'react'

export default function ComponentContainerMultipleResponse({
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
                    <ComponentMultipleResponseItem
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

function ComponentMultipleResponseItem({
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
                id={'question-' + questionId + '-answer-' + data.id}
                type="checkbox"
                name={questionId}
                value={data.id}
                onClick={async (e) => await handleChoiceAnswer(e)}
            />
            <label
                htmlFor={'question-' + questionId + '-answer-' + data.id}
                dangerouslySetInnerHTML={{ __html: data.content }}
            ></label>
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

        const isRemove: boolean = !input.checked

        if (isRemove) {
            await multipleResponse.removeAnswersItem(answer)
            return
        }
        await multipleResponse.addAnswer(answer)
        return
    }
}
