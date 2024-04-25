import IAnswer from '@/src/app/(client)/exam-library/interfaces/IAnswer'
import IGroup from '@/src/app/(client)/exam-library/interfaces/IGroup'
import ComponentDropItem from '../dragdrop/dropItem'
import ComponentListDrag from '../dragdrop/listDrag'

export default function ComponentListQuestionContent({
    data,
    startQuestionIndex,
}: {
    data: IGroup
    startQuestionIndex: number
}) {
    if (data.type === 'choice') return <ComponentQuestionChoice data={data} />
    if (data.type === 'multi-choice') return <ComponentQuestionMultiChoice data={data} />
    if (data.type === 'drag-drop') return <ComponentQuestionDragDrop data={data} />
    if (data.type === 'short-answer')
        return <ComponentQuestionShortAnswer data={data} startQuestionIndex={startQuestionIndex} />
}

function ComponentQuestionChoice({ data }: { data: IGroup }) {
    return (
        <>
            <section className="flex flex-col gap-2">
                <h3>{data.title}</h3>
                <h3>{data.description}</h3>
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
                                            id={answer.id}
                                            type="radio"
                                            name={question.id}
                                            value={answer.id}
                                        />
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
                <h3>{data.title}</h3>
                <h3>{data.description}</h3>
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
                                            value={answer.id}
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
                <h3>{data.title}</h3>
                <h3>{data.description}</h3>

                <section className="flex gap-1">
                    {data.questions.map((question, index) => (
                        <div
                            className="max-w-[120px] relative"
                            key={'question-' + question.id + '-short-answer-' + index}
                        >
                            <input
                                type="text"
                                name={question.id}
                                id={question.id}
                                className="bg-white block px-2.5 pb-2.5 pt-4 w-full
                                    text-sm text-gray-90
                                    rounded-lg border-1 border-gray-300 appearance-none
                                    focus:outline-none focus:ring-0 focus:border-blue-600
                                    peer"
                                placeholder=""
                            />
                            <label
                                htmlFor={question.id}
                                className="
                                    absolute bg-[transparent] text-gray-500 duration-300 transform -translate-y-4 scale-100
                                    top-2 start-1 z-10 origin-[0] bg-white px-2
                                    peer-focus:px-2 peer-focus:text-blue-600
                                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
                                    peer-placeholder-shown:top-1/2
                                    peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4
                                    rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
                                    "
                            >
                                {startQuestionIndex + index}
                            </label>
                        </div>
                    ))}
                </section>
            </section>
        </>
    )
}
