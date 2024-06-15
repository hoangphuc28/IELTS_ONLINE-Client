import { IUserAnswerState } from '../../reducer/user-answer.reducer'

export const Get = (state: IUserAnswerState) => state.instance

export const GetList = (state: IUserAnswerState) => state.listInstances
