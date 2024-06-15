import { userAnswerService } from '@/src/services/user-answer.service'
import { userAnswerActions } from '../../reducers/user-exam.reducer'

export const Get = (userAnswerId: string) => {
    return async (dispatch: any) => {
        const data = await userAnswerService.get(userAnswerId)
        dispatch(userAnswerActions.setter(data))
    }
}

export const GetAll = () => {}
