'use client'

import { useState } from 'react'
import ComponentAudioItem from './_components/audioItem'
import IMiniTest, { testSkill } from '@/src/utils/shares/interfaces/IMiniTest'
import ComponentCompleteAlert from '../modals/completeAlert'
import { createToastDanger } from '@/src/app/(client)/_components/toast/sysToast'
import { useAppShareDispatch } from '@/src/app/(client)/_lib/redux/hooks'
import { userAnswerDetailActions } from '@/src/app/(client)/_lib/redux/reducers/user-exam-detail.reducer'

export default function ComponentSpeakingTest({ targetSkillTest }: { targetSkillTest: IMiniTest }) {
    const [partProcess, setPartProcess] = useState<number>(0)
    const [isShowCompleteModel, setIsShowCompleteModel] = useState<boolean>(false)
    const dispatch = useAppShareDispatch()
    return (
        <>
            <section className="">
                <ComponentAudioItem
                    data={targetSkillTest}
                    index={partProcess}
                    nextPartCallback={nextPart}
                    submitCallback={handleSubmit}
                />
            </section>
            {isShowCompleteModel && <ComponentCompleteAlert />}
        </>
    )

    function nextPart() {
        return setPartProcess((prev) => prev + 1)
    }

    async function handleSubmit() {
        try {
            if (partProcess === targetSkillTest?.parts.length - 1) {
                dispatch(
                    userAnswerDetailActions.HandleCreate(testSkill.SPEAKING, () => {
                        setIsShowCompleteModel(true)
                    }),
                )

                // handle end test. ex: disconnect socket, end exam.
            }
            return
        } catch (error) {
            console.log(error)
            createToastDanger('An error occurred')
        }
    }
}
