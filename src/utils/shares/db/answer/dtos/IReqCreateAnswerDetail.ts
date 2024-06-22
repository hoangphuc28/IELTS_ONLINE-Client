import { AnswerAddDTO } from "./answer-add.dto";

export class ReqCreateAnswerDetail implements IReqCreateAnswerDetail {
    processId: string;
    answersOfParts: IReqGroupExamSkillDetail[];
    constructor(processId: string) {
        this.processId = processId
        this.answersOfParts = []
    }
}

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