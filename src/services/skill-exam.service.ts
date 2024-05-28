import { regexResponse } from "@utils/shares";
import BaseService from "@services/base";
import { getTokenKey } from "../utils/shares/localStorage";

class SkillExamService extends BaseService {
    constructor(url: string) {
        super(url)
    }
}

const skillExamService = new SkillExamService(process.env.NEXT_PUBLIC_API_URL + '/skill-exam');

export default skillExamService;