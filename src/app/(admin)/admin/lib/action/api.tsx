class Api {
    head: string =  'http://localhost:3001/api';
    part: string = `${this.head}/parts`
    updatePart: string = `${this.head}/parts`
    groupQuestion = `${this.head}/group-questions`
    createGroupQuestion = `${this.head}/group-questions`
    createManyGroupQuestion = `${this.head}/group-questions/bulk`
    updatemanyGroupQuestion = `${this.head}/group-questions/bulk`


}
const api = new Api()
export default api