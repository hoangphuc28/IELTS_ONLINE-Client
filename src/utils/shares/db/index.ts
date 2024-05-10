import Dexie, { Table, } from 'dexie'
import ISkillExam from '@utils/shares/db/answer/interfaces/ISkillExam'

export class IndexDBModelDexie extends Dexie {
    public answerExams!: DefinedTable<ISkillExam>

    constructor() {
        super(process.env.NEXT_PUBLIC_DB || 'ielts_online-client')
        this.version(1).stores({
            answerExams: 'examId'
        })
    }
}

interface DefinedTable<T = any, TKey = any, TInsertType = T> extends Table {

}

export const db = new IndexDBModelDexie()
