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
            <section className="flex items-center gap-1">
                <p>
                    {itemName} {index + 1}
                </p>
                <p className="flex items-center gap-1">
                    <span>(</span>
                    {questions.map((question, index) => (
                        <button className="border w-8 h-8 rounded-full bg-gray-200">
                            {index + questionIndex}
                        </button>
                    ))}
                    <span>)</span>
                </p>
            </section>
        </>
    )
}
