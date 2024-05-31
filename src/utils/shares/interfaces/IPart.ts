import IGroup from "./IGroup"

export default interface IPart {
    id: string // id exam skill detail
    publicId: number
    title: string
    content: string
    resource: string
    partNumber: string
    // examSkillDetailId: string
    // description: string
    createdAt: string
    updatedAt: string
    groupQuestions: IGroup[]
}
