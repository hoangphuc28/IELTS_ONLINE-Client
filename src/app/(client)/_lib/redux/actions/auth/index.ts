import authService from "@/src/services/auth.service"
import { setUser } from "../../reducers/userReducer"

export function SignIn(data: any) {
    return async (dispatch: any) => {
        try {
            const userInfo = await authService.signIn(data)

            dispatch(setUser(userInfo))
        } catch (error) {
            throw error
        }
    }
}

export function SignUp(data: any) {
    return async (dispatch: any) => {
        try {
            const userInfo = await authService.signUpTempUser(data)

            dispatch(setUser(userInfo))
        } catch (error) {
            throw error
        }
    }
}