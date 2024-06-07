import { AnswerAddDTO } from "./answer-add.dto";

export interface IReqCreateAnswerDetail {
    processId: string,
    answersOfParts: IReqGroupExamSkillDetail[],
}

export interface IReqGroupExamSkillDetail {
    examSkillDetailId: string
    groups: IReqGroupAnswer[]
}

export interface IReqGroupAnswer {
    id: string
    answers: AnswerAddDTO[]
}