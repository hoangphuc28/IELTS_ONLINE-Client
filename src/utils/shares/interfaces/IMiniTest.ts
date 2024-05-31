import IPart from "./IPart"

export enum testSkill {
    LISTENING = 'listening',
    READING = 'reading',
    WRITING = 'writing',
    SPEAKING = 'speaking'
}

export type testSkillType = keyof typeof testSkill

export default interface IMiniTest { //ISkillExamDetail[]
    id: string // id exam
    time: string // total time of parts
    src?: string
    name: testSkill
    parts: Array<IPart>
}
