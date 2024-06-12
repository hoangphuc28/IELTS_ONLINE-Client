import axios from "axios"
import { Part } from "../../../../admin/parts/type/Part.class"


import api from "../api"
import { CreateManyGroupQuestion } from "../GroupQuestion/create"
import { setLoading } from "../../reducer/commonReducer"
import { HOST } from "@/src/utils/constanst/host"
import { tokenKey } from "@/src/utils/constanst/token"


export const CreatePart = (data: Part, successAction: () => void) => {
    const token = localStorage.getItem(tokenKey)
    return async (dispatch: any) => {
        try {
            const res = await axios({
                url: api.part.common,
                method: "POST",
                data: data,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
             dispatch(CreateManyGroupQuestion(data.groupQuestions, res.data.id, successAction))
        }
        catch (err) {
            console.log(err)
        }

    }
}