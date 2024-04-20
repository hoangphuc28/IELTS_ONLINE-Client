import IQuestion from "./IQuestion";

export default interface IGroup {
    type: string
    title: string
    description: string
    createdAt?: string
    updatedAt?: string
    questions: Array<IQuestion>
}