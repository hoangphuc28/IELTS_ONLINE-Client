import { HOST } from "@/src/utils/constanst/host"
import axios from "axios"

export const PostImage = (file: File) => {
    return async () => {
        try {
            console.log(file)
            if (!file) {
                window.alert('No file selected')
                throw new Error('No file selected')
            }
            const formData = new FormData()
            formData.append('file', file)
            const response = await axios.post(`${HOST}/api/resource/image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            console.log(response.data.filename)
            return {
                default: `${HOST}/${response.data.filename}`,
            }
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}