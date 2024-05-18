import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducers/userReducer'

const configStore = configureStore({
    reducer: {
        user: userReducer,
    },
})

export const storeShare = () => configStore

export type AppShareStore = ReturnType<typeof storeShare>

export type RootShareState = ReturnType<typeof configStore.getState>
export type AppShareDispatch = typeof configStore.dispatch
