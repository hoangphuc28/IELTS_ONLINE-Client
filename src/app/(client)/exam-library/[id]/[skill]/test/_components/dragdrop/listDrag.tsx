import IQuestion from '@/src/app/(client)/exam-library/interfaces/IQuestion'
import { DragEvent } from 'react'
import ComponentDragItem from './dragItem'
import IAnswer from '@/src/app/(client)/exam-library/interfaces/IAnswer'

export default function ComponentListDrag({ data }: { data: IAnswer[] }) {
    return (
        <section className="relative border border-dashed border-black px-2 rounded">
            <div className="flex flex-col gap-2">
                {data.map((answer, answerIndex) => (
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
                className="absolute top-0 left-0 bottom-0 right-0 px-1 flex flex-col gap-2"
            >
                {data.map((answer, answerIndex) => (
                    <ComponentDragItem data={answer} key={'temp-drag-answer-' + answerIndex} />
                ))}
            </section>
        </section>
    )

    function allowDrop(ev: DragEvent<HTMLElement>) {
        ev.preventDefault()
    }

    function drop(ev: DragEvent<HTMLElement>) {
        console.log('drop')
        ev.preventDefault()
        const data = ev.dataTransfer.getData('dragDataId')

        const target = ev.target as HTMLElement
        const targetDOM = document.querySelector(`[data-id="${data}"]`)
        console.log(data, targetDOM)
        if (!targetDOM) return
        target.appendChild(targetDOM)
    }
}
