interface IAnswerAddDTO {
    examSkillDetailId: string // part instance id

    groupQuestionId: string

    questionId: string; // question id
    answer: string; // answer value
    key?: string

    updatedAt?: number
    index?: number
}

export class AnswerAddDTO implements IAnswerAddDTO {
    examSkillDetailId: string
    questionId: string
    answer: string
    key?: string
    updatedAt: number = new Date().getTime()
    groupQuestionId: string
    index: number = -1

    constructor(data: IAnswerAddDTO) {
        this.examSkillDetailId = data.examSkillDetailId
        this.questionId = data.questionId
        this.answer = data.answer.trim()
        this.groupQuestionId = data.groupQuestionId
        this.updatedAt = new Date().getTime()

        if (data.index != undefined && data.index >= 0) {
            this.index = data.index
        }
        this.key = this.generateKey()
    }

    generateKey(): string {
        return this.examSkillDetailId + '--' + this.groupQuestionId + '--' + this.questionId + '--' + this.index.toString()
    }

}