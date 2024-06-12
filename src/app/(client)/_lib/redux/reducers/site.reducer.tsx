import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as Selector from '../actions/site/selector.action'
import * as SocketAction from '../actions/site/socket.action'

export enum ESocketStatus {
    none = 'none',
    connecting = 'connecting',
    connected = 'connected',
    connectionFailed = 'connectionFailed',
    disconnecting = 'disconnecting',
    disconnected = 'disconnected',
    disconnectedFailed = 'disconnectedFailed',
}

const initialState: ISiteState = {
    connectionStatus: ESocketStatus.none,
}

const reducers = {
    setSocketStatus(state: ISiteState, action: PayloadAction<ESocketStatus>) {
        state.connectionStatus = action.payload
    },
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
    connectionStatus: ESocketStatus
}
