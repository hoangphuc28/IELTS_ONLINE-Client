import axios from "axios"
import { Part } from "../../../../admin/parts/type/Part.class"


import api from "../api"
import { CreateManyGroupQuestion } from "../GroupQuestion/create"
import { setLoading } from "../../reducer/commonReducer"


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