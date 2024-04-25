import IPart from "./IPart"

export default interface IMiniTest {
    time: string
    src?: string
    name: string
    parts: Array<IPart>
}