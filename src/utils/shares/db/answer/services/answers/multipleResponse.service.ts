import { Dexie, DexieError } from 'dexie'
import { BaseService } from "@utils/shares/db/answer/services/exam.service"
import { AnswerAddDTO } from '@utils/shares/db/answer/dtos/answer-add.dto'

class MultipleResponse extends BaseService {
    async addAnswer(data: AnswerAddDTO): Promise<any> {
        try {
            const id = await this.getTable().add(data)
        } catch (error) {
            // console.log(error)
            const err: DexieError = error as any
            if (err.name === Dexie.errnames.Constraint) {
                this.updateAnswer(data)
            }
        }
    }

    async updateAnswer(data: AnswerAddDTO) {
        await this.getTable().update(data.key, (prevData: AnswerAddDTO) => {
            prevData.value = [...prevData.value, ...data.value]
            prevData.updatedAt = data.updatedAt

            return true
        })
    }

    async removeAnswersItem(data: AnswerAddDTO) {
        try {
            await this.getTable().update(data.key, (prevData: AnswerAddDTO) => {
                prevData.value = prevData.value.filter((answer: string) => answer !== data.value[0])
                return true
            })
        } catch (error) {
            console.log(error)
        }
        return
    }

}

export const multipleResponse = new MultipleResponse()