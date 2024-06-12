import axios from 'axios'
import { GroupQuestion } from '../../../../admin/parts/type/GroupQuestion.class'
import api from '../api'
import { tokenKey } from '@/src/utils/constanst/token'
import { getTokenKey } from '@/src/utils/shares/localStorage'

export const CreateGroupQuestion = (data: GroupQuestion) => {
    const token = localStorage.getItem(getTokenKey())
    console.log(token)
    return async (dispatch: any) => {
        try {
            const res = await axios({
                url: api.groupQuestions.common,
                method: 'POST',
                data: data,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
}
export const CreateManyGroupQuestion = (
    groupQuestions: GroupQuestion[],
    partId: string,
    successAction: () => void,
) => {
    const data = {
        partId: partId,
        groupQuestions: groupQuestions,
    }
    const token = localStorage.getItem(getTokenKey())
    return async (dispatch: any) => {
        try {
            const res = await axios({
                url: api.groupQuestions.manyGroupQuestions,
                method: 'POST',
                data: data,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            successAction()
        } catch (error) {
            console.log(error)
        }
    }
}
