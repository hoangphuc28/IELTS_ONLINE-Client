import IMiniTest from "./IMiniTest"

export default interface ITest {
    code: string
    name: string
    title: string
    src: string
    description: string
    time: string
    status: string
    password: string
    createdAt: string
    updatedAt: string
    details: Array<IMiniTest>
}