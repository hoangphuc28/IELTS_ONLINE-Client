import { QuestionType } from "../../constants/questionType"
import { testSkillType } from "./IMiniTest"
import IQuestion from "./IQuestion"
import { userRole, userRoleType } from "./IUser"

export interface IUserAnswerFull {
    id: string
    timeStart: string
    submittedAt: string
    avgScore: number | null
    user: {
        id: string
        name: string
        mail: string
    }
    processes: IUserAnswerProcess[]
}

export interface IUser {
    id: string
    name: string
    mail: string
    role: userRoleType
}

export interface IUserAnswerProcess {
    id: string
    totalScore: number | null,
    skillExam: ISkillExam
    userAnswerDetails: IUserAnswerDetail[]
}

export interface IUserAnswerDetail {
    id: string
    score: number | null
    answer: IGroupAnswer[]
    feedback: string
    examDetail: IPartDetail
}

export interface IAnswerData {
    questionId: string;
    answer: string;
    isCorrect: boolean;
}

export interface IGroupAnswer {
    id: string;
    answers: IAnswerData[];
}

export interface IPartDetail {
    id: string
    part: IPartEntity
    skillExam: ISkillExam
}

export interface IPartEntity {
    id: string
    publicId: string
    title: string
    content: string
    resource: string
    partNumber: string
    groupQuestions: IGroupQuestion[]
    createdAt: string
    updatedAt: string
}

export interface IGroupQuestion {
    id: string
    instruction: string
    questionType: QuestionType
    data: IQuestion[]
}

export interface ISkillExam {
    id: string
    name: testSkillType
    exam: IExam
}

export interface IExam {
    id: string
    code: string
    name: string
    title: string
    src: string
    description: string
    time: string
    status: string
    createdAt?: string
    updatedAt?: string
}