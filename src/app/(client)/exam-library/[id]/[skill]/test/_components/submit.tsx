'use client'
import { useAppShareSelector } from '@/src/app/(client)/_lib/redux/hooks'
import {
    IUserAnswerProcess,
    userAnswerSelectors,
} from '@/src/app/(client)/_lib/redux/reducers/user-exam.reducer'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import ComponentNextExamConfirmModel from './modals/nextExamConfirm'
import ComponentSubmitExamConfirmModel from './modals/submitExamConfirm'

export default function ComponentSubmit({ target }: { target: string }) {
    const params = useParams<{ skill: string }>()
    const nextSkillProcess = useAppShareSelector((state) =>
        userAnswerSelectors.GetNextSkill(state, params.skill),
    )
    const [isShowNextExamConfirm, setIsShowNextExamConfirm] = useState<boolean>(false)
    const [isShowSubmitExamConfirm, setIsShowSubmitExamConfirm] = useState<boolean>(false)
    const btnRef = useRef<HTMLButtonElement>(null)
    useEffect(() => {}, [])
    return (
        <>
            <button
                ref={btnRef}
                onClick={(e) => handleNextExam()}
                className="bg-cyan-700 px-4 py-1 text-gray-200 font-bold text-base rounded-2xl"
            >
                Submit <i className="fa-regular fa-paper-plane"></i>
            </button>

            {isShowNextExamConfirm && !!nextSkillProcess && (
                <ComponentNextExamConfirmModel
                    nextExam={nextSkillProcess}
                    submitCallback={handleSubmit}
                    closeModelCallback={handleCloseModel}
                />
            )}
            {isShowSubmitExamConfirm && (
                <ComponentSubmitExamConfirmModel closeModelCallback={handleCloseModel} />
            )}
        </>
    )

    function handleNextExam() {
        if (!!nextSkillProcess) {
            setIsShowNextExamConfirm(true)
            return
        }
        setIsShowSubmitExamConfirm(true)
    }

    function handleSubmit() {
        setIsShowNextExamConfirm(false)
        setIsShowSubmitExamConfirm(true)
    }

    function handleCloseModel() {
        setIsShowNextExamConfirm(false)
        setIsShowSubmitExamConfirm(false)
    }
}
