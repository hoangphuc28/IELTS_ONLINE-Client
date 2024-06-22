import { userAnswerSelectors } from '@/src/app/(client)/_lib/redux/reducers/user-exam.reducer'
import ComponentBaseModel from './base'
import { useParams, useRouter } from 'next/navigation'
import { useAppShareDispatch, useAppShareSelector } from '@/src/app/(client)/_lib/redux/hooks'
import { userAnswerDetailActions } from '@/src/app/(client)/_lib/redux/reducers/user-exam-detail.reducer'
import { testSkill } from '@/src/utils/shares/interfaces/IMiniTest'
import { IUserAnswerProcess } from '@/src/utils/shares/interfaces/IUserAnswerFull'
import { useState } from 'react'

export default function ComponentUpgradePointModel({
    skillName,
    userAnswerProcess,
    submitCallback,
    closeModelCallback,
}: {
    skillName: string
    userAnswerProcess: IUserAnswerProcess
    submitCallback?: CallableFunction
    closeModelCallback: CallableFunction
}) {
    const params = useParams<{ skill: string }>()
    const router = useRouter()
    const exam = useAppShareSelector((state) => state.exam)
    const dispatch = useAppShareDispatch()
    const [score, setScore] = useState(9)
    const [feedback, setFeedback] = useState<string>('')
    return (
        <ComponentBaseModel handleCloseModal={closeModelCallback}>
            <section className="flex flex gap-3">
                <section
                    className="flex flex-col gap-3 px-3"
                    style={{ borderRight: '1px solid #cccccc80' }}
                >
                    {userAnswerProcess.userAnswerDetails.length !== 0 ? (
                        userAnswerProcess.userAnswerDetails.map((userAnswerDetail) => (
                            <>
                                <h3>{userAnswerDetail.examDetail.part.partNumber}</h3>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: userAnswerDetail.examDetail.part.title || '',
                                    }}
                                ></p>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: userAnswerDetail.examDetail.part.content || '',
                                    }}
                                ></p>
                                {skillName.toLowerCase() === testSkill.SPEAKING.toLowerCase() && (
                                    <audio
                                        src={userAnswerDetail.examDetail.part.resource}
                                        controls
                                    ></audio>
                                )}
                                <p className="text-lg font-semibold">Answer:</p>
                                {userAnswerDetail.answer.map((answer, index) =>
                                    skillName.toLowerCase() === testSkill.WRITING.toLowerCase() ? (
                                        <p
                                            className="max-w-[800px]"
                                            key={'user-answer-detail-skill-' + index}
                                        >
                                            {answer.answers[0].answer}
                                        </p>
                                    ) : (
                                        <audio
                                            src={answer.answers[0].answer}
                                            controls
                                            key={'user-answer-detail-skill-' + index}
                                        ></audio>
                                    ),
                                )}
                            </>
                        ))
                    ) : (
                        <p>-- No Content --</p>
                    )}
                </section>
                <section className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <h3>Score</h3>
                        <div>
                            <input
                                className="px-2 py-1 text-lg rounded"
                                type="number"
                                name="score"
                                min={1}
                                max={9}
                                value={score}
                                onChange={(e) => setScore(Number.parseInt(e.currentTarget.value))}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3>Feedback</h3>
                        <div>
                            <textarea
                                className="w-full min-w-[100px] min-h-[100px] text-lg rounded px-3 py-2"
                                name="feedback"
                                value={feedback}
                                onChange={(e) => setFeedback(e.currentTarget.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            onClick={(e) => closeModelCallback()}
                            className="px-2 rounded border border-gray-200/90 bg-gray-200 hover:bg-gray-300 py-1"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={(e) => handleSubmit()}
                            className="px-2 rounded border border-gray-200/90 bg-rose-400/80 hover:bg-rose-400 py-1"
                        >
                            Save
                        </button>
                    </div>
                </section>
            </section>
        </ComponentBaseModel>
    )

    function handleSubmit() {
        submitCallback && submitCallback(score, feedback)
    }
}
