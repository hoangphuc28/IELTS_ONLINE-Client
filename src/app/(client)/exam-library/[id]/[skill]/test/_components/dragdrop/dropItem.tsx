import IQuestion from '@/src/utils/shares/interfaces/IQuestion'
import { allowDrop, drop } from '@clientExamLibrary/[id]/[skill]/utils/dragAndDrop'
import { DragEvent, useEffect } from 'react'

export default function ComponentDropItem({ groupId, data }: { groupId: string; data: IQuestion }) {
    return (
        <section className="flex items-center gap-2">
            <section className="relative inline-block select-none min-w-[100px] min-h-[28px]">
                {/* <span className="block text-transparent"></span> */}
                <div
                    onDrop={(e) => handleDrop(e)}
                    onDragOver={(e) => allowDrop(e)}
                    data-group-id={groupId}
                    data-drop-max-child={2}
                    className="absolute top-0 left-0 bottom-0 right-0 px-1 border border-dashed border-black rounded overflow-hidden"
                >
                    <input className="hidden" type="text" name={data.id} />
                </div>
            </section>
            <span dangerouslySetInnerHTML={{ __html: data.content }}></span>
        </section>
    )
}
export const ComponentStringDropItem = ({
    groupId,
    data,
}: {
    groupId: string
    data: IQuestion
}) => {
    useEffect(() => {
        const input = document.querySelector(`input[name="${data.id}"]`) as HTMLInputElement | null
        if (!input) return
        const parentInput = input.parentElement as HTMLElement | null
        if (!parentInput) return
        parentInput.ondrop = (e) => {
            handleDrop(e as any)
        }
        parentInput.ondragover = (e) => {
            allowDrop(e as any)
        }
    }, [])

    return `
        <section class="inline-flex items-center">
            <section class="relative inline-block select-none min-w-[100px] min-h-[24px]">
                <div
                    data-group-id="${groupId}"
                    data-drop-max-child="2"
                    class="absolute top-0 left-0 bottom-0 right-0 px-1 border border-dashed border-black rounded overflow-hidden"
                >
                    <input class="hidden" type="text" name="${data.id}" />
                </div>
            </section>
        </section>
    `
}

export function handleDrop(e: DragEvent<HTMLElement>) {
    drop(e)

    const container = e.currentTarget as HTMLElement | null
    if (!container) return
    const input = container.querySelector('input') as HTMLInputElement | null
    if (!input) return

    const questionId = input.name
    if (!questionId) return
    const answerId = input.value
    if (!answerId) return
}
