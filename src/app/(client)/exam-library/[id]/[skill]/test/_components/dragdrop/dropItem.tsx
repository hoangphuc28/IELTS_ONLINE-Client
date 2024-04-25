import IQuestion from '@/src/app/(client)/exam-library/interfaces/IQuestion'
import { allowDrop, drop } from '@clientExamLibrary/[id]/[skill]/utils/dragAndDrop'

export default function ComponentDropItem({ groupId, data }: { groupId: string; data: IQuestion }) {
    return (
        <section className="flex items-center gap-2">
            <section className="relative">
                <span className="text-transparent select-none">TEMP</span>
                <div
                    onDrop={(e) => drop(e, 2, data.answers)}
                    onDragOver={(e) => allowDrop(e)}
                    data-group-id={groupId}
                    className="absolute top-0 left-0 bottom-0 right-0 px-1 border border-dashed border-black rounded overflow-hidden"
                >
                    <input className="hidden" type="text" name={data.id} />
                </div>
            </section>
            <span>{data.content}</span>
        </section>
    )
}
