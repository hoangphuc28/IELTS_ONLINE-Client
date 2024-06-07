
import { userAnswerDetailService } from '@/src/services/user-answer-detail.service'
import IGroup from '../../../interfaces/IGroup'
import IMiniTest from '../../../interfaces/IMiniTest'
import { db } from '../../index'
import { AnswerAddDTO } from '../dtos/answer-add.dto'
import { IReqCreateAnswerDetail, IReqGroupAnswer, IReqGroupExamSkillDetail } from '../dtos/IReqCreateAnswerDetail'

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
            const data: AnswerAddDTO[] = (await this.getTable().toArray())
            const reqData: IReqCreateAnswerDetail = {
                processId,
                answersOfParts: []
            }
            for (const id of idSkillExamDetails) {
                const partDetail: IReqGroupExamSkillDetail = {
                    examSkillDetailId: id,
                    groups: []
                }
                const listAnswersSortByGroupId = data.sort((beforeCollect: AnswerAddDTO, afterCollect: AnswerAddDTO) => {
                    return beforeCollect.groupQuestionId > afterCollect.groupQuestionId ? 1 : -1
                })
                partDetail.groups = data.reduce((acc: IReqGroupAnswer[], collect: AnswerAddDTO) => {
                    const lastElement = acc.at(-1)
                    if (!lastElement || (lastElement && lastElement.id != collect.examSkillDetailId)) {
                        acc.push({
                            id: collect.examSkillDetailId,
                            answers: []
                        })
                    }

                    acc.at(-1)?.answers.push(collect)
                    return acc
                }, [])

                reqData.answersOfParts.push(partDetail)
            }

            console.log('data req: ', reqData)
            const result = await userAnswerDetailService.submitExam(reqData)
            console.log('submit exam result: ', result)
        } catch (error) {
            throw error
        }
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