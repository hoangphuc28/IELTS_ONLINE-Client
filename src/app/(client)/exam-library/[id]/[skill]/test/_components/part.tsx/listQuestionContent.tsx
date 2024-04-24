import IGroup from '@/src/app/(client)/exam-library/interfaces/IGroup'

export default function ComponentListQuestionContent({ data }: { data: IGroup }) {
    if (data.type === 'choice') return <ComponentQuestionChoice data={data} />
    if (data.type === 'multi-choice') return <ComponentQuestionMultiChoice data={data} />
    if (data.type === 'drag-drop') return <ComponentQuestionDragDrop data={data} />
    if (data.type === 'short-answer') {
        console.log('hehe')
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
    return (
        <>
            <section className="flex flex-col gap-2">
                {data.questions.map((question, index) => {
                    const key = 'exam-library-part-list-question-choice-' + index
                    return (
                        <section className="flex flex-col gap-1" key={key}>
                            <h3>{question.content}</h3>

                            <section className="flex gap-2">
                                <section className="border border-dashed border-black px-2 rounded">
                                    <span className="text-transparent">ABC</span>
                                </section>
                                <section className="flex flex-col gap-1">
                                    {question.answers.map((answer, answerIndex) => (
                                        <section
                                            className="flex items-center gap-2"
                                            key={key + '-answer-' + answerIndex}
                                        >
                                            <section className="border border-dashed border-black">
                                                <span className="text-transparent">ABC</span>
                                            </section>
                                            <span>{answer.content}</span>
                                        </section>
                                    ))}
                                </section>
                            </section>
                        </section>
                    )
                })}
            </section>
        </>
    )
}
function ComponentQuestionShortAnswer({ data }: { data: IGroup }) {
    console.log('Haha')
    return (
        <>
            <section className="flex flex-col gap-2 short-answer">
                <h2>Hehe</h2>
            </section>
        </>
    )
}
