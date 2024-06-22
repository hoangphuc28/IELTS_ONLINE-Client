import { IExam } from '@/src/utils/shares/interfaces/IUserAnswerFull'
import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as Selectors from '../action/exam/selector.action'
import * as Getters from '../action/exam/get.action'

export interface IState {
    instance: Draft<IExam> | null
    listInstances: Draft<IExam>[]
}

const initialState: IState = {
    instance: null,
    listInstances: [],
}

const reducers = {
    setter(state: IState, action: PayloadAction<IExam>) {
        state.instance = action.payload
    },
    setterAll(state: IState, action: PayloadAction<IExam[]>) {
        state.listInstances = action.payload
    },
}

const examSlice = createSlice({
    name: 'adminExam',
    initialState,
    reducers,
    selectors: Selectors,
})

export const adminExamAction = { ...examSlice.actions, ...Getters }
export const adminExamSelector = examSlice.selectors
export const adminExamReducer = examSlice.reducer
