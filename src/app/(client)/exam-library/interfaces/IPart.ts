import IGroup from "./IGroup"

export default interface IPart {
    id: string
    description: string
    src: string
    time: string
    createdAt: string
    updatedAt: string
    groups: Array<IGroup>
}
