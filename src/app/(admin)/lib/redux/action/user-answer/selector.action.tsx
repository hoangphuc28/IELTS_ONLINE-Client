import { IUserAnswerState } from '../../reducer/user-answer.reducer'

export const Get = (state: IUserAnswerState, index?: number) => {
    if (Number.isInteger(index)) {
        return state.listInstances[index!]
    }
    return state.instance
}

export const GetById = (state: IUserAnswerState, id?: string) => {
    if (!id) return state.instance
    return state.listInstances.find((instance) => instance.id === id)
}

export const GetList = (state: IUserAnswerState) => state.listInstances
