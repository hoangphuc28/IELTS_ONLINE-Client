'use client'

import Link from 'next/link'
import ComponentRow from './list-user-answer/row'
import { IUserAnswerFull } from '@/src/utils/shares/interfaces/IUserAnswerFull'
import { useMemo } from 'react'
import { useAppDispatch } from '../../../lib/redux/hooks'
import { adminUserAnswerAction } from '../../../lib/redux/reducer/user-answer.reducer'

export default function ComponentListUserAnswer({
    listUserAnswer,
}: {
    listUserAnswer: IUserAnswerFull[]
}) {
    const dispatch = useAppDispatch()
    return useMemo(
        () => (
            <section>
                <ComponentRow
                    values={['Code', 'Exam', 'Student', 'Submitted', 'Status']}
                    className="font-bold"
                />
                <section className="mt-2 flex flex-col gap-1 border border-top border-black">
                    {listUserAnswer.length > 0 &&
                        listUserAnswer.map((userAnswer, index) => {
                            let isGraded = true
                            userAnswer.processes.forEach((process) => {
                                if (process.totalScore !== 0 && !process.totalScore) {
                                    isGraded = false
                                }
                            })
                            const firstAnswerDetail = userAnswer.processes[0]
                            return (
                                <section
                                    className="hover:bg-gray-100"
                                    key={'recent-answer-' + index}
                                >
                                    <ComponentRow
                                        values={[
                                            firstAnswerDetail &&
                                                firstAnswerDetail.skillExam.exam.code,
                                            firstAnswerDetail &&
                                                firstAnswerDetail.skillExam.exam.name,
                                            userAnswer.user.name,
                                            userAnswer.submittedAt?.toTimeString(),
                                        ]}
                                    >
                                        <Link
                                            onClick={(e) => handleClickUpgradePoint(index)}
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
        ),
        [listUserAnswer],
    )

    function handleClickUpgradePoint(index: number) {
        dispatch(adminUserAnswerAction.setter(listUserAnswer[index]))
    }
}
