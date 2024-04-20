import IAnswer from "./IAnswer"

export default interface IQuestion {
    content: string
    src: string
    createdAt?: string
    updatedAt?: string
    answers: Array<IAnswer>
}