import { IUserState, setUser } from "../../reducers/userReducer"

export function SetUser(user: IUserState) {
    return async (dispatch: any) => {
        try {
            dispatch(setUser(user))
        } catch (error) {
            console.log(error)
        }
    }
}