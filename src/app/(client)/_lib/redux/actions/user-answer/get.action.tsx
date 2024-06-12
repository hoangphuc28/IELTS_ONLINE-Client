import { userAnswerService } from '@/src/services/user-answer.service'
import { userAnswerActions } from '../../reducers/user-exam.reducer'

export const Get = (codeExam: string) => {
    return async (dispatch: any) => {
        const data = await userAnswerService.getRecent(codeExam)
        dispatch(userAnswerActions.setter(data))
    }
}

export const GetAll = () => {}
