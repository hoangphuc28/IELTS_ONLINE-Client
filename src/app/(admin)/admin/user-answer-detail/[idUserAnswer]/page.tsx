'use client'

import { useState } from 'react'
import ComponentUpgradePointModel from './_component/modals/upgrade-point'

export interface IUserAnswerDetail {
    id?: string
    answer: {
        groupQuestionId: string
        questionId: string
        answer: string
    }[]
    score?: number | null
}

export default function Page() {
    const [isShowUpgradePointModel, setIsShowUpgradePointModel] = useState<boolean>(false)
    const [dataUpgradePoint, setDataUpgradePoint] = useState<{
        skillName: string
        data: IUserAnswerDetail[]
    }>({
        skillName: 'Speaking',
        data: [],
    })
    const userAnswer = {
        id: '123',
        code: '123456',
        name: 'exam 1',
        userName: 'ABc',
        submittedAt: '16:44:47 12/6/2024',
        processes: [
            {
                totalScore: 9.5,
                userAnswerDetails: [
                    {
                        id: 'writing-1',
                        answer: [
                            {
                                answer: '1 abc degaf adfasdf sdfasdfas dsasfasda asdfasva asdfasdf',
                            },
                        ],
                        score: 20,
                    },
                    {
                        id: 'writing-1',
                        answer: [
                            {
                                answer: '1 abc degaf adfasdf sdfasdfas dsasfasda asdfasva asdfasdf',
                            },
                        ],
                        score: 8,
                    },
                    {
                        id: 'writing-1',
                        answer: [
                            {
                                answer: '1 abc degaf adfasdf sdfasdfas dsasfasda asdfasva asdfasdf',
                            },
                        ],
                        score: 8,
                    },
                ],
                skillExam: {
                    id: '1',
                    name: 'Listening',
                },
            },
            {
                totalScore: null,
                userAnswerDetails: [
                    {
                        id: 'writing-1',
                        answer: [
                            {
                                answer: '1 abc degaf adfasdf sdfasdfas dsasfasda asdfasva asdfasdf',
                            },
                        ],
                        score: null,
                    },
                    {
                        id: 'writing-2',
                        answer: [
                            {
                                answer: '2 abc degaf adfasdf sdfasdfas dsasfasda asdfasva asdfasdf',
                            },
                        ],
                        score: null,
                    },
                ],
                skillExam: {
                    id: '1',
                    name: 'Writing',
                },
            },
            {
                totalScore: null,
                userAnswerDetails: [
                    {
                        id: 'speaking-1',
                        answer: [{ answer: 'http://localhost:3000/assets/media/test-media.m4a' }],
                        score: null,
                    },
                    {
                        id: 'speaking-2',
                        answer: [{ answer: 'http://localhost:3000/assets/media/robo.m4a' }],
                        score: null,
                    },
                    {
                        id: 'speaking-3',
                        answer: [{ answer: 'http://localhost:3000/assets/media/test-media.m4a' }],
                        score: null,
                    },
                ],
                skillExam: {
                    id: '1',
                    name: 'Speaking',
                },
            },
        ],
    }
    return (
        <section className="flex flex-col gap-3">
            <section className="bg-white px-4 py-4 rounded shadow">
                <h3>Submission information</h3>
                <section className="flex gap-3 w-full mt-3">
                    <section className="flex flex-col gap-2 w-1/2">
                        <p>Code: {userAnswer.code}</p>
                        <p>Student: {userAnswer.userName}</p>
                    </section>
                    <section className="flex flex-col gap-2">
                        <p>Exam: {userAnswer.name}</p>
                        <p>Submission on: {userAnswer.submittedAt}</p>
                    </section>
                </section>
            </section>
            {userAnswer.processes.map((process) => (
                <section className="flex justify-between bg-white px-4 py-4 rounded shadow">
                    <h3 className="text-xl">{process.skillExam.name}</h3>
                    <section className="flex flex-col gap-3">
                        {process.totalScore === 0 || !!process.totalScore ? (
                            <>
                                <h3 className="text-violet-700 text-2xl">{process.totalScore}</h3>
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
                            <button
                                onClick={(e) =>
                                    handleShowUpgradeModel(
                                        process.skillExam.name,
                                        process.userAnswerDetails,
                                    )
                                }
                                className="px-4 py-2 bg-violet-600 text-white rounded-lg border-none cursor-pointer"
                            >
                                Upgrade
                            </button>
                        )}
                    </section>
                </section>
            ))}
            {isShowUpgradePointModel && (
                <ComponentUpgradePointModel
                    userAnswerDetails={dataUpgradePoint.data as any}
                    skillName={dataUpgradePoint.skillName}
                    submitCallback={() => {}}
                    closeModelCallback={() => setIsShowUpgradePointModel(false)}
                />
            )}
        </section>
    )

    function handleShowUpgradeModel(
        skillName: string,
        data: { answer: any[]; id: string; score: number | null | undefined }[],
    ) {
        setIsShowUpgradePointModel((prev) => {
            setDataUpgradePoint({ data, skillName })

            return !prev
        })
    }
}
