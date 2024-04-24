import IGroup from '@/src/app/(client)/exam-library/interfaces/IGroup'

export default function ComponentListQuestionContent({ data }: { data: IGroup }) {
    if (data.type === 'choice') return <ComponentQuestionChoice />
    if (data.type === 'multiChoice') return <ComponentQuestionMultiChoice />
    if (data.type === 'dragDrop') return <ComponentQuestionDragDrop />
    if (data.type === 'shortAnswer') return <ComponentQuestionShortAnswer />
}

function ComponentQuestionChoice() {
    return <></>
}
function ComponentQuestionMultiChoice() {
    return <></>
}
function ComponentQuestionDragDrop() {
    return <></>
}
function ComponentQuestionShortAnswer() {
    return <></>
}
