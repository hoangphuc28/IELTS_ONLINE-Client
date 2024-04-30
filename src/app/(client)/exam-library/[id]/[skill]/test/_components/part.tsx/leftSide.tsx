'use client'
import Resizer from '@/src/app/(admin)/admin/components/resizer'
import IPart from '@/src/app/(client)/exam-library/interfaces/IPart'
import { useRef } from 'react'

export default function ComponentLeftSide({
    name,
    skill,
    data,
}: {
    name: string
    skill: string
    data: IPart
}) {
    // console.log(name)
    if (skill === 'Listening' || skill === 'Speaking') return <></>
    const refLeftContent = useRef<HTMLDivElement>(null)
    return (
        <section className="flex">
            <div
                ref={refLeftContent}
                className="min-w-[100px] overflow-x-hidden flex flex-col gap-2 pe-3"
            >
                <h2 className="font-bold text-xl" dangerouslySetInnerHTML={{ __html: name }}></h2>
                <div>
                    <img className="w-full max-w-[500px]" src={data.src} alt="" />
                </div>
                <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
            </div>
            <div style={{ padding: '17px 0' }}>
                <Resizer max={800} forwardedRef={refLeftContent} />
            </div>
        </section>
    )
}
