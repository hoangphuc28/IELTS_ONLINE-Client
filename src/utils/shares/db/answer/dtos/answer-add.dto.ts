interface IAnswerAddDTO {
    examSkillDetailId: string // part instance id

    groupQuestionId: string

    id: string; // question id
    value: string[]; // answer value
    key?: string

    updatedAt?: number
}

export class AnswerAddDTO implements IAnswerAddDTO {
    examSkillDetailId: string
    id: string
    value: string[]
    key?: string
    updatedAt?: number
    groupQuestionId: string

    constructor(data: IAnswerAddDTO) {
        this.examSkillDetailId = data.examSkillDetailId
        this.id = data.id
        this.value = [...data.value]
        this.groupQuestionId = data.groupQuestionId
        this.key = this.generateKey()
        this.updatedAt = new Date().getTime()
    }

    generateKey(): string {
        return this.examSkillDetailId + '--' + this.groupQuestionId + '--' + this.id
    }

}