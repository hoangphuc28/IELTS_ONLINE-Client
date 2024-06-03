import IMiniTest, { testSkill, testSkillType } from '@/src/utils/shares/interfaces/IMiniTest'
import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as Selector from '../actions/testSkill/selector.action'
import * as Getter from '../actions/testSkill/get.action'
import * as Updater from '../actions/testSkill/update.action'

export interface ITestSkillProcess {
    // ITestSkill
    id: string
    name: string
}

export interface ITestSkill {
    targetSkillExam: Draft<IMiniTest>
    testsSkillProgress: Draft<ITestSkillProcess>[]
    startIndexesEveryPart: Draft<number>[]
}

const initialState: ITestSkill = {
    targetSkillExam: {
        id: '',
        name: testSkill.LISTENING,
        parts: [],
        time: '',
        src: '',
    },
    testsSkillProgress: [],
    startIndexesEveryPart: [],
}

const reducers = {
    updateProgress(state: ITestSkill, action: PayloadAction<ITestSkillProcess[]>) {
        state.testsSkillProgress = action.payload
    },
    resetProcess(state: ITestSkill) {
        state.testsSkillProgress = []
    },
    addProgress(state: ITestSkill, action: PayloadAction<ITestSkillProcess>) {
        const items: ITestSkillProcess[] = state.testsSkillProgress
        const newItem = action.payload
        const result: ITestSkillProcess[] = []
        for (const key in testSkill) {
            if (Object.prototype.hasOwnProperty.call(testSkill, key)) {
                const k: testSkillType = key as testSkillType
                const skill: string = testSkill[k]
                const item = items.find((item) => item.name === skill)
                if (skill == newItem.name) {
                    result.push(newItem)
                    continue
                }
                if (!!item) {
                    result.push(item)
                    continue
                }
            }
        }

        state.testsSkillProgress = result
        return
    },
    removeProgress(state: ITestSkill, action: PayloadAction<string>) {
        const items = state.testsSkillProgress
        const id = action.payload
        // const value = testSkill[name]
        const result = items.filter((item) => item.id != id)
        state.testsSkillProgress = result
    },
    setStartIndexEveryPart(state: ITestSkill, action: PayloadAction<number[]>) {
        state.startIndexesEveryPart = action.payload
    },
    setTargetSkillExam(state: ITestSkill, action: PayloadAction<IMiniTest>) {
        state.targetSkillExam = action.payload
    },
}

export const testSkillSlice = createSlice({
    name: 'testSkill',
    initialState,
    reducers: reducers,
    selectors: { ...Selector },
})

export const testSkillActions = { ...testSkillSlice.actions, ...Updater, ...Getter }

export const testSkillSelectors = testSkillSlice.selectors

export const testsSkillReducer = testSkillSlice.reducer
