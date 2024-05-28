'use client'
import Resizer from '@/src/app/(admin)/admin/components/resizer'
import IPart from '@/src/utils/shares/interfaces/IPart'
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
    const refLeftContent = useRef<HTMLDivElement>(null)
    if (skill === 'Listening' || skill === 'Speaking') return <></>
    return (
        <section className="flex">
            <div
                ref={refLeftContent}
                className="min-w-[100px] overflow-x-hidden flex flex-col gap-2 pe-3"
            >
                <h2 className="font-bold text-xl" dangerouslySetInnerHTML={{ __html: name }}></h2>
                <div>
                    <img className="w-full max-w-[500px]" src={data.resource} alt="" />
                </div>
                <p dangerouslySetInnerHTML={{ __html: data.title }}></p>
                <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
            </div>
            <div style={{ padding: '17px 0' }}>
                <Resizer max={800} forwardedRef={refLeftContent} />
            </div>
        </section>
    )
}
