import data from "@/src/app/(client)/exam-library/[id]/data"
import axios from "axios"
import { setList } from "../../reducer/groupQuestionReducer"
import api from "../api"

export const GetGroupQuestion = () => {
    return async (dispatch)  => {
        try {
            const res = await axios({
                url: api.groupQuestions.common,
                method: 'GET',
            })
            dispatch(setList(res.data))
        } catch (error) {
            console.log(error)
        }
    }
}