import axios from "axios"
import api from "../api"
import { setPartEdit, setPartList } from "../../reducer/partReducer"

export const GetAllParts = () => {
    return async (dispatch) => {
        try {
            const res = await axios({
                url: api.part,
                method: 'GET'
            })
            dispatch(setPartList(res.data))
        } catch (error) {
            console.log(error)
        }
    }
}
export const GetPart = (partId: string) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                url: `${api.part}/${partId}`,
                method: 'GET',
            })
            dispatch(setPartEdit(res.data))
        } catch (err) {
            console.log(err)
        }
    }
}