import { testSkill, testSkillType } from '@/src/utils/shares/interfaces/IMiniTest'
import {
    ITestSkill,
    addTestsSkillProgress,
    removeTestsSkillProgress,
} from '../../reducers/test-skill.reducer'

export const ToggleTestsSkillProgress = (skillsTest: string[], name: testSkillType) => {
    return (dispatch: any): any => {
        const value = testSkill[name]
        if (skillsTest.includes(value)) {
            dispatch(removeTestsSkillProgress(name))
            return
        }
        dispatch(addTestsSkillProgress(name))
        return
    }
}
