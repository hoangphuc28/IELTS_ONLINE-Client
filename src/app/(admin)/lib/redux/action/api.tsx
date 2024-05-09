
const domain = 'http://localhost:3001'
const prefix = 'api'
const Part = {
    common: `${domain}/${prefix}/parts`,
}
const GroupQuestions = {
    common: `${domain}/${prefix}/group-questions`,
    manyGroupQuestions: `${domain}/${prefix}/group-questions/bulk`,
}
const api = {
    part: Part,
    groupQuestions: GroupQuestions

}

export default api