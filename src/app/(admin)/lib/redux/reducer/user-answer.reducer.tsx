import { IUserAnswerFull } from '@/src/utils/shares/interfaces/IUserAnswerFull'
import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as Selectors from '../action/user-answer/selector.action'
import * as Getters from '../action/user-answer/get.action'

export interface IUserAnswerState {
    instance: Draft<IUserAnswerFull> | null
    listInstances: Draft<IUserAnswerFull>[]
}

const initialState: IUserAnswerState = {
    instance: null,
    listInstances: [],
}

const reducers = {
    setter(state: IUserAnswerState, action: PayloadAction<IUserAnswerFull>) {
        state.instance = action.payload
    },
    setterFromId(state: IUserAnswerState, action: PayloadAction<string>) {
        const data = state.listInstances.find((instance) => instance.id === action.payload)
        if (data) {
            state.instance = data
        }
    },
    setList(state: IUserAnswerState, action: PayloadAction<IUserAnswerFull[]>) {
        state.listInstances = action.payload
    },
}

const userAnswerSlice = createSlice({
    name: 'userAnswer',
    initialState: initialState,
    reducers,
    selectors: Selectors,
})

export const adminUserAnswerSelector = userAnswerSlice.selectors
export const adminUserAnswerAction = { ...userAnswerSlice.actions, ...Getters }
export const adminUserAnswerReducer = userAnswerSlice.reducer
