import IAnswer from "./IAnswer"

export default interface IQuestion {
    id?: string
    question?: string
    // src: string
    createdAt?: string
    updatedAt?: string
    answers: IAnswer[]
}