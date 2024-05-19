import IPart from "./IPart"

export enum testSkill {
    LISTENING = 'listening',
    READING = 'reading',
    WRITING = 'writing',
    SPEAKING = 'speaking'
}

export default interface IMiniTest {
    time: string
    src?: string
    name: string
    parts: Array<IPart>
}