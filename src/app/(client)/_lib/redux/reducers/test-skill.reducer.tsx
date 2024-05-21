import { testSkill, testSkillType } from '@/src/utils/shares/interfaces/IMiniTest'
import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getFirstSkill } from '../actions/testSkill/get'

const initialState: ITestSkill = {
    testsSkillProgress: [],
}

export const testSkillSlice = createSlice({
    name: 'testSkill',
    initialState,
    reducers: {
        updateTestsSkillProgress(state: ITestSkill, action: PayloadAction<string[]>) {
            state.testsSkillProgress = action.payload
        },
        addTestsSkillProgress(state: ITestSkill, action: PayloadAction<any>) {
            const items: string[] = state.testsSkillProgress
            const name = action.payload
            const result = []
            for (const key in testSkill) {
                if (Object.prototype.hasOwnProperty.call(testSkill, key)) {
                    const k: testSkillType = key as testSkillType
                    const skill: string = testSkill[k]
                    if (k == name || items.includes(skill)) {
                        result.push(skill)
                    }
                }
            }

            state.testsSkillProgress = result
            return
        },
        removeTestsSkillProgress(state: ITestSkill, action: PayloadAction<testSkillType>) {
            const items: string[] = state.testsSkillProgress
            const name = action.payload
            const value = testSkill[name]
            const result = items.filter((item) => item != value)
            state.testsSkillProgress = result
        },
    },
    selectors: {
        selectFirstSkill: getFirstSkill,
    },
})

export const {
    updateTestsSkillProgress,
    // toggleTestsSkillProgress,
    addTestsSkillProgress,
    removeTestsSkillProgress,
} = testSkillSlice.actions

export const { selectFirstSkill } = testSkillSlice.selectors

export const testsSkillReducer = testSkillSlice.reducer

export interface ITestSkill {
    testsSkillProgress: Draft<string>[]
}
