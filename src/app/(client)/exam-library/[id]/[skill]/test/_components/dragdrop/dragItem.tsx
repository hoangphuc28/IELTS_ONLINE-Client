import IAnswer from '@/src/utils/shares/interfaces/IAnswer'
import { DragEvent } from 'react'
import { drag } from '@clientExamLibrary/[id]/[skill]/utils/dragAndDrop'

export default function ComponentDragItem({ groupId, data }: { groupId: string; data: IAnswer }) {
    return (
        <section
            data-group-id={groupId}
            data-item-id={data.id}
            draggable="true"
            onDragStart={(e) => drag(e)}
            className=""
            dangerouslySetInnerHTML={{ __html: data.content }}
        ></section>
    )
}
