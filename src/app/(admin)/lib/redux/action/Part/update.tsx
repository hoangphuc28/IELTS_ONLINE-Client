import axios from "axios";
import { Part } from "../../../../admin/parts/type/Part.class";
import api from "../api";
import { UploadManyGroupQuestion } from "../GroupQuestion/upload";
import { Dispatch } from "@reduxjs/toolkit";
import { tokenKey } from "@/src/utils/constanst/token";


export const UpdatePart = (data: Part, successAction: () => void) => {
    const token = localStorage.getItem(tokenKey)
    return async (dispatch: any) => {
        try {
            const res = await axios({
                url: `${api.part.common}/${data.id}`,
                method: 'PUT',
                data: data,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(UploadManyGroupQuestion(data.groupQuestions, res.data.id, successAction))
        } catch (error) {
            console.log(error)
        }
    }
}