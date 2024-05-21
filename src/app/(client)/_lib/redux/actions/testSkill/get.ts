import { ITestSkill } from "../../reducers/test-skill.reducer"

export const getFirstSkill = (testsSkill: ITestSkill) => {
    const data = testsSkill.testsSkillProgress
    if (data.length === 0) return null
    return data[0]
}