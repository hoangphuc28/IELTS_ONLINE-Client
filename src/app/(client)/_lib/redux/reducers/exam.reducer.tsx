import ITest from '@/src/utils/shares/interfaces/ITest'
import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as Selectors from '../actions/exam/selector.action'
import * as Getters from '../actions/exam/get.action'
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
    skillsExam: [],
    exams: [],
}

const reducers = {
    setter(state: IExamState, action: PayloadAction<IExamState>) {
        const data = action.payload
        state.code = data.code
        state.name = data.name
        state.description = data.description
        state.time = data.time
        state.status = data.status
        state.skillsExam = data.skillsExam
    },
    setterExams(state: IExamState, action: PayloadAction<ITest[]>) {
        state.exams = action.payload
    },
}

export const examSlice = createSlice({
    name: 'exam',
    initialState,
    reducers: reducers,
    selectors: Selectors,
})

export const examActions = { ...examSlice.actions, ...Getters }
export const examSelectors = examSlice.selectors
export const examReducers = examSlice.reducer

export interface IExamState extends ITest {
    skillsExam: Draft<IMiniTest>[]
    exams: Draft<ITest>[]
}
