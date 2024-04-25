import IAnswer from '@/src/app/(client)/exam-library/interfaces/IAnswer'
import IGroup from '@/src/app/(client)/exam-library/interfaces/IGroup'
import { DragEvent } from 'react'
import ComponentDragItem from '../dragdrop/dragItem'
import ComponentDropItem from '../dragdrop/dropItem'
import ComponentListDrag from '../dragdrop/listDrag'

export default function ComponentListQuestionContent({ data }: { data: IGroup }) {
    if (data.type === 'choice') return <ComponentQuestionChoice data={data} />
    if (data.type === 'multi-choice') return <ComponentQuestionMultiChoice data={data} />
    if (data.type === 'drag-drop') return <ComponentQuestionDragDrop data={data} />
    if (data.type === 'short-answer') {
        return <ComponentQuestionShortAnswer data={data} />
    }
}

function ComponentQuestionChoice({ data }: { data: IGroup }) {
    return (
        <>
            <section className="flex flex-col gap-2">
                {data.questions.map((question, index) => {
                    const key = 'exam-library-part-list-question-choice-' + index
                    return (
                        <section className="flex flex-col gap-1" key={key}>
                            <h3>{question.content}</h3>

                            <section className="flex flex-col gap-1">
                                {question.answers.map((answer, answerIndex) => (
                                    <section
                                        className="flex items-center gap-2"
                                        key={key + '-answer-' + answerIndex}
                                    >
                                        <input id={answer.id} type="radio" name={question.id} />
                                        <label htmlFor={answer.id}>{answer.content}</label>
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
                {data.questions.map((question, index) => {
                    const key = 'exam-library-part-list-question-choice-' + index
                    return (
                        <section className="flex flex-col gap-1" key={key}>
                            <h3>{question.content}</h3>

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
                                        />
                                        <label
                                            htmlFor={
                                                key + answer.id + '-answer-index-' + answerIndex
                                            }
                                        >
                                            {answer.content}
                                        </label>
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
                <h3>{data.title}</h3>
                <h3>{data.description}</h3>

                <div className="flex gap-2">
                    <ComponentListDrag data={answers} />
                    <div className="flex flex-col gap-2">
                        {data.questions.map((question, index) => {
                            const key = 'exam-library-part-list-question-choice-' + index
                            return <ComponentDropItem data={question} key={key} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
function ComponentQuestionShortAnswer({ data }: { data: IGroup }) {
    return (
        <>
            <section className="flex flex-col gap-2 short-answer">
                <h2>Hehe</h2>
            </section>
        </>
    )
}
