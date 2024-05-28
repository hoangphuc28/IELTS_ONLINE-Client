import IGroup from "@utils/shares/interfaces/IGroup"
import IAnswer from "../interfaces/IAnswer"
import IQuestion from "../interfaces/IQuestion"

export class GroupDTO implements IGroup {
    id: string
    questionType: string
    instruction: string
    createdAt?: string | undefined
    updatedAt?: string | undefined
    data: IQuestion[]
    answers: IAnswer[] = []

    constructor(data: IGroup) {
        this.id = data.id
        this.questionType = data.questionType
        this.instruction = data.instruction
        if (data.createdAt) {
            this.createdAt = data.createdAt
        }
        if (data.updatedAt) {
            this.updatedAt = data.updatedAt
        }
        this.data = JSON.parse(JSON.stringify(data.data))
        if (data.answers) {
            this.answers = [...data.answers]
        }
    }

}