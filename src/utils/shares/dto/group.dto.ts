import IGroup from "@utils/shares/interfaces/IGroup"
import IAnswer from "../interfaces/IAnswer"
import IQuestion from "../interfaces/IQuestion"

export class GroupDTO implements IGroup {
    id: string
    type: string
    title: string
    description: string
    createdAt?: string | undefined
    updatedAt?: string | undefined
    questions: IQuestion[]
    answers?: IAnswer[] | undefined

    constructor(data: IGroup) {
        this.id = data.id
        this.type = data.type
        this.title = data.title
        this.description = data.description
        if (data.createdAt) {
            this.createdAt = data.createdAt
        }
        if (data.updatedAt) {
            this.updatedAt = data.updatedAt
        }
        this.questions = JSON.parse(JSON.stringify(data.questions))
        this.answers = data.answers ? JSON.parse(JSON.stringify(data.answers)) : undefined
    }

}