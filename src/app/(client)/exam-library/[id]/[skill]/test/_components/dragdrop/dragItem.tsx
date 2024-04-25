import IAnswer from '@/src/app/(client)/exam-library/interfaces/IAnswer'
import { DragEvent } from 'react'
import { drag } from '@clientExamLibrary/[id]/[skill]/utils/dragAndDrop'

export default function ComponentDragItem({ groupId, data }: { groupId: string; data: IAnswer }) {
    return (
        <div
            data-group-id={groupId}
            data-id={data.id}
            draggable="true"
            onDragStart={(e) => drag(e)}
            className=""
        >
            {data.content}
        </div>
    )
}
