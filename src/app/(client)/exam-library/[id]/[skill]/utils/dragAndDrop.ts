import { AnswerAddDTO } from '@/src/utils/shares/db/answer/dtos/answer-add.dto'
import { match } from '@/src/utils/shares/db/answer/services/answers/match.service'
import { DragEvent } from 'react'

export function allowDrop(ev: DragEvent<HTMLElement>) {
    ev.preventDefault()
}
export async function drop(ev: DragEvent<HTMLElement>) {
    ev.preventDefault()
    ev.stopPropagation()

    // #region get data drop container
    const dropItem = ev.target as HTMLElement | null
    let eventCurrentTarget = ev.currentTarget as HTMLElement | null
    if (!eventCurrentTarget) return
    // when drag item "A", it is dragged to another drag item "B", then ev.target -> that another drag item, current dropContainer is parent of item "A"
    // => change dropContainer from parent element of item "A" to parent element of item "B"
    if (dropItem && eventCurrentTarget != dropItem) {
        eventCurrentTarget = dropItem.parentElement as HTMLElement
        if (!eventCurrentTarget) return
    }
    const dropContainer = eventCurrentTarget
    const dropElementGroupId = dropContainer.dataset['groupId']
    if (!dropElementGroupId) return
    // #endregion get data drop container

    // #region get data drag item
    const dragItemId = ev.dataTransfer.getData('dragDataId')
    const dragItemGroupId = ev.dataTransfer.getData('dragGroupId')
    const dragItemDOM = document.querySelector(`[data-item-id="${dragItemId}"]`) as HTMLElement | null
    if (!dragItemDOM) return
    const dragContainer = dragItemDOM.parentElement
    // #endregion get data drag item

    // #region handle drop
    // group different => no drop
    if (dropElementGroupId !== dragItemGroupId) return

    // #region clear input value before finish drop
    const maxChild_Of_DragContainer = getMaxChild(dragContainer)
    // console.log(dropItem, dropContainer, maxChild_Of_DragContainer)
    if (Number.isFinite(maxChild_Of_DragContainer)) {
        await clearInputValue(dragContainer)
    }
    // #endregion clear input value before finish drop

    const input = dropContainer.querySelector('input')
    const maxChild = getMaxChild(dropContainer)
    // console.log(Array.from(dropContainer.children).length >= maxChild, maxChild)
    if (Array.from(dropContainer.children).length >= maxChild) {
        if (!input) return
        // restore last child
        const swapItem = handleSwapChild(dropContainer, dragContainer) as HTMLElement | null
        if (swapItem) {
            // if dragContainer is another drop container => change input in drop container
            if (dragContainer) {
                const inputInDragItem = dragContainer.querySelector('input') as HTMLInputElement | null
                await handleChangeInputValue(inputInDragItem, swapItem)
            }
        }
    }
    // if drop container exist input element, change value that input
    await handleChangeInputValue(input, dragItemDOM)
    dropContainer.appendChild(dragItemDOM)
    // #endregion handle drop
    return input
}

function getMaxChild(source: HTMLElement | null): number {
    if (!source) return Number.POSITIVE_INFINITY
    const dropMaxChild = source.dataset.dropMaxChild
    if (!dropMaxChild) return Number.POSITIVE_INFINITY
    return Number.parseInt(dropMaxChild)
}

async function handleChangeInputValue(input: HTMLInputElement | null, answerDOM: HTMLElement) {
    if (!input) return
    // const value = answerDOM.innerText
    const value = getAnswerId(answerDOM)
    // const answerId = getAnswerId(answerDOM)
    const questionId = input.name
    const examSkillDetailId = input.dataset.examSkillDetailId
    const groupId = input.dataset.groupId
    if (!questionId || !examSkillDetailId || !groupId) return
    const data = new AnswerAddDTO({ examSkillDetailId, groupQuestionId: groupId, questionId, answer: value })
    await match.addAnswer(data)
    input.value = value
    // setAnswerToInput(input, answerId)
}
// async function handleChangeInputValue(input: HTMLInputElement | null, value: string) {
//     if (!input) return
//     input.value = value
//     const questionId = input.name
//     const examSkillDetailId = input.dataset.examSkillDetailId
//     const groupId = input.dataset.groupId
//     if (!questionId || !examSkillDetailId || !groupId) return
//     const data = new AnswerAddDTO({ examSkillDetailId, groupQuestionId: groupId, id: questionId, value: [value] })
//     await match.addAnswer(data)
// }

function handleSwapChild(sourceDOM?: HTMLElement | null, targetDOM?: HTMLElement | null): Element | null {
    if (!sourceDOM || !targetDOM) return null
    const children = sourceDOM.children
    const lastChild = children.item(children.length - 1) as HTMLElement | null
    if (lastChild) {
        targetDOM.appendChild(lastChild)
    }
    return lastChild
}

async function clearInputValue(container: HTMLElement | null) {
    if (!container) return
    const input = container.querySelector('input')
    if (!input) return
    const questionId = input.name
    const examSkillDetailId = input.dataset.examSkillDetailId
    const groupId = input.dataset.groupId
    if (!questionId || !examSkillDetailId || !groupId) return
    await match.removeAnswer(new AnswerAddDTO({ examSkillDetailId, groupQuestionId: groupId, questionId, answer: '' }).generateKey())
    input.value = ''
    // setAnswerToInput(input, '')
}

function setAnswerToInput(input: HTMLInputElement, answerId: string) {
    input.setAttribute('data-item-id', answerId)
}
function getAnswerId(answerDOM: HTMLElement) {
    return answerDOM.dataset.itemId || ''
}
// async function clearInputValue(container: HTMLElement | null) {
//     if (!container) return
//     const input = container.querySelector('input')
//     if (!input) return
//     const questionId = input.name
//     const examSkillDetailId = input.dataset.examSkillDetailId
//     const groupId = input.dataset.groupId
//     if (!questionId || !examSkillDetailId || !groupId) return
//     await match.removeAnswer(new AnswerAddDTO({ examSkillDetailId, groupQuestionId: groupId, id: questionId, value: [''] }).generateKey())
//     input.value = ''
// }

export function drag(e: DragEvent<HTMLElement>) {
    // e.stopPropagation()
    const dragElement = e.currentTarget as HTMLElement
    const dragElementId = dragElement.dataset.itemId
    const dragElementGroupId = dragElement.dataset.groupId
    if (!dragElementId || !dragElementGroupId) return
    e.dataTransfer.setData('dragDataId', dragElementId)
    e.dataTransfer.setData('dragGroupId', dragElementGroupId)
}
