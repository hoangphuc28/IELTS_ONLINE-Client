import { ITestSkill } from "../../reducers/test-skill.reducer"
import { useAppShareSelector } from '../../hooks';

export const GetFirstSkill = (testsSkill: ITestSkill) => {
    const data = testsSkill.testsSkillProgress
    if (data.length === 0) return null
    const idTestFirstSkill = data[0]
    // const listSkill = useAppShareSelector((state) => state.exam.details)
    // const testSkill = listSkill.find(testSkill => testSkill.id === idTestFirstSkill)
    // if (!testSkill) return null
    return idTestFirstSkill
}
