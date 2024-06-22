import testService from '@/src/services/test.service'
import { adminExamAction } from '../../reducer/exam.reducer'
import { IExam } from '@/src/utils/shares/interfaces/IUserAnswerFull'

export const GetAll = () => {
    return async (dispatch: any) => {
        const data: IExam[] = await testService.getAll()
        // console.log('data: ', data)
        dispatch(adminExamAction.setterAll(data))
    }
}
