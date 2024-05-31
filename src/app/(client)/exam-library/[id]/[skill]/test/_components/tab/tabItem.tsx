'use client'
import IQuestion from '@/src/utils/shares/interfaces/IQuestion'
import IPart from '@/src/utils/shares/interfaces/IPart'
import { useParams } from 'next/navigation'
import { handleAccording } from '../../../utils/according'
import { handleToQuestion } from '../../../utils/toQuestion'

export default function ComponentTabItem({
    index,
    data,
    questionIndex,
}: {
    index: number
    data: IPart
    questionIndex: number
}) {
    let itemName = 'Part'
    const params = useParams<{ id: string; skill: string }>()
    if (params.skill === 'Writing') itemName = 'Task'
    const questions = data.groupQuestions.reduce((acc: IQuestion[], group) => {
        group.data.forEach((question, index) => {
            if (!!question.question && question.question.length > 0) {
                acc.push(question)
            }
        })
        // acc.push(...group.data)
        return acc
    }, [])
    // console.log('[FOOTER] ', data.partNumber, ' ', data, questions)
    return (
        <>
            <section
                data-according-id={data.id}
                className="flex items-center gap-1 border rounded-xl px-2 py-1 cursor-pointer bg-slate-100 shadow-lg select-none"
                data-according-target={index === 0 ? 'true' : 'false'}
                onClick={(e) => handleAccording(e)}
            >
                <p className="" style={{ textWrap: 'nowrap' }}>
                    {itemName} <span className="">{index + 1}</span>
                </p>
                <div
                    className={
                        'rounded-lg bg-blue-100 px-1 items-center gap-1 ' +
                        `${index === 0 ? 'flex' : 'hidden'}`
                    }
                    data-according-body={data.id}
                >
                    <span className="text-3xl mb-[8px]">[</span>
                    {questions.map((question, index) => (
                        <button
                            onClick={(e) => handleToQuestion(e)}
                            data-part-id={data.id}
                            data-question-id-target={question.id}
                            className="border w-8 h-8 rounded-full bg-gray-200 hover:opacity-[0.7] hover:shadow-lg"
                            key={'test-footer-list-tab-item-' + index}
                        >
                            {index + questionIndex}
                        </button>
                    ))}
                    <span className="text-3xl mb-[8px]">]</span>
                </div>
            </section>
        </>
    )
}
