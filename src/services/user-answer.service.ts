import { regexResponse } from "../utils/shares";
import { AnswerAddDTO } from "../utils/shares/db/answer/dtos/answer-add.dto";
import BaseService from "./base";

class UserAnswerService extends BaseService {
    constructor(url: string) {
        super(url)
    }
}

export const userAnswerService = new UserAnswerService(process.env.NEXT_PUBLIC_API_URL + '/user-answer')