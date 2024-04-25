import IAnswer from '@/src/app/(client)/exam-library/interfaces/IAnswer'
import { DragEvent } from 'react'

export default function ComponentDragItem({ data }: { data: IAnswer }) {
    return (
        <div data-id={data.id} draggable="true" onDragStart={(e) => drag(e)} className="bg-red-500">
            {data.content}
        </div>
    )

    function drag(ev: DragEvent<HTMLElement>) {
        const target = ev.target as HTMLElement
        const dragElementId = target.dataset.id
        if (!dragElementId) return
        ev.dataTransfer.setData('dragDataId', dragElementId)
    }
}
