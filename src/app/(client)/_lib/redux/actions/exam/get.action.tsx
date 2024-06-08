import testService from '@/src/services/test.service'
import { examActions } from '../../reducers/exam.reducer'

export const GetExam = (code: string) => {
    return async (dispatch: any) => {
        const exam = await testService.get(code)
        dispatch(examActions.setter(exam))
    }
}

export const GetAllExam = () => {
    return async (dispatch: any) => {
        const exams = await testService.getAll()
        dispatch(examActions.setterExams(exams))
    }
}
