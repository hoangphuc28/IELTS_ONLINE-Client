'use client'
import ComponentTestHeader from '@clientExamLibrary/[id]/[skill]/test/_components/header'
import { useParams, useRouter } from 'next/navigation'
import test from '@clientExamLibrary/[id]/data'
import { useAppShareDispatch, useAppShareSelector } from '@/src/app/(client)/_lib/redux/hooks'
import { userAnswerSelectors } from '@/src/app/(client)/_lib/redux/reducers/user-exam.reducer'
import { useEffect, useState } from 'react'
import IMiniTest, { testSkill } from '@/src/utils/shares/interfaces/IMiniTest'
import { IExamSkill, IExamSkillDetail } from '@/src/utils/shares/dto/exam-skill.dto'
import skillExamService from '@/src/services/skill-exam.service'
import IPart from '@/src/utils/shares/interfaces/IPart'
import ComponentAudioItem from '../_components/audioItem'
import { createToastDanger } from '@/src/app/(client)/_components/toast/sysToast'
import {
    testSkillActions,
    testSkillSelectors,
} from '@/src/app/(client)/_lib/redux/reducers/test-skill.reducer'
import ComponentCompleteAlert from '../../[skill]/test/_components/modals/completeAlert'
import { ExamService } from '@/src/utils/shares/db/answer/services/exam.service'

export default function Page() {
    const pageName: string = testSkill.SPEAKING
    const router = useRouter()
    const dispatch = useAppShareDispatch()
    const currentSkillProcess = useAppShareSelector((state) =>
        userAnswerSelectors.GetCurrentSkill(state, pageName),
    )
    const [partProcess, setPartProcess] = useState<number>(0)
    const [isShowCompleteModel, setIsShowCompleteModel] = useState<boolean>(false)
    const targetSkillTest = useAppShareSelector((state) => testSkillSelectors.GetSkillExam(state))

    // #endregion parts contains number of questions in groups
    useEffect(() => {
        console.log('[CURRENT Skill process]', currentSkillProcess)
        if (!currentSkillProcess) return
        dispatch(testSkillActions.GetSkillExamData(currentSkillProcess.skillExam.id))
    }, [currentSkillProcess])
    return (
        <>
            {targetSkillTest.id.length > 0 && (
                <section className="">
                    <ComponentTestHeader data={targetSkillTest} />
                    <ComponentAudioItem
                        data={targetSkillTest}
                        index={partProcess}
                        nextPartCallback={nextPart}
                        submitCallback={handleSubmit}
                    />
                    {isShowCompleteModel && <ComponentCompleteAlert />}
                </section>
            )}
        </>
    )

    function nextPart() {
        return setPartProcess((prev) => prev + 1)
    }

    async function handleSubmit() {
        try {
            if (!targetSkillTest) {
                createToastDanger('No data!')
                return
            }
            if (partProcess === targetSkillTest?.parts.length - 1) {
                console.log('Submit the entire exam...')

                if (!currentSkillProcess) {
                    console.log('Exam not found.')
                    return
                }
                await ExamService.submit(
                    targetSkillTest.parts.map((part) => part.id),
                    currentSkillProcess.id,
                )

                // handle end test. ex: disconnect socket, end exam.
                setIsShowCompleteModel(true)
            }
            return
        } catch (error) {
            console.log(error)
            createToastDanger('An error occurred')
        }
    }
}
