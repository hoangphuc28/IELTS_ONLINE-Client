import { ExamService } from '@/src/utils/shares/db/answer/services/exam.service'
import { userAnswerSelectors } from '../../reducers/user-exam.reducer'
import { AppShareGetState } from '../../store'
import { testSkillSelectors } from '../../reducers/test-skill.reducer'

export const HandleCreate = (name: string, callback?: CallableFunction) => {
    return async (dispatch: any, getState: AppShareGetState) => {
        // handle submit the entire exam
        // save this exam
        const currentProcess = userAnswerSelectors.GetCurrentSkill(getState(), name)
        const targetSkillExam = testSkillSelectors.GetSkillExam(getState())
        if (!currentProcess) {
            console.log('Exam not found.')
            return
        }
        await ExamService.submit(
            targetSkillExam.parts.map((part) => part.id),
            currentProcess.id,
        )

        callback && callback()
    }
}
