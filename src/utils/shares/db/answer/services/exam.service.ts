
import { userAnswerDetailService } from '@/src/services/user-answer-detail.service'
import IGroup from '../../../interfaces/IGroup'
import IMiniTest from '../../../interfaces/IMiniTest'
import { db } from '../../index'
import { AnswerAddDTO } from '../dtos/answer-add.dto'
import { IReqCreateAnswerDetail, IReqGroupAnswer, IReqGroupExamSkillDetail, ReqCreateAnswerDetail } from '../dtos/IReqCreateAnswerDetail'

export abstract class BaseService {
    getTable() {
        return db.getAnswersExam()
    }

    async test() {
        try {
            const id = await this.getTable().add({ id: 'testId' })
            console.log('New exam: ', id)
        } catch (error) {
            console.log(error)
        }
    }

    testExtend() {
        const childOne = new ChildOne()
        const childTwo = new ChildTwo()
        logName(childOne)
        logName(childTwo)
    }

    abstract addAnswer(data: AnswerAddDTO): Promise<any>
    abstract updateAnswer(data: AnswerAddDTO): Promise<any>
}

export class Service extends BaseService {
    updateAnswer(): Promise<any> {
        throw new Error('Method not implemented.')
    }
    async addAnswer(): Promise<any> {
    }

    async submit(idSkillExamDetails: string[], processId: string) {
        try {
            const answerTime = Number.parseInt(process.env.NEXT_PUBLIC_TIME_ANSWER_CORRECT || '14400000')
            this.getTable().filter(
                (item: AnswerAddDTO) =>
                    item.updatedAt - new Date().getTime() > answerTime).delete()
            const reqData: IReqCreateAnswerDetail = new ReqCreateAnswerDetail(processId)
            const data: AnswerAddDTO[] = (await this.getTable().filter(
                (item: AnswerAddDTO) =>
                    item.updatedAt - new Date().getTime() <= answerTime &&
                    !!idSkillExamDetails.find(id => id === item.examSkillDetailId)).toArray())
            const listAnswersSortByPart = this.sortByPartDetailId(data)
            const listPart = this.groupByPartDetail(listAnswersSortByPart)
            for (const part of listPart) {
                const listAnswersSortByGroup = this.sortByGroup(part.data)
                const groups = this.groupByGroup(listAnswersSortByGroup)
                reqData.answersOfParts.push({
                    examSkillDetailId: part.examSkillDetailId,
                    groups
                })
            }

            console.log('data req: ', reqData)
            const result = await userAnswerDetailService.submitExam(reqData)
            console.log('submit exam result: ', result)
        } catch (error) {
            throw error
        }
    }

    sortByPartDetailId(data: AnswerAddDTO[]) {
        return data.sort((beforeCollect: AnswerAddDTO, afterCollect: AnswerAddDTO) => {
            return beforeCollect.examSkillDetailId > afterCollect.examSkillDetailId ? 1 : -1
        })
    }

    groupByPartDetail(data: AnswerAddDTO[]) {
        return data.reduce((acc: { examSkillDetailId: string, data: AnswerAddDTO[] }[], collect: AnswerAddDTO) => {
            const lastElement = acc.at(-1)
            if (!lastElement || (lastElement && lastElement.examSkillDetailId != collect.examSkillDetailId)) {
                const part: { examSkillDetailId: string, data: AnswerAddDTO[] } = {
                    examSkillDetailId: collect.examSkillDetailId,
                    data: []
                }
                acc.push(part)
            }

            acc.at(-1)?.data.push(collect)
            return acc
        }, [])
    }

    sortByGroup(data: AnswerAddDTO[]) {
        return data.sort((beforeCollect: AnswerAddDTO, afterCollect: AnswerAddDTO) => {
            return beforeCollect.groupQuestionId > afterCollect.groupQuestionId ? 1 : -1
        })
    }

    groupByGroup(data: AnswerAddDTO[]): IReqGroupAnswer[] {
        return data.reduce((acc: IReqGroupAnswer[], answer: AnswerAddDTO) => {
            const lastElement = acc.at(-1)
            if (!lastElement || (lastElement && lastElement.id !== answer.groupQuestionId)) {
                const group: IReqGroupAnswer = {
                    id: answer.groupQuestionId,
                    answers: []
                }
                acc.push(group)
            }

            acc.at(-1)?.answers.push(answer)

            return acc
        }, [])

    }
}

export const ExamService = new Service

// #region Test
abstract class Parent {
    name: string
    constructor() {
        this.name = 'Parent'
    }

    abstract getName(): string
}

class ChildOne extends Parent {
    constructor() {
        super()
        this.name = 'ChildOne'
    }

    getName(): string {
        return this.name
    }
}

class ChildTwo extends Parent {
    constructor() {
        super()
        this.name = 'ChildTwo'
    }

    getName(): string {
        return this.name
    }

    getEditedName() {
        return this.name + '-Hello'
    }
}

function logName(data: Parent) {
    console.log(data.getName())
}
// #endregion Test