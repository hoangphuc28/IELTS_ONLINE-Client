import data from "@/src/app/(client)/exam-library/[id]/data"
import axios from "axios"
import api from "../api"
import { setList } from "../../reducer/groupQuestionReducer"

export const GetGroupQuestion = () => {
    return async (dispatch)  => {
        try {
            const res = await axios({
                url: api.groupQuestion,
                method: 'GET',
            })
            dispatch(setList(res.data))
        } catch (error) {
            console.log(error)
        }
    }
}