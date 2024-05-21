import { regexResponse } from "@utils/shares";
import BaseService from "@services/base";
import { getTokenKey } from "../utils/shares/localStoreage";

class AuthService extends BaseService {
    constructor(url: string) {
        super(url)
    }

    async signIn(data: any) {
        const uri = '/login'
        try {
            const result = regexResponse(await this.api.post(uri, data))
            const { accessToken, ...otherData } = result.data
            localStorage.setItem(getTokenKey(), accessToken)

            return otherData.userInfo
        } catch (error: any) {
            throw error.response.data
        }
    }

    async signUpTempUser(data: any) {
        const uri = '/register/tempUser'
        try {
            const result = regexResponse(await this.api.post(uri, data))
            const { accessToken, ...userInfo } = result.data
            localStorage.setItem(getTokenKey(), accessToken)

            return userInfo
        } catch (error: any) {
            throw error.response.data
        }
    }

    async logout() {
        return regexResponse(await this.api.get('logOut'))
    }
}

const authService = new AuthService(process.env.NEXT_PUBLIC_API_URL + '/auth');

export default authService;