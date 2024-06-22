'use client'

import { useEffect, useState } from 'react'
import ComponentUpgradePointModel from './_component/modals/upgrade-point'
import { useAppDispatch, useAppSelector } from '../../../lib/redux/hooks'
import {
    adminUserAnswerAction,
    adminUserAnswerSelector,
} from '../../../lib/redux/reducer/user-answer.reducer'
import { useParams } from 'next/navigation'
import { IUserAnswerProcess } from '@/src/utils/shares/interfaces/IUserAnswerFull'
import { testSkill } from '@/src/utils/shares/interfaces/IMiniTest'

export default function Page() {
    const dispatch = useAppDispatch()
    const params = useParams<{ idUserAnswer: string }>()
    const listAnswers = useAppSelector((state) => adminUserAnswerSelector.GetList(state))
    const useAnswerInstance = useAppSelector((state) =>
        adminUserAnswerSelector.GetById(state, params.idUserAnswer),
    )
    const [isShowUpgradePointModel, setIsShowUpgradePointModel] = useState<boolean>(false)
    const [dataUpgradePoint, setDataUpgradePoint] = useState<{
        skillName: string
        data: IUserAnswerProcess | null
    }>({
        skillName: 'Speaking',
        data: null,
    })
    useEffect(() => {
        if (listAnswers.length === 0) {
            dispatch(adminUserAnswerAction.GetAll())
        }
    }, [])
    useEffect(() => {
        dispatch(adminUserAnswerAction.setterFromId(params.idUserAnswer))
    }, [listAnswers])
    useEffect(() => {
        if (!dataUpgradePoint.data) {
            setIsShowUpgradePointModel(false)
        }
    }, [dataUpgradePoint])
    return (
        <>
            {useAnswerInstance && (
                <section className="flex flex-col gap-3">
                    <section className="bg-white px-4 py-4 rounded shadow">
                        <h3>Submission information</h3>
                        <section className="flex gap-3 w-full mt-3">
                            <section className="flex flex-col gap-2 w-1/2">
                                <p>Code: {useAnswerInstance.processes[0].skillExam.exam.code}</p>
                                <p>Student: {useAnswerInstance?.user.name}</p>
                            </section>
                            <section className="flex flex-col gap-2">
                                <p>Exam: {useAnswerInstance.processes[0].skillExam.exam.name}</p>
                                <p>
                                    Submission on:{' '}
                                    {useAnswerInstance.submittedAt &&
                                        useAnswerInstance.submittedAt.toString()}
                                </p>
                            </section>
                        </section>
                    </section>
                    {useAnswerInstance.processes.map((process, index) => (
                        <section
                            className="flex justify-between bg-white px-4 py-4 rounded shadow"
                            key={'user-answer-detail-item-' + index}
                        >
                            <h3 className="text-xl">{process.skillExam.name}</h3>
                            <section className="flex flex-col gap-3">
                                {process.totalScore === 0 || !!process.totalScore ? (
                                    <>
                                        <h3 className="text-violet-700 text-2xl">
                                            {process.totalScore}
                                        </h3>
                                        <p>
                                            {process.userAnswerDetails.reduce((total, item) => {
                                                if (item.score === 0 || !!item.score) {
                                                    total += item.score
                                                }
                                                return total
                                            }, 0)}
                                            /40
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        {(process.skillExam.name.toLowerCase() ===
                                            testSkill.WRITING.toLowerCase() ||
                                            process.skillExam.name.toLowerCase() ===
                                                testSkill.SPEAKING.toLowerCase()) && (
                                            <button
                                                onClick={(e) =>
                                                    handleShowUpgradeModel(
                                                        process.skillExam.name,
                                                        process,
                                                    )
                                                }
                                                className="px-4 py-2 bg-violet-600 text-white rounded-lg border-none cursor-pointer"
                                            >
                                                Upgrade
                                            </button>
                                        )}
                                    </>
                                )}
                            </section>
                        </section>
                    ))}
                    {isShowUpgradePointModel && dataUpgradePoint.data && (
                        <ComponentUpgradePointModel
                            userAnswerProcess={dataUpgradePoint.data}
                            skillName={dataUpgradePoint.skillName}
                            submitCallback={handleUpgradePoint}
                            closeModelCallback={() => setIsShowUpgradePointModel(false)}
                        />
                    )}
                </section>
            )}
        </>
    )

    function handleShowUpgradeModel(skillName: string, data: IUserAnswerProcess) {
        setIsShowUpgradePointModel((prev) => {
            setDataUpgradePoint({ data, skillName })

            return !prev
        })
    }

    function handleUpgradePoint(score: number, feedback: string) {
        if (!dataUpgradePoint.data) return
        const idProcess = dataUpgradePoint.data.id
        console.log('submit callback:')
    }
}
