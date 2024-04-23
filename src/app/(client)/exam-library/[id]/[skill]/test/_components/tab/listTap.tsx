'use client'
import IMiniTest from '@/src/app/(client)/exam-library/interfaces/IMiniTest'
import ComponentTabItem from './tabItem'
import IPart from '@/src/app/(client)/exam-library/interfaces/IPart'
import IGroup from '@/src/app/(client)/exam-library/interfaces/IGroup'
import { useParams } from 'next/navigation'

export default function ComponentListTap({ data }: { data: IMiniTest }) {
    const params = useParams<{ skill: string }>()
    return (
        <>
            <section
                data-skill-test={params.skill}
                className="h-full flex items-center gap-4 px-3 overflow-x-auto overflow-y-hidden scrollbar scrollbar-horizontal"
            >
                {(() => {
                    let totalQuestions = 1
                    return data.parts.map((part: IPart, index: number, baseData: IPart[]) => {
                        if (index > 0) {
                            totalQuestions += baseData[index - 1].groups.reduce(
                                (acc: number, group: IGroup, i: number) => {
                                    acc += group.questions.length
                                    return acc
                                },
                                0,
                            )
                        }
                        return (
                            <ComponentTabItem
                                data={part}
                                index={index}
                                questionIndex={totalQuestions}
                                key={'exam-library-test-' + index}
                            />
                        )
                    })
                })()}
            </section>
        </>
    )
}
