import { Dexie, DexieError } from 'dexie'
import { BaseService } from "@utils/shares/db/answer/services/exam.service"
import { AnswerAddDTO } from '@utils/shares/db/answer/dtos/answer-add.dto'

class Match extends BaseService {
    async addAnswer(data: AnswerAddDTO): Promise<any> {
        try {
            const id = await this.getTable().add(data)
        } catch (error) {
            // console.log(error)
            const err: DexieError = error as any
            console.log(err.name, Dexie.errnames.Constraint, err.name === Dexie.errnames.Constraint)
            if (err.name === Dexie.errnames.Constraint) {
                try {
                    return await this.updateAnswer(data)
                } catch (error) {
                    throw error
                }
            }
        }
    }

    async updateAnswer(data: AnswerAddDTO) {
        return await this.getTable().update(data.key, (prevData: AnswerAddDTO) => {
            prevData.value = [...data.value,]
            prevData.updatedAt = data.updatedAt

            return true
        })
    }

    async removeAnswer(id: string) {
        return await this.getTable().delete(id)
    }
}

export const match = new Match()