import IPart from "./IPart"

export enum testSkill {
    LISTENING = 'listening',
    READING = 'reading',
    WRITING = 'writing',
    SPEAKING = 'speaking'
}

export type testSkillType = keyof typeof testSkill

export default interface IMiniTest {
    id: string
    time: string
    src?: string
    name: testSkill
    parts: Array<IPart>
}
