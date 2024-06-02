import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as Getter from '../actions/user-answer/selector.action'
import { testSkill, testSkillType } from '@/src/utils/shares/interfaces/IMiniTest'

const initialState: IUserAnswer = {
    id: '',
    timeStart: undefined,
    processes: [],
}

const reducers = {
    setter(state: IUserAnswer, action: PayloadAction<IUserAnswer>) {
        const data = action.payload
        state.id = data.id
        state.timeStart = data.timeStart
        // state.processes = data.processes
        // sort list skill
        const result: IUserAnswerProcess[] = []
        for (const key in testSkill) {
            if (Object.prototype.hasOwnProperty.call(testSkill, key)) {
                const k: testSkillType = key as testSkillType
                const skill: string = testSkill[k]
                const item = data.processes.find(
                    (item) => item.skillExam.name.toLowerCase() === skill.toLowerCase(),
                )
                if (!!item) {
                    result.push(item)
                    continue
                }
            }
        }

        state.processes = result
    },
}

export const userAnswerSlice = createSlice({
    name: 'userAnswer',
    initialState,
    reducers: reducers,
    selectors: Getter,
})

export const userAnswerActions = userAnswerSlice.actions
export const userAnswerSelectors = userAnswerSlice.selectors
export const userAnswerReducers = userAnswerSlice.reducer

export interface IUserAnswer {
    id: string
    timeStart?: Draft<Date>
    processes: Draft<IUserAnswerProcess>[]
}

export interface IUserAnswerProcess {
    id: string
    skillExam: {
        id: string
        name: string
    }
}
