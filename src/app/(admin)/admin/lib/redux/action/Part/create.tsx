import axios from "axios"
import { Part } from "../../../../parts/type/Part.class.jsx"

import { CreateManyGroupQuestion } from "../GroupQuestion/create"
import api from "../api"


export const CreatePart = (data: Part, successAction: () => void) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                url: api.part.common,
                method: "POST",
                data: data
            })
             dispatch(CreateManyGroupQuestion(data.groupQuestions, res.data.id, successAction))
        }
        catch (err) {
            console.log(err)
        }


    }
}