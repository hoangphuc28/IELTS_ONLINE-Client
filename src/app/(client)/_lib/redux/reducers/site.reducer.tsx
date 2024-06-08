import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as Selector from '../actions/site/selector.action'
import * as SocketAction from '../actions/site/socket.action'

const initialState: ISiteState = {
    socket: undefined,
}

const reducers = {
    setSocket(state: ISiteState, action: PayloadAction<any>) {},
}

const siteSlice = createSlice({
    initialState,
    name: 'site',
    reducers,
    selectors: { ...Selector },
})

export const siteAction = { ...siteSlice.actions, ...SocketAction }
export const siteSelector = siteSlice.selectors
export const siteReducer = siteSlice.reducer

export interface ISiteState {
    socket: any
}
