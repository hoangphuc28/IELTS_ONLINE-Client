'use client'
import ComponentTestFooter from './_components/footer'

import test from '@clientExamLibrary/[id]/data'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import ComponentPart from './_components/part.tsx/part'
import IPart from '@/src/utils/shares/interfaces/IPart'
import IGroup from '../../../../../../utils/shares/interfaces/IGroup'
import ComponentTestHeader from './_components/header'

import { useAppShareDispatch, useAppShareSelector } from '@/src/app/(client)/_lib/redux/hooks'
import { userAnswerSelectors } from '@/src/app/(client)/_lib/redux/reducers/user-exam.reducer'
import IMiniTest, { testSkill } from '@/src/utils/shares/interfaces/IMiniTest'
import skillExamService from '@/src/services/skill-exam.service'
import { testSkillActions } from '@/src/app/(client)/_lib/redux/reducers/test-skill.reducer'
import { IExamSkill, IExamSkillDetail } from '@/src/utils/shares/dto/exam-skill.dto'

export default function Page() {
    const params = useParams<{ id: string; skill: string }>()
    const router = useRouter()
    const dispatch = useAppShareDispatch()
    const currentSkillProcess = useAppShareSelector((state) =>
        userAnswerSelectors.GetCurrentSkill(state, params.skill),
    )
    // const targetSkillTest = test.details.find((detailSkill) => detailSkill.name === params.skill)
    const [targetSkillTest, setTargetSkillTest] = useState<IMiniTest | null>(null)

    // #region parts contains number of questions in groups
    // const startIndexesEveryPart: number[] = useAppShareSelector((state) =>
    //     testSkillSelectors.GetIndexesEveryPart({ testSkill: state.testsSkill }),
    // )

    // #endregion parts contains number of questions in groups
    useEffect(() => {
        // localStorage.setItem('startIndexEveryPart', JSON.stringify(startIndexEveryPart))

        getCurrentSkillExam()
            .then(() => {})
            .catch((e) => console.log(e))

        async function getCurrentSkillExam() {
            // console.log('[CUR SKILL PROCESS] ', currentSkillProcess)
            if (!currentSkillProcess) return
            const targetSkill: IExamSkill = await skillExamService.get(
                currentSkillProcess.skillExam.id,
            )
            console.log('[GET EXAM] ', targetSkill)
            // if (!targetSkill) {
            //     // router.push('/404')
            //     return
            // }
            const data: IMiniTest = convertDataSkillExamDetail(targetSkill)
            setTargetSkillTest(data)

            const startIndexesEveryPart: number[] = []
            calcStartIndexEveryPart(startIndexesEveryPart, data.parts)
            console.log('[Start indexes] ', startIndexesEveryPart)
            dispatch(testSkillActions.setStartIndexEveryPart(startIndexesEveryPart))
        }
    }, [])
    return (
        <>
            {targetSkillTest && (
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
                                    // startQuestion={startIndexEveryPart[index]}
                                />
                            ))}
                        </form>
                    </main>
                    <ComponentTestFooter data={targetSkillTest} />
                </>
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

    function calcStartIndexEveryPart(result: number[], parts: IPart[]) {
        let totalQuestions = 1
        // console.log('[DATA PART] ', parts)
        parts.forEach((part: IPart, index: number, baseData: IPart[]) => {
            if (index > 0) {
                totalQuestions += baseData[index - 1].groupQuestions.reduce(
                    (acc: number, group: IGroup, i: number) => {
                        group.data.forEach((question, index) => {
                            if (!!question.question && question.question.length > 0) {
                                acc += 1
                            }
                        })
                        return acc
                    },
                    0,
                )
            }
            result.push(totalQuestions)
        })
    }
}
