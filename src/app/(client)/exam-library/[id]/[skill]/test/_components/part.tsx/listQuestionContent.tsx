'use client'

import IAnswer from '@/src/app/(client)/exam-library/interfaces/IAnswer'
import IGroup from '@/src/app/(client)/exam-library/interfaces/IGroup'
import ComponentDropItem from '../dragdrop/dropItem'
import ComponentListDrag from '../dragdrop/listDrag'
import ComponentFloatingInputLabel from '../floatingInputLabel'
import { useParams } from 'next/navigation'

export default function ComponentListQuestionContent({
    data,
    startQuestionIndex,
}: {
    data: IGroup
    startQuestionIndex: number
}) {
    const params = useParams<{ skill: string }>()
    if (params.skill === 'Speaking') return <></>
    if (params.skill === 'Writing') return <ComponentWritingQuestion data={data} />
    if (data.type === 'choice') return <ComponentQuestionChoice data={data} />
    if (data.type === 'multi-choice') return <ComponentQuestionMultiChoice data={data} />
    if (data.type === 'drag-drop') return <ComponentQuestionDragDrop data={data} />
    if (data.type === 'short-answer')
        return <ComponentQuestionShortAnswer data={data} startQuestionIndex={startQuestionIndex} />
}

function ComponentWritingQuestion({ data }: { data: IGroup }) {
    return (
        <section className="flex flex-col gap-5 px-5 w-full">
            {data.questions.map((question) => (
                <textarea
                    name={question.id}
                    className="w-full rounded-lg border-violet-500 border-2"
                    rows={16}
                ></textarea>
            ))}
        </section>
    )
}

function ComponentSpeakingQuestion({ data }: { data: IGroup }) {
    return (
        <section className="flex flex-col gap-5 px-5 w-full">
            {data.questions.map((question) => (
                <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
            ))}
        </section>
    )
}

function ComponentQuestionChoice({ data }: { data: IGroup }) {
    return (
        <>
            <section className="flex flex-col gap-2">
                <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
                <h3 dangerouslySetInnerHTML={{ __html: data.description }}></h3>
                {data.questions.map((question, index) => {
                    const key = 'exam-library-part-list-question-choice-' + index
                    return (
                        <section className="flex flex-col gap-1" key={key}>
                            <h3 dangerouslySetInnerHTML={{ __html: question.content }}></h3>

                            <section className="flex flex-col gap-1">
                                {question.answers.map((answer, answerIndex) => (
                                    <section
                                        className="flex items-center gap-2"
                                        key={key + '-answer-' + answerIndex}
                                    >
                                        <input
                                            id={answer.id}
                                            type="radio"
                                            name={question.id}
                                            value={answer.id}
                                        />
                                        <label
                                            htmlFor={answer.id}
                                            dangerouslySetInnerHTML={{ __html: answer.content }}
                                        ></label>
                                    </section>
                                ))}
                            </section>
                        </section>
                    )
                })}
            </section>
        </>
    )
}
function ComponentQuestionMultiChoice({ data }: { data: IGroup }) {
    return (
        <>
            <section className="flex flex-col gap-2">
                <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
                <h3 dangerouslySetInnerHTML={{ __html: data.description }}></h3>
                {data.questions.map((question, index) => {
                    const key = 'exam-library-part-list-question-choice-' + index
                    return (
                        <section className="flex flex-col gap-1" key={key}>
                            <h3 dangerouslySetInnerHTML={{ __html: question.content }}></h3>

                            <section className="flex flex-col gap-1">
                                {question.answers.map((answer, answerIndex) => (
                                    <section
                                        className="flex items-center gap-2"
                                        key={key + '-answer-' + answerIndex}
                                    >
                                        <input
                                            id={key + answer.id + '-answer-index-' + answerIndex}
                                            type="checkbox"
                                            name={question.id}
                                            value={answer.id}
                                        />
                                        <label
                                            htmlFor={
                                                key + answer.id + '-answer-index-' + answerIndex
                                            }
                                            dangerouslySetInnerHTML={{ __html: answer.content }}
                                        ></label>
                                    </section>
                                ))}
                            </section>
                        </section>
                    )
                })}
            </section>
        </>
    )
}
function ComponentQuestionDragDrop({ data }: { data: IGroup }) {
    const answers: IAnswer[] = []
    data.questions.forEach((question) => {
        question.answers.forEach((answer) => {
            const ans = answers.find((an) => answer.content === an.content)
            if (!ans) {
                answers.push({ ...answer })
            }
        })
    })
    return (
        <>
            <section className="flex flex-col gap-2">
                <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
                <h3 dangerouslySetInnerHTML={{ __html: data.description }}></h3>

                <div className="flex gap-2">
                    <ComponentListDrag groupId={data.id} data={answers} />
                    <div className="flex flex-col gap-2">
                        {data.questions.map((question, index) => {
                            const key = 'exam-library-part-list-question-choice-' + index
                            return <ComponentDropItem groupId={data.id} data={question} key={key} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
function ComponentQuestionShortAnswer({
    data,
    startQuestionIndex,
}: {
    data: IGroup
    startQuestionIndex: number
}) {
    return (
        <>
            <section className="flex flex-col gap-2 short-answer">
                <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
                <h3 dangerouslySetInnerHTML={{ __html: data.description }}></h3>

                <section className="flex gap-1">
                    {data.questions.map((question, index) => (
                        <ComponentFloatingInputLabel
                            id={question.id}
                            key={'question-' + question.id + '-short-answer-' + index}
                            label={(startQuestionIndex + index).toString()}
                        />
                    ))}
                </section>
            </section>
        </>
    )
}
