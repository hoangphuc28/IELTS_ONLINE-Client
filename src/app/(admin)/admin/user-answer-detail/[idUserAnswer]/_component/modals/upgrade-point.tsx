import {
    IUserAnswerProcess,
    userAnswerSelectors,
} from '@/src/app/(client)/_lib/redux/reducers/user-exam.reducer'
import ComponentBaseModel from './base'
import { useParams, useRouter } from 'next/navigation'
import { useAppShareDispatch, useAppShareSelector } from '@/src/app/(client)/_lib/redux/hooks'
import { userAnswerDetailActions } from '@/src/app/(client)/_lib/redux/reducers/user-exam-detail.reducer'
import { testSkill } from '@/src/utils/shares/interfaces/IMiniTest'
import { IUserAnswerDetail } from '../../page'

export default function ComponentUpgradePointModel({
    skillName,
    userAnswerDetails,
    submitCallback,
    closeModelCallback,
}: {
    skillName: string
    userAnswerDetails: IUserAnswerDetail[]
    submitCallback?: CallableFunction
    closeModelCallback: CallableFunction
}) {
    const params = useParams<{ skill: string }>()
    const router = useRouter()
    const exam = useAppShareSelector((state) => state.exam)
    const dispatch = useAppShareDispatch()
    return (
        <ComponentBaseModel>
            <section className="flex flex gap-3">
                <section
                    className="flex flex-col gap-3 px-3"
                    style={{ borderRight: '1px solid #cccccc80' }}
                >
                    {userAnswerDetails.map((userAnswerDetail) =>
                        userAnswerDetail.answer.map((answer, index) =>
                            skillName.toLowerCase() === testSkill.WRITING.toLowerCase() ? (
                                <p
                                    className="max-w-[800px]"
                                    key={'user-answer-detail-skill-' + index}
                                >
                                    {answer.answer +
                                        answer.answer +
                                        answer.answer +
                                        answer.answer +
                                        answer.answer +
                                        answer.answer +
                                        answer.answer +
                                        answer.answer +
                                        answer.answer +
                                        answer.answer +
                                        answer.answer +
                                        answer.answer +
                                        answer.answer +
                                        answer.answer +
                                        answer.answer}
                                </p>
                            ) : (
                                <audio
                                    src={answer.answer}
                                    controls
                                    key={'user-answer-detail-skill-' + index}
                                ></audio>
                            ),
                        ),
                    )}
                </section>
                <section className="flex flex-col gap-1">
                    <div className="flex flex-col gap-1">
                        <p>Score</p>
                        <div>
                            <input type="number" name="score" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Feedback</p>
                        <div>
                            <textarea className="w-full h-[100px]" name="feedback"></textarea>
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
                            onClick={(e) => submitCallback && submitCallback()}
                            className="px-2 rounded border border-gray-200/90 bg-rose-400/80 hover:bg-rose-400 py-1"
                        >
                            Save
                        </button>
                    </div>
                </section>
            </section>
        </ComponentBaseModel>
    )
}
