import IMiniTest, { testSkill, testSkillType } from '@/src/utils/shares/interfaces/IMiniTest'
import { ITestSkill, ITestSkillProcess, testSkillActions } from '../../reducers/test-skill.reducer'
import { useAppShareDispatch, useAppShareSelector } from '../../hooks'

export const ToggleTestsSkillProgress = (name: string) => {
    return (dispatch: any, getState: any): any => {
        const skillsTestProcess: ITestSkillProcess[] = getState().testsSkill.testsSkillProgress
        const listSkillTest: IMiniTest[] = getState().exam.details
        const skillDetail = listSkillTest.find((skill) => skill.name === name)
        if (!skillDetail) return
        const itemProcess = skillsTestProcess.find((item) => item.id === skillDetail.id)
        if (!!itemProcess) {
            dispatch(testSkillActions.removeProgress(skillDetail.id))
            return
        }
        dispatch(testSkillActions.addProgress({ id: skillDetail.id, name }))
        return
    }
}
