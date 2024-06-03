import IPart from "./IPart"

export enum testSkill {
    LISTENING = 'listening',
    READING = 'reading',
    WRITING = 'writing',
    SPEAKING = 'speaking'
}

export type testSkillType = keyof typeof testSkill

export default interface IMiniTest { //ISkillExamDetail[]
    id: string // id exam - real! not save skill exam id and part id, only save id exam, id exam skill detail
    time: string // total time of parts
    src?: string
    name: testSkill
    parts: Array<IPart>
}
