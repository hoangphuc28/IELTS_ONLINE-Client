import IPart from "./IPart"

export default interface ISkillExam {
    id: string

    idExam: string
    name: string

    parts: IPart[]
}

// skillExam: {
//     id,
//     idExam,
//     name,
//     parts: [
//         {
//             id,
//             examDetailId: string
//             answers: {
//                 [answerId: string]: string[]
//             }
//         }
//     ]
// }
