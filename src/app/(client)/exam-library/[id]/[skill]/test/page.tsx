'use client'
import ComponentTestFooter from './_components/footer'

import test from '@clientExamLibrary/[id]/data'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import ComponentPart from './_components/part.tsx/part'
import IPart from '@/src/utils/shares/interfaces/IPart'
import ComponentTestHeader from './_components/header'

import { useAppShareDispatch, useAppShareSelector } from '@/src/app/(client)/_lib/redux/hooks'
import { userAnswerSelectors } from '@/src/app/(client)/_lib/redux/reducers/user-exam.reducer'
import {
    testSkillActions,
    testSkillSelectors,
} from '@/src/app/(client)/_lib/redux/reducers/test-skill.reducer'

export default function Page() {
    const params = useParams<{ id: string; skill: string }>()
    const router = useRouter()
    const dispatch = useAppShareDispatch()
    const currentSkillProcess = useAppShareSelector((state) =>
        userAnswerSelectors.GetCurrentSkill(state, params.skill),
    )
    const targetSkillTest = useAppShareSelector((state) => testSkillSelectors.GetSkillExam(state))
    // const targetSkillTest = test.details.find((detailSkill) => detailSkill.name === params.skill)
    // const [targetSkillTest, setTargetSkillTest] = useState<IMiniTest | null>(null)
    useEffect(() => {
        // console.log('[CUR SKILL PROCESS] ', currentSkillProcess)
        if (!currentSkillProcess) return
        dispatch(testSkillActions.GetSkillExamData(currentSkillProcess.skillExam.id))
        // const targetSkill: IExamSkill = await skillExamService.get(
        //     currentSkillProcess.skillExam.id,
        // )
        // console.log('[GET EXAM] ', targetSkill)
        // // if (!targetSkill) {
        // //     // router.push('/404')
        // //     return
        // // }
    }, [])
    return (
        <>
            {targetSkillTest.id.length > 0 && (
                <>
                    {' '}
                    <ComponentTestHeader data={targetSkillTest} />
                    <main className="min-h-[80vh] ps-7 pe-4 mb-[100px] bg-white py-2">
                        <form
                            className="block h-full"
                            name={'form-exam-' + targetSkillTest.name}
                            action=""
                        >
                            {targetSkillTest.parts.map((part: IPart, index: number) => (
                                <ComponentPart
                                    key={'exam-library-part-' + index}
                                    data={part}
                                    index={index}
                                />
                            ))}
                        </form>
                    </main>
                    <ComponentTestFooter data={targetSkillTest} />
                </>
            )}
        </>
    )
}
