import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as Creator from '@/src/app/(client)/_lib/redux/actions/user-answer-detail/create.action'

const initialState: IUserAnswerDetail = {}

const reducers = {
    setter(state: IUserAnswerDetail, action: PayloadAction<IUserAnswerDetail>) {},
}

export const userAnswerDetailSlice = createSlice({
    name: 'userAnswerDetail',
    initialState,
    reducers: reducers,
})

export const userAnswerDetailActions = { ...userAnswerDetailSlice.actions, ...Creator }
export const userAnswerDetailSelectors = userAnswerDetailSlice.selectors
export const userAnswerDetailReducers = userAnswerDetailSlice.reducer

export interface IUserAnswerDetail {}
