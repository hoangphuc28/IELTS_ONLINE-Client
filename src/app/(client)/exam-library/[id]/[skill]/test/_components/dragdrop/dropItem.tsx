import IAnswer from '@/src/app/(client)/exam-library/interfaces/IAnswer'
import IQuestion from '@/src/app/(client)/exam-library/interfaces/IQuestion'
import { DragEvent } from 'react'

export default function ComponentDropItem({ data }: { data: IQuestion }) {
    return (
        <section className="flex items-center gap-2">
            <section className="relative">
                <span className="text-transparent select-none">TEMP</span>
                <div
                    onDrop={(e) => drop(e)}
                    onDragOver={(e) => allowDrop(e)}
                    // onDragStart={(e) => drag(e)}
                    className="absolute top-0 left-0 bottom-0 right-0 px-1 border border-dashed border-black"
                ></div>
            </section>
            <span>{data.content}</span>
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
