import IGroup from '@/src/app/(client)/exam-library/interfaces/IGroup'

export default function ComponentListQuestionContent({ data }: { data: IGroup }) {
    if (data.type === 'choice') return <ComponentQuestionChoice data={data} />
    if (data.type === 'multiChoice') return <ComponentQuestionMultiChoice data={data} />
    if (data.type === 'dragDrop') return <ComponentQuestionDragDrop data={data} />
    if (data.type === 'shortAnswer') return <ComponentQuestionShortAnswer data={data} />
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
                                        <input type="radio" name={answer.id} />
                                        <span>{answer.content}</span>
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
    return <></>
}
function ComponentQuestionDragDrop({ data }: { data: IGroup }) {
    return <></>
}
function ComponentQuestionShortAnswer({ data }: { data: IGroup }) {
    return <></>
}
