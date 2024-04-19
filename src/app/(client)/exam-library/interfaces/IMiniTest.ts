import IPart from "./IPart"

export default interface IMiniTest {
    time: string
    name: string
    parts: Array<IPart>
}