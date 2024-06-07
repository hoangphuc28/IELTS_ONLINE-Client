import { regexResponse } from "../utils/shares";
import { IReqCreateAnswerDetail } from "../utils/shares/db/answer/dtos/IReqCreateAnswerDetail";
import BaseService from "./base";

class UserAnswerDetailService extends BaseService {
    constructor(url: string) {
        super(url)
    }

    async submitExam(data: IReqCreateAnswerDetail) {
        return (await regexResponse(await this.api.post(`/submitExam`, data)))
    }
}

export const userAnswerDetailService = new UserAnswerDetailService(process.env.NEXT_PUBLIC_API_URL + '/user-answer-detail')