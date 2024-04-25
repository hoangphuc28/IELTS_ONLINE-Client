import { DragEvent } from 'react'
import IAnswer from '../../../interfaces/IAnswer'

export function allowDrop(ev: DragEvent<HTMLElement>) {
    ev.preventDefault()
}
export function drop(ev: DragEvent<HTMLElement>, maxChild?: number, transferData?: IAnswer[]) {
    ev.preventDefault()
    ev.stopPropagation()

    // #region get data drop container
    const dropElement = ev.currentTarget as HTMLElement
    const dropElementGroupId = dropElement.dataset['groupId']
    if (!dropElementGroupId) return
    // #endregion get data drop container

    // #region get data drag item
    const dragItemId = ev.dataTransfer.getData('dragDataId')
    const dragItemGroupId = ev.dataTransfer.getData('dragGroupId')
    const dragItemDOM = document.querySelector(`[data-id="${dragItemId}"]`) as HTMLElement
    if (!dragItemDOM) return
    // #endregion get data drag item

    // #region handle drop
    // group different => no drop
    if (dropElementGroupId !== dragItemGroupId) return
    if (maxChild && Array.from(dropElement.children).length >= maxChild) return
    const input = dropElement.querySelector('input')
    // if drop container exist input element, change value that input
    if (input && transferData && transferData.length > 0) {
        const dragValue = dragItemDOM.innerText
        const answerChoice = transferData.find((e) => e.content === dragValue)
        if (answerChoice) {
            input.value = answerChoice.id
        }
    }
    dropElement.appendChild(dragItemDOM)
    // #endregion handle drop
}

export function drag(e: DragEvent<HTMLElement>) {
    // e.stopPropagation()
    const dragElement = e.currentTarget as HTMLElement
    const dragElementId = dragElement.dataset.id
    const dragElementGroupId = dragElement.dataset.groupId
    if (!dragElementId || !dragElementGroupId) return
    e.dataTransfer.setData('dragDataId', dragElementId)
    e.dataTransfer.setData('dragGroupId', dragElementGroupId)
}
