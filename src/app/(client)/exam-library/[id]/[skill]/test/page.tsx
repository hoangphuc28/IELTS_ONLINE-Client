'use client'
import ComponentTestFooter from './_components/footer'

import test from '@clientExamLibrary/[id]/data'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import ComponentPart from './_components/part.tsx/part'
import IPart from '@/src/utils/shares/interfaces/IPart'
import ComponentTestHeader from './_components/header'

import { useAppShareDispatch, useAppShareSelector } from '@/src/app/(client)/_lib/redux/hooks'
import {
    userAnswerActions,
    userAnswerSelectors,
} from '@/src/app/(client)/_lib/redux/reducers/user-exam.reducer'
import {
    testSkillActions,
    testSkillSelectors,
} from '@/src/app/(client)/_lib/redux/reducers/test-skill.reducer'
import ComponentSubmit from './_components/submit'
import { testSkill } from '@/src/utils/shares/interfaces/IMiniTest'
import ComponentSpeakingTest from './_components/speakingTest/ComponentSpeaking'
import { siteAction, siteSelector } from '@/src/app/(client)/_lib/redux/reducers/site.reducer'

export default function Page() {
    const params = useParams<{ id: string; skill: string }>()
    const router = useRouter()
    const dispatch = useAppShareDispatch()
    const userAnswer = useAppShareSelector((state) => userAnswerSelectors.GetUserAnswer(state))
    const currentSkillProcess = useAppShareSelector((state) =>
        userAnswerSelectors.GetCurrentSkill(state, params.skill),
    )
    const targetSkillTest = useAppShareSelector((state) => testSkillSelectors.GetSkillExam(state))
    const socketStatus = useAppShareSelector((state) => siteSelector.GetSocketStatus(state))
    // const targetSkillTest = test.details.find((detailSkill) => detailSkill.name === params.skill)
    // const [targetSkillTest, setTargetSkillTest] = useState<IMiniTest | null>(null)
    useEffect(() => {
        if (currentSkillProcess) return
        dispatch(userAnswerActions.Get(params.id))
    }, [])
    useEffect(() => {
        // console.log('[CUR SKILL PROCESS] ', currentSkillProcess)
        if (!currentSkillProcess) return
        dispatch(testSkillActions.GetSkillExamData(currentSkillProcess.skillExam.id))
        dispatch(siteAction.ConnectSocket())
        // const targetSkill: IExamSkill = await skillExamService.get(
        //     currentSkillProcess.skillExam.id,
        // )
        // console.log('[GET EXAM] ', targetSkill)
        // // if (!targetSkill) {
        // //     // router.push('/404')
        // //     return
        // // }
    }, [currentSkillProcess])

    useEffect(() => {
        dispatch(siteAction.HandleStartExam({ userAnswerId: userAnswer.id, codeExam: params.id }))
    }, [socketStatus])

    const renderDOM = useMemo(() => <ComponentMain />, [targetSkillTest])
    return (
        <>
            {targetSkillTest.id.length > 0 && (
                <>
                    {' '}
                    <ComponentTestHeader data={targetSkillTest} />
                    {renderDOM}
                    {params.skill.toLowerCase() !== testSkill.SPEAKING.toLowerCase() && (
                        <ComponentTestFooter data={targetSkillTest} />
                    )}
                </>
            )}
        </>
    )

    function ComponentMain() {
        return (
            <main className="min-h-[80vh] ps-7 pe-4 mb-[100px] bg-white py-2">
                <form className="block h-full" name={'form-exam-' + targetSkillTest.name} action="">
                    {(() => {
                        if (params.skill.toLowerCase() === testSkill.SPEAKING.toLowerCase()) {
                            return <ComponentSpeakingTest targetSkillTest={targetSkillTest} />
                        }

                        return targetSkillTest.parts.map((part: IPart, index: number) => (
                            <ComponentPart
                                key={'exam-library-part-' + index}
                                data={part}
                                index={index}
                            />
                        ))
                    })()}
                </form>

                <section className="mt-auto text-end">
                    <ComponentSubmit target="" />
                </section>
            </main>
        )
    }
}
