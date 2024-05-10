import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import groupQuestionReducer from './reducer/groupQuestionReducer'
import partReducer from './reducer/partReducer'
import commonReducer from './reducer/commonReducer'

export const makeStore = () => {
  return configureStore({
    reducer: {
      groupQuestion: groupQuestionReducer,
      part: partReducer,
      common: commonReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']