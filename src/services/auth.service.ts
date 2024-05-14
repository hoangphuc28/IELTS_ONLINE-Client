import { regexResponse } from "@utils/shares";
import BaseService from "@services/base";

class AuthService extends BaseService {
    constructor(url: string) {
        super(url)
    }

    async signIn(data: any) {
        return regexResponse(await this.api.post('/login', data))
    }

    async signUp(data: any) {
        return regexResponse(await this.api.post('/register', data))
    }

    async logout() {
        return regexResponse(await this.api.post('log-out'))
    }
}

const authService = new AuthService(process.env.NEXT_PUBLIC_API_URL + '/auth');

export default authService;