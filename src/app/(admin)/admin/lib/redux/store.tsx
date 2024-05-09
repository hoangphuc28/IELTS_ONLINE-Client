import { configureStore } from '@reduxjs/toolkit'
import groupQuestionReducer from './reducer/groupQuestionReducer'
import partReducer from './reducer/partReducer'

export const makeStore = () => {
  return configureStore({
    reducer: {
      groupQuestion: groupQuestionReducer,
      part: partReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']