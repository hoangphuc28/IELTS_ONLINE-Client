import IAnswer from "./IAnswer";
import IQuestion from "./IQuestion";

export default interface IGroup {
    id: string
    questionType: string
    instruction: string
    createdAt?: string
    updatedAt?: string
    data: Array<IQuestion>
    answers: IAnswer[]
}