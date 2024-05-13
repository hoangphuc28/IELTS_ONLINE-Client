
import { db } from '../../index'
import { AnswerAddDTO } from '../dtos/answer-add.dto'

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