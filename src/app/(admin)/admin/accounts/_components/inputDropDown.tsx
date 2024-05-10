'use client'

import Link from 'next/link'

import '@admin/admin/accounts/style/_main.scss'
import { MouseEvent, useRef, useState } from 'react'

export default function ComponentInputDropDown({
    data,
    defaultValue,
    handleClick,
}: {
    data: string[]
    defaultValue?: string
    handleClick?: CallableFunction
}) {
    const refBtn = useRef<HTMLDivElement>(null)
    const [isShow, setIsShow] = useState(false)
    const [searchFor, setSearchFor] = useState(defaultValue || data[0])
    return (
        <section className="relative">
            <div
                ref={refBtn}
                onClick={(e) => handleChangeShow()}
                className="inline-flex justify-between items-center rounded"
                data-drop-down-btn="true"
                style={{ border: '1px solid #ddd' }}
            >
                <input
                    disabled
                    className="px-3 py-1 text-base min-w-[60px] max-w-[80px] bg-transparent border-0 outline-0 pointer-events-none"
                    type="text"
                    value={searchFor}
                />
                {isShow ? (
                    <i className="fa-solid fa-angle-down me-2"></i>
                ) : (
                    <i className="fa-solid fa-angle-up me-2"></i>
                )}
            </div>

            <section
                className="z-20 absolute top-full left-0 flex flex-col gap-2 shadow-lg rounded bg-white min-w-[100px] py-2"
                style={{ border: '1px solid #ddd' }}
                data-drop-down="true"
            >
                {data.map((item, index) => (
                    <Link
                        className="block px-3 pt-2 text-black hover:bg-slate-100"
                        href={''}
                        key={'component-input-drop-down-' + index + new Date().getTime()}
                        onClick={(e) => (handleClick ? handleClick(e) : handleChangeSearchFor(e))}
                    >
                        {item}
                    </Link>
                ))}
            </section>
        </section>
    )

    function handleChangeShow() {
        setIsShow(!isShow)
        if (!refBtn.current) return
        refBtn.current!.classList.toggle('show')
    }

    function handleChangeSearchFor(e: any) {
        e.preventDefault()
        const dom = e.currentTarget as HTMLElement | null
        if (!dom) return
        setSearchFor(dom.innerText)
        handleChangeShow()
    }
}
