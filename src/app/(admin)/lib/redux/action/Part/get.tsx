import axios from 'axios'
import api from '../api'
import { setPartEdit, setPartList } from '../../reducer/partReducer'
import { PaginationInterface } from '../../../type/pagination'

export const GetAllParts = (pagination: PaginationInterface) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                url: `${api.part.common}?search=${pagination.search}&page=${pagination.page}&limit=${pagination.limit}&partnumber=${pagination.filter.partNumber}&skill=${pagination.filter.skill}`,
                method: 'GET',
            })
            dispatch(setPartList(res.data.results))
        } catch (error) {
            console.log(error)
        }
    }
}
export const GetPart = (partId: string) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                url: `${api.part.common}/${partId}`,
                method: 'GET',
            })
            dispatch(setPartEdit(res.data))
        } catch (err) {
            console.log(err)
        }
    }
}
