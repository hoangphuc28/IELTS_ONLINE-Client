import { DragEvent } from 'react'
import IAnswer from '../../../interfaces/IAnswer'

export function allowDrop(ev: DragEvent<HTMLElement>) {
    ev.preventDefault()
}
export function drop(ev: DragEvent<HTMLElement>, transferData?: IAnswer[]) {
    ev.preventDefault()
    ev.stopPropagation()

    // #region get data drop container
    let dropItem = ev.currentTarget as HTMLElement
    let dropContainer = ev.currentTarget as HTMLElement
    if (!dropContainer) return
    // when drag item "A", it is dragged to another drag item "B", then ev.target -> that another drag item, current dropContainer is parent of item "A"
    // => change dropContainer from parent element of item "A" to parent element of item "B"
    if (ev.target && dropContainer != ev.target) {
        dropContainer = (ev.target as HTMLElement).parentElement as HTMLElement
        if (!dropContainer) return
    }
    const dropElementGroupId = dropContainer.dataset['groupId']
    if (!dropElementGroupId) return
    // #endregion get data drop container

    // #region get data drag item
    const dragItemId = ev.dataTransfer.getData('dragDataId')
    const dragItemGroupId = ev.dataTransfer.getData('dragGroupId')
    const dragItemDOM = document.querySelector(`[data-item-id="${dragItemId}"]`) as HTMLElement
    const dragContainer = dragItemDOM.parentElement
    if (!dragItemDOM) return
    // #endregion get data drag item

    // #region handle drop
    // group different => no drop
    if (dropElementGroupId !== dragItemGroupId) return

    // #region clear input value before finish drop
    const maxChild_Of_DragContainer = getMaxChild(dragContainer)
    if (Number.isFinite(maxChild_Of_DragContainer)) {
        clearInputValue(dragContainer)
    }
    // #endregion clear input value before finish drop

    const input = dropContainer.querySelector('input')
    const maxChild = getMaxChild(dropContainer)
    if (Array.from(dropContainer.children).length >= maxChild) {
        if (!input) return
        // restore last child
        const swapItem = handleSwapChild(dropContainer, dragContainer) as HTMLElement | null
        if (swapItem) {
            // if dragContainer is another drop container => change input in drop container
            if (dragContainer) {
                const inputInDragItem = dragContainer.querySelector('input') as HTMLInputElement | null
                handleChangeInputValue(inputInDragItem, swapItem.innerText, transferData)
            }
        }
    }
    // if drop container exist input element, change value that input
    handleChangeInputValue(input, dragItemDOM.innerText, transferData)
    dropContainer.appendChild(dragItemDOM)
    // #endregion handle drop
}

function getMaxChild(source: HTMLElement | null): number {
    if (!source) return Number.POSITIVE_INFINITY
    return Number.parseInt(source.dataset.dropMaxChild || Number.POSITIVE_INFINITY.toString())
}

function handleChangeInputValue(input: HTMLInputElement | null, value: string, transferData?: IAnswer[]) {
    if (!input || !transferData || transferData.length === 0) return
    const answerChoice = transferData.find((e) => e.content === value)
    if (answerChoice) {
        input.value = answerChoice.id
    }
}

function handleSwapChild(sourceDOM?: HTMLElement | null, targetDOM?: HTMLElement | null): Element | null {
    if (!sourceDOM || !targetDOM) return null
    const children = sourceDOM.children
    const lastChild = children.item(children.length - 1) as HTMLElement | null
    if (lastChild) {
        targetDOM.appendChild(lastChild)
    }
    return lastChild
}

function clearInputValue(container: HTMLElement | null) {
    if (!container) return
    const input = container.querySelector('input')
    if (!input) return
    input.value = ''
}

export function drag(e: DragEvent<HTMLElement>) {
    // e.stopPropagation()
    const dragElement = e.currentTarget as HTMLElement
    const dragElementId = dragElement.dataset.itemId
    const dragElementGroupId = dragElement.dataset.groupId
    if (!dragElementId || !dragElementGroupId) return
    e.dataTransfer.setData('dragDataId', dragElementId)
    e.dataTransfer.setData('dragGroupId', dragElementGroupId)
}
