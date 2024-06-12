// A.K => selectors

import { IExamState } from "../../reducers/exam.reducer";

export const Get = (exam: IExamState) => exam

export const GetExamSkills = (exam: IExamState) => exam.details

export const GetExams = (exam: IExamState) => exam.exams