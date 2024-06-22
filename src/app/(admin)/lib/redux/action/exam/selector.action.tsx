import { IState } from '../../reducer/exam.reducer'

export const Get = (state: IState, code?: string) => {
    if (!code) return state.instance
    return state.listInstances.find((instance) => instance.code === code)
}
export const GetAll = (state: IState) => state.listInstances
