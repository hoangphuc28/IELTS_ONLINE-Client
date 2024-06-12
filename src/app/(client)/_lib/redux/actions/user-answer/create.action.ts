import { userAnswerService } from "@/src/services/user-answer.service"
import { testSkillSelectors } from "../../reducers/test-skill.reducer"
import { AppShareGetState } from "../../store"
import { IUserAnswer, userAnswerActions } from "../../reducers/user-exam.reducer"

export const Create = () => {
    return async (dispatch: any, getState: AppShareGetState) => {
        const user = getState().user
        const testsSkill = testSkillSelectors.GetTestSkillsProcess(getState())

        const userAnswer: IUserAnswer = await userAnswerService.create({
            timeStart: new Date(),
            userId: user.id,
            examSkills: testsSkill,
        })
        dispatch(userAnswerActions.setter(userAnswer))
    }
}