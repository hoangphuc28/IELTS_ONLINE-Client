import skillExamService from '@/src/services/skill-exam.service'
import { IExamSkill, IExamSkillDetail } from '@/src/utils/shares/dto/exam-skill.dto'
import IMiniTest from '@/src/utils/shares/interfaces/IMiniTest'
import IPart from '@/src/utils/shares/interfaces/IPart'
import { testSkillActions } from '../../reducers/test-skill.reducer'
import IGroup from '@/src/utils/shares/interfaces/IGroup'
import { CalculateIndexEveryPart } from './update.action'

export function GetSkillExamData(idSkillExam: string) {
    return async (dispatch: any) => {
        const targetSkill: IExamSkill = await skillExamService.get(idSkillExam)
        const data: IMiniTest = convertDataSkillExamDetail(targetSkill)
        dispatch(testSkillActions.setTargetSkillExam(data))

        dispatch(CalculateIndexEveryPart(data.parts))
    }

    function convertDataSkillExamDetail(data: IExamSkill): IMiniTest {
        return {
            id: data.id,
            name: data.name,
            parts: convertExamSkillDetailToPartClient(data.details),
            time: calcTotalTime(data.details),
            src: '',
        }

        function convertExamSkillDetailToPartClient(details: IExamSkillDetail[]): IPart[] {
            return details.map((item: IExamSkillDetail) => ({ ...item.part, id: item.id }))
        }

        function calcTotalTime(details: IExamSkillDetail[]): string {
            return data.details
                .reduce((totalTime, detail) => {
                    return totalTime + new Date(detail.time).getTime()
                }, 0)
                .toString()
        }
    }
}
