import IMiniTest from "@utils/shares/interfaces/IMiniTest"
import ITest from "@utils/shares/interfaces/ITest"

import { db } from '../../index'

class TestModel {
    constructor() {
    }

    getTable() {
        return db.answerExams
    }
}

export default new TestModel