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

export default function Page() {
    const pageName: string = testSkill.SPEAKING
    const router = useRouter()
    const dispatch = useAppShareDispatch()
    const currentSkillProcess = useAppShareSelector((state) =>
        userAnswerSelectors.GetCurrentSkill(state, pageName),
    )
    const [targetSkillTest, setTargetSkillTest] = useState<IMiniTest | null>(null)
    const [partProcess, setPartProcess] = useState<number>(0)

    useEffect(() => {
        getCurrentSkillExam()
            .then(() => {})
            .catch((e) => console.log(e))

        async function getCurrentSkillExam() {
            // console.log('[CUR SKILL PROCESS] ', currentSkillProcess)
            if (!currentSkillProcess) return
            const targetSkill: IExamSkill = await skillExamService.get(
                currentSkillProcess.skillExam.id,
            )
            // console.log('[GET EXAM] ', targetSkill)
            // if (!targetSkill) {
            //     // router.push('/404')
            //     return
            // }
            const data: IMiniTest = convertDataSkillExamDetail(targetSkill)
            setTargetSkillTest(data)
        }
    }, [])
    return (
        <>
            {targetSkillTest && (
                <section className="">
                    <ComponentTestHeader data={targetSkillTest} />
                    <ComponentAudioItem
                        data={targetSkillTest}
                        index={partProcess}
                        nextPartCallback={nextPart}
                        submitCallback={handleSubmit}
                    />
                </section>
            )}
        </>
    )

    function convertDataSkillExamDetail(data: IExamSkill): IMiniTest {
        return {
            id: data.id,
            name: data.name,
            parts: convertExamSkillDetailToPartClient(data.details),
            time: calcTotalTime(data.details),
            src: '',
        }

        function convertExamSkillDetailToPartClient(details: IExamSkillDetail[]): IPart[] {
            return details.map((item: IExamSkillDetail) => ({ ...item.part, id: item.id }))
        }

        function calcTotalTime(details: IExamSkillDetail[]): string {
            return data.details
                .reduce((totalTime, detail) => {
                    return totalTime + new Date(detail.time).getTime()
                }, 0)
                .toString()
        }
    }

    function nextPart() {
        return setPartProcess((prev) => prev + 1)
    }

    function handleSubmit() {
        if (!targetSkillTest) {
            createToastDanger('No data!')
            return
        }
        if (partProcess === targetSkillTest?.parts.length - 1) {
        }
        return
    }
}
