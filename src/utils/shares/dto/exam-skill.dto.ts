import { testSkill } from "../interfaces/IMiniTest"
import IPart from "../interfaces/IPart"

export interface IExamSkill {
    id: string
    name: testSkill
    details: IExamSkillDetail[]
}

export interface IExamSkillDetail { // exam skill detail
    id: string
    time: string
    part: IPart // part
}