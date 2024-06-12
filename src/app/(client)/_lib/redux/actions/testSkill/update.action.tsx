import IMiniTest, { testSkill, testSkillType } from '@/src/utils/shares/interfaces/IMiniTest'
import { ITestSkill, ITestSkillProcess, testSkillActions } from '../../reducers/test-skill.reducer'
import { useAppShareDispatch, useAppShareSelector } from '../../hooks'
import IPart from '@/src/utils/shares/interfaces/IPart'
import IGroup from '@/src/utils/shares/interfaces/IGroup'
import { AppShareGetState } from '../../store'

export const ToggleTestsSkillProgress = (name: string) => {
    return (dispatch: any, getState: AppShareGetState): any => {
        const skillsTestProcess: ITestSkillProcess[] = getState().testSkill.testsSkillProgress
        const listSkillTest: IMiniTest[] = getState().exam.skillsExam
        const skillDetail = listSkillTest.find(
            (skill) => skill.name.toLowerCase() === name.toLowerCase(),
        )
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

export const CalculateIndexEveryPart = (parts: IPart[]) => {
    return (dispatch: any) => {
        const startIndexesEveryPart: number[] = []
        calcStartIndexEveryPart(startIndexesEveryPart, parts)
        console.log('[Start indexes] ', startIndexesEveryPart)
        dispatch(testSkillActions.setStartIndexEveryPart(startIndexesEveryPart))
    }

    function calcStartIndexEveryPart(result: number[], parts: IPart[]) {
        let totalQuestions = 1
        // console.log('[DATA PART] ', parts)
        parts.forEach((part: IPart, index: number, baseData: IPart[]) => {
            if (index > 0) {
                totalQuestions += baseData[index - 1].groupQuestions.reduce(
                    (acc: number, group: IGroup, i: number) => {
                        group.data.forEach((question, index) => {
                            if (!!question.question && question.question.length > 0) {
                                acc += 1
                            }
                        })
                        return acc
                    },
                    0,
                )
            }
            result.push(totalQuestions)
        })
    }
}
