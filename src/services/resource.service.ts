import { regexResponse } from "../utils/shares";
import BaseService from "./base";

class ResourceService extends BaseService {
    constructor(url: string) {
        super(url)
    }

    async uploadAudio(file: File) {
        try {
            const formData = new FormData()
            formData.append('audio', file)
            return (regexResponse(await this.api.post('/audio', formData, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            }))).filename
        } catch (error) {
            alert('No audio found. Please try again!')
            console.log(error)
            throw error
        }
    }
}

export const resourceServiceAPI = new ResourceService(process.env.NEXT_PUBLIC_API_URL + '/resource')
