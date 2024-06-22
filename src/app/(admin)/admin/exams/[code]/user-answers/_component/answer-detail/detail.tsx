'use client'

import ComponentUpgradePointModel from '@/src/app/(admin)/admin/user-answer-detail/[idUserAnswer]/_component/modals/upgrade-point'
import { useAppDispatch, useAppSelector } from '@/src/app/(admin)/lib/redux/hooks'
import { adminUserAnswerSelector } from '@/src/app/(admin)/lib/redux/reducer/user-answer.reducer'
import { testSkill } from '@/src/utils/shares/interfaces/IMiniTest'
import { IUserAnswerFull, IUserAnswerProcess } from '@/src/utils/shares/interfaces/IUserAnswerFull'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import ComponentUserAnswerInfo from './info'

interface IProps {
    indexUserAnswer: number
}

export default function ComponentAnswerDetailItem({ indexUserAnswer }: IProps) {
    const params = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const userAnswer = useAppSelector((state) =>
        adminUserAnswerSelector.Get(state, indexUserAnswer),
    )
    const [isShowUpgradePointModel, setIsShowUpgradePointModel] = useState<boolean>(false)
    const [dataUpgradePoint, setDataUpgradePoint] = useState<{
        skillName: string
        data: IUserAnswerProcess | null
    }>({
        skillName: 'Speaking',
        data: null,
    })
    return (
        userAnswer && (
            <section className="grid gap-3">
                <ComponentUserAnswerInfo userAnswer={userAnswer} />

                <section className="grid gap-2">
                    {
                        (() => {
                            let i = 0
                            return Object.keys(testSkill).map((key, keyIndex) => {
                                const index = userAnswer.processes.findIndex(
                                    (process) =>
                                        process.skillExam.name.toLowerCase() === key.toLowerCase(),
                                )
                                if (index === -1)
                                    return (
                                        <span
                                            className="hidden"
                                            key={'user-answer-item-' + keyIndex + keyIndex}
                                        ></span>
                                    )
                                i++
                                const process = userAnswer.processes[index]
                                return (
                                    <div
                                        key={'user-answer-item-' + index}
                                        className="pt-2 flex items-center justify-between"
                                        style={{
                                            borderTop: i === 1 ? '' : '1px solid violet',
                                        }}
                                    >
                                        <p className="font-semibold" style={{ fontSize: '14px' }}>
                                            {process.skillExam.name}
                                        </p>
                                        {process.totalScore === 0 || !!process.totalScore ? (
                                            <>
                                                <h3 className="text-violet-700 text-2xl">
                                                    {process.totalScore}
                                                </h3>
                                                <p>
                                                    {process.userAnswerDetails.reduce(
                                                        (total, item) => {
                                                            if (item.score === 0 || !!item.score) {
                                                                total += item.score
                                                            }
                                                            return total
                                                        },
                                                        0,
                                                    )}
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
                                                        className="px-4 py-1 border border-violet-700 bg-white text-violet-700 font-semibold rounded-lg cursor-pointer hover:bg-violet-500/40"
                                                        style={{}}
                                                    >
                                                        Upgrade
                                                    </button>
                                                )}
                                            </>
                                        )}
                                        {isShowUpgradePointModel && dataUpgradePoint.data && (
                                            <ComponentUpgradePointModel
                                                userAnswerProcess={dataUpgradePoint.data}
                                                skillName={dataUpgradePoint.skillName}
                                                submitCallback={handleUpgradePoint}
                                                closeModelCallback={() =>
                                                    setIsShowUpgradePointModel(false)
                                                }
                                            />
                                        )}
                                    </div>
                                )
                            })
                        })()
                        // userAnswer.processes.map((process, index) => (
                        // ))
                    }
                </section>
            </section>
        )
    )

    function handleShowUpgradeModel(skillName: string, data: IUserAnswerProcess) {
        setIsShowUpgradePointModel((prev) => {
            setDataUpgradePoint({ data, skillName })

            return !prev
        })
    }

    function handleUpgradePoint() {}
}
