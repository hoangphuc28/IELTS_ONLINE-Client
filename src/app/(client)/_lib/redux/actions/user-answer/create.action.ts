import { userAnswerService } from "@/src/services/user-answer.service"
import { testSkillSelectors } from "../../reducers/test-skill.reducer"
import { AppShareGetState } from "../../store"
import { IUserAnswer, userAnswerActions } from "../../reducers/user-exam.reducer"
import { answersKey } from "@/src/utils/shares/localStorage"

export const Create = () => {
    return async (dispatch: any, getState: AppShareGetState) => {
        const user = getState().user
        const testsSkill = testSkillSelectors.GetTestSkillsProcess(getState())

        const userAnswer: IUserAnswer = await userAnswerService.create({
            timeStart: new Date(),
            userId: user.id,
            examSkills: testsSkill,
        })

        localStorage.setItem(answersKey, userAnswer.id)
        dispatch(userAnswerActions.setter(userAnswer))
    }
}