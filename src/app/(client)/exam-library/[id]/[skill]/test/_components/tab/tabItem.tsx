'use client'
import IQuestion from '@/src/app/(client)/exam-library/interfaces/IQuestion'
import IPart from '@clientExamLibrary/interfaces/IPart'
import { useParams } from 'next/navigation'

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
    const questions = data.groups.reduce((acc: IQuestion[], group) => {
        acc.push(...group.questions)
        return acc
    }, [])
    return (
        <>
            <section
                data-according-id={data.id}
                className="flex items-center gap-1 border rounded-xl px-2 py-1 cursor-pointer bg-slate-100 shadow-lg select-none"
                data-according-target={index === 0 ? 'true' : 'false'}
            >
                <p className="" style={{ textWrap: 'nowrap' }}>
                    {itemName} {index + 1}
                </p>
                <div
                    className={'items-center gap-1 ' + `${index === 0 ? 'flex' : 'hidden'}`}
                    data-according-body={data.id}
                >
                    <span>(</span>
                    {questions.map((question, index) => (
                        <button
                            data-part-id={data.id}
                            data-question-id-target={question.id}
                            className="border w-8 h-8 rounded-full bg-gray-200 hover:opacity-[0.7] hover:shadow-lg"
                            key={'test-footer-list-tab-item-' + index}
                        >
                            {index + questionIndex}
                        </button>
                    ))}
                    <span>)</span>
                </div>
            </section>
        </>
    )
}
