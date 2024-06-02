import { testSkill } from '@/src/utils/shares/interfaces/IMiniTest'
import { IUserAnswer, IUserAnswerProcess } from '../../reducers/user-exam.reducer'

export const GetCurrentSkill = (state: IUserAnswer, name: string) => {
    // console.log('[SELECTOR] ', state, name)
    return state.processes.find(
        (process) => process.skillExam.name.toLowerCase() == name.toLowerCase(),
    ) as IUserAnswerProcess | undefined
}

export const GetNextSkill = (state: IUserAnswer, name: string) => {
    const currentSkillIndex = state.processes.findIndex(
        (process) => process.skillExam.name.toLowerCase() == name.toLowerCase(),
    )
    if (currentSkillIndex === -1 || currentSkillIndex === state.processes.length - 1) return null
    return state.processes[currentSkillIndex + 1] as IUserAnswerProcess
}

export const GetExamNotDone = (state: IUserAnswer, currentExam: string) => {
    const currentSkillIndex = state.processes.findIndex(
        (process) => process.skillExam.name.toLowerCase() == currentExam.toLowerCase(),
    )
    if (currentSkillIndex === -1 || currentSkillIndex === state.processes.length - 1) return null
    const result = state.processes.filter((process, index) => index > currentSkillIndex)
    return result as IUserAnswerProcess[]
}
