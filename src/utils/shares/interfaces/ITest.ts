import IMiniTest from "./IMiniTest"

export default interface ITest {
    code: string
    name: string
    title: string
    src: string
    description: string
    time: string
    status: string
    hasPassword: boolean
    createdAt?: string
    updatedAt?: string
    details: Array<IMiniTest>
}