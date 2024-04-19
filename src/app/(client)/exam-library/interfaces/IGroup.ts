import IQuestion from "./IQuestion";

export default interface IGroup {
    description: string;
    createdAt: string
    updatedAt: string
    questions: Array<IQuestion>
}