import axios from "axios";
import { Part } from "../../../../admin/parts/type/Part.class";
import api from "../api";
import { UploadManyGroupQuestion } from "../GroupQuestion/upload";
import { Dispatch } from "@reduxjs/toolkit";


export const UpdatePart = (data: Part, successAction: () => void) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                url: `${api.part.common}/${data.id}`,
                method: 'PUT',
                data: data
            })
            dispatch(UploadManyGroupQuestion(data.groupQuestions, res.data.id, successAction))
        } catch (error) {
            console.log(error)
        }
    }
}