import IUser from '@/src/utils/shares/interfaces/IUser'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IUserState = {
    id: '',
    name: '',
    mail: '',
    role: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state: IUserState, action: PayloadAction<IUserState>) {
            console.log('[setUser]: ', action.payload)
            state.id = action.payload.id
            state.name = action.payload.name
            state.mail = action.payload.mail
            state.role = action.payload.role
        },
    },
})

export const { setUser } = userSlice.actions

export const userAction = userSlice.actions

export const userReducer = userSlice.reducer

export interface IUserState extends IUser {}
