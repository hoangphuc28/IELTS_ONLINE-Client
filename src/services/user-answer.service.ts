import { regexResponse } from "../utils/shares";
import BaseService from "./base";

class UserAnswerService extends BaseService {
    constructor(url: string) {
        super(url)
    }

    async getRecent(codeExam: string) {
        return regexResponse(await this.api.get(`/${codeExam}/recent`))
    }
}

export const userAnswerService = new UserAnswerService(process.env.NEXT_PUBLIC_API_URL + '/user-answer')