import BaseService from "./base";

class UserAnswerService extends BaseService {
    constructor(url: string) {
        super(url)
    }


}

export const userAnswerService = new UserAnswerService(process.env.NEXT_PUBLIC_API_URL + '/user-answer')