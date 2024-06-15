import { QuestionType } from "../../constants/questionType"
import { testSkillType } from "./IMiniTest"
import IQuestion from "./IQuestion"

export interface IUserAnswerFull {
    id: string
    timeStart: Date
    submittedAt: Date
    user: {
        id: string
        name: string
    }
    processes: IUserAnswerProcess[]
}

export interface IUserAnswerProcess {
    id: string
    totalScore: number | null,
    userAnswerDetails: IUserAnswerDetail[]
}

export interface IUserAnswerDetail {
    id: string
    score: number | null
    answer: IUserAnswerDetailItem[]
    feedback: string
    examDetail: IPartDetail
}

export interface IUserAnswerDetailItem {
    groupQuestionId: string;
    questionId: string;
    answer: string;
    isCorrect: boolean;
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
}