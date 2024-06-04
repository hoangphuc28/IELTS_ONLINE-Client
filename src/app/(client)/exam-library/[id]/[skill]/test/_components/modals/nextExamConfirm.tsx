import {
    IUserAnswerProcess,
    userAnswerSelectors,
} from '@/src/app/(client)/_lib/redux/reducers/user-exam.reducer'
import ComponentBaseModel from './base'
import { useParams, useRouter } from 'next/navigation'
import { useAppShareSelector } from '@/src/app/(client)/_lib/redux/hooks'
import { ExamService } from '@/src/utils/shares/db/answer/services/exam.service'
import { testSkillSelectors } from '@/src/app/(client)/_lib/redux/reducers/test-skill.reducer'

export default function ComponentNextExamConfirmModel({
    nextExam,
    submitCallback,
    closeModelCallback,
}: {
    nextExam: IUserAnswerProcess
    submitCallback?: CallableFunction
    closeModelCallback: CallableFunction
}) {
    const params = useParams<{ skill: string }>()
    const router = useRouter()
    const exam = useAppShareSelector((state) => state.exam)
    const targetSkillExam = useAppShareSelector((state) => testSkillSelectors.GetSkillExam(state))
    const currentProcess = useAppShareSelector((state) =>
        userAnswerSelectors.GetCurrentSkill(state, params.skill),
    )
    return (
        <ComponentBaseModel>
            <section className="flex flex-col gap-3">
                <section>
                    <h2 className="font-semibold">
                        Make sure you have completed all the questions in this test.
                    </h2>
                    <p className="text-start">
                        Coming up next will be the{' '}
                        <span className="font-semibold">{nextExam.skillExam.name}</span> test.
                    </p>
                </section>
                <section className="flex flex-col gap-1">
                    <div>
                        <button
                            onClick={async (e) => await handleNextTest()}
                            className="rounded w-full py-2 border border-gray-200/90 bg-yellow-400/80 hover:bg-yellow-400"
                        >
                            Move to the next test
                        </button>
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
                            Submit the entire exam
                        </button>
                    </div>
                </section>
            </section>
        </ComponentBaseModel>
    )

    async function handleNextTest() {
        try {
            console.log('Go to next test.')

            // save this exam
            if (!currentProcess) {
                console.log('Exam not found.')
                return
            }
            await ExamService.submit(
                targetSkillExam.parts.map((part) => part.id),
                currentProcess.id,
            )

            // redirect to next test
            console.log('Go to next test.')
            const nextUri = `/exam-library/${
                exam.code
            }/${nextExam.skillExam.name.toLowerCase()}/test`
            router.push(nextUri)
        } catch (error) {
            console.log(error)
        }
    }
}
