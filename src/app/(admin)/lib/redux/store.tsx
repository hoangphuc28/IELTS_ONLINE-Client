import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import groupQuestionReducer from './reducer/groupQuestionReducer'
import partReducer from './reducer/partReducer'
import commonReducer from './reducer/commonReducer'
import { adminUserAnswerReducer } from './reducer/user-answer.reducer'
import { adminExamReducer } from './reducer/exam.reducer'

export const makeStore = () => {
    return configureStore({
        reducer: {
            groupQuestion: groupQuestionReducer,
            part: partReducer,
            common: commonReducer,
            userAnswer: adminUserAnswerReducer,
            adminExam: adminExamReducer,
        },
    })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
