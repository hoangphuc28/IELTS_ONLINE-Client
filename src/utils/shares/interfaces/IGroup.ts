import IAnswer from "./IAnswer";
import IQuestion from "./IQuestion";

export default interface IGroup {
    id: string
    type: string
    title: string
    description: string
    createdAt?: string
    updatedAt?: string
    questions: Array<IQuestion>
    answers?: IAnswer[]
}