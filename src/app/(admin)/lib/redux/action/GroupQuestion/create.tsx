import axios from "axios";
import { GroupQuestion } from "../../../../admin/parts/type/GroupQuestion.class";
import api from "../api";

export const CreateGroupQuestion = (data: GroupQuestion) => {
    return async (dispatch: any)  => {
        try {
            const res = await axios({
                url: api.groupQuestions.common,
                method: 'POST',
                data: data
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
}
export const CreateManyGroupQuestion = (groupQuestions: GroupQuestion[], partId: string, successAction: () => void) => {
    const data = {
        partId: partId,
        groupQuestions: groupQuestions
    }
    return async (dispatch: any)  => {
        try {
            const res = await axios({
                url: api.groupQuestions.manyGroupQuestions,
                method: 'POST',
                data: data
            })
            successAction()
        } catch (error) {
            console.log(error)
        }
    }
}