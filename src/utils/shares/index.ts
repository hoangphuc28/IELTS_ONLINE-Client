import { AxiosResponse } from "axios"

export function regexResponse(res: AxiosResponse<any, any>) {
    if (res.status < 400) {
        return res.data
    }
    return null
}
