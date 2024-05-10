export default interface IPart {
    id: string
    examDetailId: string

    answers: {
        [answerId: string]: string[]
    }
}