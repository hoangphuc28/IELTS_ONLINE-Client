import { AnswerAddDTO } from '@/src/utils/shares/db/answer/dtos/answer-add.dto'
import { match } from '@/src/utils/shares/db/answer/services/answers/match.service'
import IQuestion from '@/src/utils/shares/interfaces/IQuestion'
import { allowDrop, drop } from '@clientExamLibrary/[id]/[skill]/utils/dragAndDrop'
import { DragEvent, useEffect } from 'react'

export default function ComponentDropItem({
    examSkillDetailId,
    groupId,
    data,
}: {
    examSkillDetailId: string
    groupId: string
    data: IQuestion
}) {
    return (
        <section className="flex items-start gap-2">
            <section className="relative inline-block select-none min-w-[100px] min-h-[28px] mt-1">
                {/* <span className="block text-transparent"></span> */}
                <div
                    onDrop={async (e) => await handleDrop(e)}
                    onDragOver={(e) => allowDrop(e)}
                    data-group-id={groupId}
                    data-drop-max-child={2}
                    className="absolute top-0 left-0 bottom-0 right-0 px-1 border border-dashed border-black rounded overflow-hidden"
                >
                    <input
                        className="hidden"
                        type="text"
                        name={data.id}
                        data-exam-detail-id={examSkillDetailId}
                        data-group-id={groupId}
                    />
                </div>
            </section>
            <span dangerouslySetInnerHTML={{ __html: data.question || '' }}></span>
        </section>
    )
}
export const ComponentStringDropItem = ({
    examSkillDetailId,
    groupId,
    data,
}: {
    examSkillDetailId: string
    groupId: string
    data: IQuestion
}) => {
    useEffect(() => {
        const input = document.querySelector(`input[name="${data.id}"]`) as HTMLInputElement | null
        if (!input) return
        const parentInput = input.parentElement as HTMLElement | null
        if (!parentInput) return
        parentInput.ondrop = async (e) => {
            await handleDrop(e as any)
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
                    <input class="hidden" type="text" name="${data.id}" data-exam-skill-detail-id=${examSkillDetailId} data-group-id=${groupId} />
                </div>
            </section>
        </section>
    `
}

export async function handleDrop(e: DragEvent<HTMLElement>) {
    drop(e)

    const container = e.currentTarget as HTMLElement | null
    if (!container) return
    const input = container.querySelector('input') as HTMLInputElement | null
    if (!input) return

    const questionId = input.name
    const answerId = input.value
    const examSkillDetailId = input.dataset.examSkillDetailId
    const groupId = input.dataset.groupId
    if (!questionId || !answerId || !examSkillDetailId || !groupId) return
    const answer = new AnswerAddDTO({
        id: questionId,
        value: [answerId],
        groupQuestionId: groupId,
        examSkillDetailId: examSkillDetailId,
    })
    await match.addAnswer(answer)
}
