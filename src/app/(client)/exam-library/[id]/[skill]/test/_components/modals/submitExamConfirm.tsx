import {
    IUserAnswerProcess,
    userAnswerSelectors,
} from '@/src/app/(client)/_lib/redux/reducers/user-exam.reducer'
import ComponentBaseModel from './base'
import { useAppShareDispatch, useAppShareSelector } from '@/src/app/(client)/_lib/redux/hooks'
import { useParams } from 'next/navigation'
import { FormEvent, useState } from 'react'
import ComponentCompleteAlert from './completeAlert'
import { ExamService } from '@/src/utils/shares/db/answer/services/exam.service'
import { testSkillSelectors } from '@/src/app/(client)/_lib/redux/reducers/test-skill.reducer'
import { createToastDanger } from '@/src/app/(client)/_components/toast/sysToast'
import { userAnswerDetailActions } from '@/src/app/(client)/_lib/redux/reducers/user-exam-detail.reducer'
import { siteAction } from '@/src/app/(client)/_lib/redux/reducers/site.reducer'

export default function ComponentSubmitExamConfirmModel({
    closeModelCallback,
    preHandleSubmitCallback,
}: {
    closeModelCallback: CallableFunction
    preHandleSubmitCallback?: CallableFunction
}) {
    const params = useParams<{ skill: string }>()
    const examNotDone = useAppShareSelector((state) =>
        userAnswerSelectors.GetExamNotDone({ userAnswer: state.userAnswer }, params.skill),
    )
    const dispatch = useAppShareDispatch()
    const [submitStep, setSubmitStep] = useState<number>(1)
    return (
        <>
            {submitStep == 1 ? (
                <ComponentBaseModel>
                    <form onSubmit={(e) => handleSubmit(e)} action="">
                        <section className="flex flex-col gap-3">
                            <section>
                                {!!examNotDone && (
                                    <h2>
                                        There will be{' '}
                                        <span className="font-semibold">{examNotDone.length}</span>{' '}
                                        test remaining:{''}
                                        {examNotDone.map((process, index) => (
                                            <span
                                                key={
                                                    'submit-exam-confirm-' +
                                                    index +
                                                    new Date().getTime()
                                                }
                                                className="font-semibold ms-1"
                                            >
                                                {process.skillExam.name}
                                            </span>
                                        ))}
                                    </h2>
                                )}
                                <p className="text-start">Do you want to submit your exam now.</p>
                            </section>
                            <p className="text-start">
                                <input
                                    type="checkbox"
                                    name="isSendMail"
                                    id="exam-submit-send-mail-check-box"
                                />
                                <label className="ms-1" htmlFor="exam-submit-send-mail-check-box">
                                    Send my result via mail.
                                </label>
                            </p>
                            <section className="flex flex-col gap-1">
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        onClick={(e) => closeModelCallback()}
                                        className="px-2 rounded border border-gray-200/90 bg-gray-200 hover:bg-gray-300 py-1"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-2 rounded border border-gray-200/90 bg-rose-400/80 hover:bg-rose-400 py-1"
                                    >
                                        Submit the entire exam
                                    </button>
                                </div>
                            </section>
                        </section>
                    </form>
                </ComponentBaseModel>
            ) : (
                <ComponentCompleteAlert />
            )}
        </>
    )

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            // handle submit the entire exam
            preHandleSubmitCallback && preHandleSubmitCallback()
            dispatch(
                userAnswerDetailActions.HandleCreate(params.skill, () => {
                    setSubmitStep(2)
                }),
            )

            // handle end test. ex: disconnect socket, end exam.
            dispatch(siteAction.DisconnectSocket())
        } catch (error) {
            console.log(error)
            createToastDanger('An error occurred')
        }
    }
}
