'use client'

import Link from 'next/link'
import ComponentRow from './list-user-answer/row'
import { IUserAnswerFull } from '@/src/utils/shares/interfaces/IUserAnswerFull'

export default function ComponentListUserAnswer({
    listUserAnswer,
}: {
    listUserAnswer: IUserAnswerFull[]
}) {
    return (
        <section>
            <ComponentRow
                values={['Code', 'Exam', 'Student', 'Submitted', 'Status']}
                className="font-bold"
            />
            <section className="mt-2 flex flex-col gap-1 border border-top border-black">
                {listUserAnswer.length > 0 &&
                    listUserAnswer.map((userAnswer, index) => {
                        let isGraded = true
                        userAnswer.processes.forEach((process) =>
                            process.userAnswerDetails.forEach((detail) => {
                                if (detail.score !== 0 && !detail.score) {
                                    isGraded = false
                                }
                            }),
                        )
                        const firstAnswerDetail = userAnswer.processes[0].userAnswerDetails[0]
                        return (
                            <section className="hover:bg-gray-100" key={'recent-answer-' + index}>
                                <ComponentRow
                                    values={[
                                        firstAnswerDetail &&
                                            firstAnswerDetail.examDetail.skillExam.exam.code,
                                        firstAnswerDetail &&
                                            firstAnswerDetail.examDetail.skillExam.exam.name,
                                        userAnswer.user.name,
                                        userAnswer.submittedAt?.toTimeString(),
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
