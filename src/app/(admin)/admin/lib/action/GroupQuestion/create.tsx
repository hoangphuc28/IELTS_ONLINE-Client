import axios from "axios";
import { GroupQuestion } from "../../../questions/type/GroupQuestion.class";
import api from "../api";
import { Part } from "../../../questions/type/Part.class";

export const CreateGroupQuestion = (data: GroupQuestion) => {
    return async (dispatch)  => {
        try {
            const res = await axios({
                url: api.createGroupQuestion,
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
    return async (dispatch)  => {
        try {
            const res = await axios({
                url: api.createManyGroupQuestion,
                method: 'POST',
                data: data
            })
            successAction()
        } catch (error) {
            console.log(error)
        }
    }
}