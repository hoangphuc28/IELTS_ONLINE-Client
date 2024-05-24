import { configureStore } from '@reduxjs/toolkit'
import * as reducers from './states'

export const configStore = configureStore({
    reducer: reducers,
})

export const storeShare = () => configStore

export type AppShareStore = ReturnType<typeof storeShare>

export type RootShareState = ReturnType<typeof configStore.getState>
export type AppShareDispatch = typeof configStore.dispatch
