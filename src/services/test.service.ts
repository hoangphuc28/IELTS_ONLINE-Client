import { regexResponse } from "@utils/shares";
import BaseService from "@services/base";

class TestService extends BaseService {
    constructor(url: string) {
        super(url)
    }

    async search(code: string) {
        return regexResponse(await this.api.get('/' + code))
    }
}

const testService = new TestService(process.env.NEXT_PUBLIC_API_URL + '/exam-library');

export default testService;