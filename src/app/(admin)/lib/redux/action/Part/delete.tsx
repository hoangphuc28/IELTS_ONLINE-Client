import axios from "axios"
import api from "../api"
import { setPartList } from "../../reducer/partReducer"

export const DeletePart = (partId: string) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                url: `${api.part.common}/${partId}`,
                method: 'DELETE'
            })
            dispatch(setPartList(res.data))

        } catch (error) {
            console.log(error)
        }
    }
}