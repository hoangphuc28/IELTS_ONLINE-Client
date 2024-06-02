import { IUserAnswer } from '../../reducers/user-exam.reducer'

export const GetCurrentSkill = (state: IUserAnswer, name: string) => {
    // console.log('[SELECTOR] ', state, name)
    return state.processes.find(
        (process) => process.skillExam.name.toLowerCase() == name.toLowerCase(),
    )
}
