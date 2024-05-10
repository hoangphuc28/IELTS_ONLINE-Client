import ComponentDragItem from './dragItem'
import IAnswer from '@/src/utils/shares/interfaces/IAnswer'
import { allowDrop, drop } from '@clientExamLibrary/[id]/[skill]/utils/dragAndDrop'

export default function ComponentListDrag({ groupId, data }: { groupId: string; data: IAnswer[] }) {
    return (
        <section className="relative border border-dashed border-black px-2 rounded overflow-hidden">
            <div className="flex flex-col gap-2">
                {data.map((data, answerIndex) => (
                    <div
                        key={'drag-item-temp-' + answerIndex}
                        className="text-transparent select-none"
                    >
                        TEMP
                    </div>
                ))}
            </div>

            <section
                onDrop={(e) => drop(e)}
                onDragOver={(e) => allowDrop(e)}
                data-group-id={groupId}
                className="absolute top-0 left-0 bottom-0 right-0 px-1 flex flex-col gap-2"
            >
                {data.map((answer, answerIndex) => (
                    <ComponentDragItem
                        groupId={groupId}
                        data={answer}
                        key={'temp-drag-answer-' + answerIndex}
                    />
                ))}
            </section>
        </section>
    )
}
