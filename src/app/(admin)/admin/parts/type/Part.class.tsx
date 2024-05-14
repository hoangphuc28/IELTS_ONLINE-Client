import { GroupQuestion } from './GroupQuestion.class'
import { SkillEnum, PartEnum } from './enum'

export class Part {
    id: string = ''
    publicId: string = ''
    title: string = ''
    content: string = ''
    resource: string = ''
    skill: SkillEnum = SkillEnum.LISTENING
    partNumber: PartEnum = PartEnum.Part1
    groupQuestions: GroupQuestion[] = []
    createdAt: Date = new Date()
    updatedAt: Date = new Date
}
