import Dexie, { Table, } from 'dexie'
import { IAnswerForPart } from '../db/answer/interfaces/IAnswerForPart'

export class IndexDBModelDexie extends Dexie {
    private answersExam!: DefinedTable<IAnswerForPart>

    constructor() {
        super(process.env.NEXT_PUBLIC_DB || 'ielts_online-client')
        this.version(1).stores({
            answersExam: 'key'
        })
    }

    getAnswersExam() {
        return this.answersExam
    }
}

interface DefinedTable<T = any, TKey = any, TInsertType = T> extends Table {
}

export const db = new IndexDBModelDexie()
