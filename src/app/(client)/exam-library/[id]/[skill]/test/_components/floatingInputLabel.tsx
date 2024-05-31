import { createToastDanger } from '@/src/app/(client)/_components/toast/sysToast'
import { AnswerAddDTO } from '@/src/utils/shares/db/answer/dtos/answer-add.dto'
import { fillInTheBlank } from '@/src/utils/shares/db/answer/services/answers/fillInTheBlank.service'
import { useEffect } from 'react'

export default function ComponentFloatingInputLabel({ label, id }: { label: string; id: string }) {
    return (
        <div className="max-w-[120px] relative">
            <input
                type="text"
                name={id}
                id={id}
                className="bg-white block px-2.5 pb-2.5 pt-4 w-full
                text-sm text-gray-90
                rounded-lg border-1 border-gray-300 appearance-none
                focus:outline-none focus:ring-0 focus:border-blue-600
                peer"
                placeholder=""
            />
            <label
                htmlFor={id}
                className="
                absolute bg-[transparent] text-gray-500 duration-300 transform -translate-y-4 scale-100
                top-2 start-1 z-10 origin-[0] bg-white px-2
                peer-focus:px-2 peer-focus:text-blue-600
                peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
                peer-placeholder-shown:top-1/2
                peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4
                rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
                "
            >
                {label}
            </label>
        </div>
    )
}
export function ComponentStringFloatingInputLabel({
    examSkillDetailId,
    groupId,
    answerId,
}: {
    examSkillDetailId: string
    groupId: string
    answerId: string
}) {
    const id = generateId({ examSkillDetailId, groupId, answerId })
    useEffect(() => {
        const input = document.querySelector(`input[name="${id}"]`) as HTMLInputElement | null
        if (!input) return
        input.oninput = async (e) => await handleInput(e, id)
    }, [])
    return `
        <div class="max-w-[120px] relative inline-block">
            <input
                type="text"
                name="${id}"
                class="bg-white block px-2.5 w-full 
                    text-sm text-gray-90
                    rounded-lg border-1 border-gray-300 appearance-none
                    focus:outline-none focus:ring-0 focus:border-blue-600
                peer"
                style="display: block; padding: 6px; width: 100%;"
                placeholder=""
            />
        </div>
    `

    function generateId({
        examSkillDetailId,
        groupId,
        answerId,
    }: {
        examSkillDetailId: string
        groupId: string
        answerId: string
    }) {
        return examSkillDetailId + '--' + groupId + '--' + answerId
    }

    function getValue(id: string) {
        return id.split('--')
    }

    async function handleInput(e: Event, id: string) {
        const input = e.target as HTMLInputElement | null
        if (!input) {
            createToastDanger()
            return
        }
        const value = input.value
        const [examSkillDetailId, groupId, answerId] = getValue(id)
        const answer = new AnswerAddDTO({
            id: answerId,
            value: [value],
            groupQuestionId: groupId,
            examSkillDetailId: examSkillDetailId,
        })
        await fillInTheBlank.addAnswer(answer)
    }
}
