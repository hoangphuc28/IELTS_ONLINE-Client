'use client'

import Link from 'next/link'
import ComponentRow from './list-user-answer/row'

export default function ComponentListUserAnswer({
    listUserAnswer,
}: {
    listUserAnswer: ResUserAnswer[]
}) {
    return (
        <section>
            <ComponentRow
                values={['Code', 'Exam', 'Student', 'Submitted', 'Status']}
                className="font-bold"
            />
            <section className="mt-2 flex flex-col gap-1 border border-top border-black">
                {listUserAnswer.map((userAnswer, index) => {
                    let isGraded = true
                    userAnswer.processes.forEach((process) =>
                        process.userAnswerDetails.forEach((detail) => {
                            if (detail.score !== 0 && !detail.score) {
                                isGraded = false
                            }
                        }),
                    )
                    return (
                        <section className="hover:bg-gray-100" key={'recent-answer-' + index}>
                            <ComponentRow
                                values={[
                                    userAnswer.code,
                                    userAnswer.name,
                                    userAnswer.userName,
                                    userAnswer.submittedAt,
                                ]}
                            >
                                <Link
                                    href={`/admin/user-answer-detail/${userAnswer.id}`}
                                    className={
                                        'block px-2 py-2 rounded-lg text-white font-bold border-none cursor-pointer text-center ' +
                                        (!isGraded ? 'bg-violet-600' : 'bg-gray-400')
                                    }
                                    type="button"
                                >
                                    {!isGraded ? <span>Upgrade</span> : <span>Graded</span>}
                                </Link>
                            </ComponentRow>
                        </section>
                    )
                })}
            </section>
        </section>
    )
}

export interface ResUserAnswer {
    code: string
    name: string
    userName: string
    id: string // id user-answer
    submittedAt: string
    processes: {
        totalScore: number | null | undefined
        userAnswerDetails: {
            id: string
            score: number | null | undefined
            answer: string
        }[]
        skillExam: {
            id: string
            name: string
        }
    }[]
}
