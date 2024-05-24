import ITest from '@/src/utils/shares/interfaces/ITest'
import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as Getter from '../actions/exam/get.action'
import IMiniTest from '@/src/utils/shares/interfaces/IMiniTest'

const initialState: IExamState = {
    code: '',
    name: '',
    title: '',
    src: '',
    description: '',
    time: '',
    status: '',
    details: [],
}

const reducers = {
    setter(state: IExamState, action: PayloadAction<IExamState>) {
        const data = action.payload
        state.code = data.code
        state.name = data.name
        state.description = data.description
        state.time = data.time
        state.status = data.status
        state.details = data.details
    },
}

export const examSlice = createSlice({
    name: 'exam',
    initialState,
    reducers: reducers,
    selectors: Getter,
})

export const examActions = examSlice.actions
export const examSelectors = examSlice.selectors
export const examReducers = examSlice.reducer

export interface IExamState extends ITest {
    details: Draft<IMiniTest>[]
}
