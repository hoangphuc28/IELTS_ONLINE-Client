import { userAnswerService } from '@/src/services/user-answer.service'
import { adminUserAnswerAction } from '../../reducer/user-answer.reducer'
import { IUserAnswerFull } from '@/src/utils/shares/interfaces/IUserAnswerFull'

export const Get = () => {}

export const GetAll = () => {
    return async (dispatch: any) => {
        const listAnswers: IUserAnswerFull[] = await userAnswerService.getAllRecent()
        // console.log('[list answers] ', listAnswers)
        dispatch(adminUserAnswerAction.setList(listAnswers))
    }
}

export const FilterByExam = (code: string) => {
    return async (dispatch: any) => {
        const listAnswers: IUserAnswerFull[] = await userAnswerService.getAllFilterExam(code)

        // console.log('data answers filter: ', listAnswers)
        dispatch(adminUserAnswerAction.setList(listAnswers))
    }
}
