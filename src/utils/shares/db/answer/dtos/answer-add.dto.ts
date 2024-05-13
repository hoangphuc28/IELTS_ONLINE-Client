interface IAnswerAddDTO {
    examSkillDetailId: string

    id: string;
    value: string[];
    key?: string

    updatedAt?: number
}

export class AnswerAddDTO implements IAnswerAddDTO {
    examSkillDetailId: string
    id: string
    value: string[]
    key?: string
    updatedAt?: number

    constructor(data: IAnswerAddDTO) {
        this.examSkillDetailId = data.examSkillDetailId
        this.id = data.id
        this.value = [...data.value]
        this.key = this.examSkillDetailId + '--' + this.id
        this.updatedAt = new Date().getTime()
    }

}