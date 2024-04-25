'use client'
import ComponentTestFooter from './_components/footer'

import test from '@clientExamLibrary/[id]/data'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import according from '@clientExamLibrary/[id]/[skill]/utils/according'
import toQuestion from '@clientExamLibrary/[id]/[skill]/utils/toQuestion'
import ComponentPart from './_components/part.tsx/part'
import IPart from '@clientExamLibrary/interfaces/IPart'
import IGroup from '../../../interfaces/IGroup'

export default function Page() {
    const params = useParams<{ id: string; skill: string }>()
    const router = useRouter()
    const targetSkillTest = test.details.find((detailSkill) => detailSkill.name === params.skill)
    if (!targetSkillTest) return router.push('/404')

    // #region parts contains number of questions in groups
    const startIndexEveryPart: number[] = []
    let totalQuestions = 1
    targetSkillTest.parts.forEach((part: IPart, index: number, baseData: IPart[]) => {
        if (index > 0) {
            totalQuestions += baseData[index - 1].groups.reduce(
                (acc: number, group: IGroup, i: number) => {
                    acc += group.questions.length
                    return acc
                },
                0,
            )
        }
        startIndexEveryPart.push(totalQuestions)
    })
    useEffect(() => {
        localStorage.setItem('startIndexEveryPart', JSON.stringify(startIndexEveryPart))
        // according()
        // toQuestion()
    }, [])
    // #endregion parts contains number of questions in groups
    return (
        <>
            <main className="min-h-[80vh] px-3 mb-[100px]">
                <form name={'form-exam-' + targetSkillTest.name} action="">
                    {targetSkillTest.parts.map((part: IPart, index: number) => (
                        <ComponentPart
                            key={'exam-library-part-' + index}
                            data={part}
                            index={index}
                            startQuestion={startIndexEveryPart[index]}
                        />
                    ))}
                </form>
            </main>
            <ComponentTestFooter data={targetSkillTest} />
        </>
    )
}
