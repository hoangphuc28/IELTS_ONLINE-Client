import { HOST } from "@/src/utils/constanst/host"
import axios from "axios"

export const PostAudio = (file: File) => {
    return async () => {
        try {
            if (!file) {
                window.alert('No file selected')
                throw new Error('No file selected')
            }
            const formData = new FormData()
            formData.append('audio', file)
            const response = await axios.post(`${HOST}/api/resource/audio`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            return response.data.filename
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}