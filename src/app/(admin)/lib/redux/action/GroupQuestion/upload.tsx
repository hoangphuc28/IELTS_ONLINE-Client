import axios from "axios"
import api from "../api"
import { GroupQuestion } from "../../../../admin/parts/type/GroupQuestion.class"
import { Dispatch } from "@reduxjs/toolkit"
import { tokenKey } from "@/src/utils/constanst/token"

export const UploadManyGroupQuestion = (groupQuestions: GroupQuestion[], partId: string, successAction: () => void) => {
    const data = {
        partId: partId,
        groupQuestions: groupQuestions
    }
    return async (dispatch: Dispatch) => {
        console.log(data)
    const token = localStorage.getItem(tokenKey)
        try {
            const res = await axios({
                url: api.groupQuestions.manyGroupQuestions,
                method: 'PUT',
                data: data,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            successAction()
        } catch (error) {
            console.log(error)
        }
    }
}