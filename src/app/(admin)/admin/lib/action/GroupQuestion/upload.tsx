import axios from "axios"
import api from "../api"
import { GroupQuestion } from "../../../questions/type/GroupQuestion.class"
import { Dispatch } from "@reduxjs/toolkit"

export const UploadManyGroupQuestion = (groupQuestions: GroupQuestion[], partId: string, successAction: () => void) => {
    const data = {
        partId: partId,
        groupQuestions: groupQuestions
    }
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios({
                url: api.updatemanyGroupQuestion,
                method: 'PUT',
                data: data
            })
            successAction()
        } catch (error) {
            console.log(error)
        }
    }
}