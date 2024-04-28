'use client'
import { useRef } from 'react'
import ComponentAnswer from './answer'
import Link from 'next/link'

export default function ComponentManagerAnswer() {
    const refListQuestion = useRef<HTMLElement>(null)
    return (
        <div className="flex flex-col gap-3 mt-3">
            <section>
                <p>- Answers:</p>
            </section>
            <div className="flex items-end gap-3">
                <section ref={refListQuestion} className="flex flex-col items-center gap-3 w-full">
                    <section className="flex items-center w-full gap-2">
                        <p className="min-w-[62px]">Correct</p>
                        <p>Answer</p>
                    </section>
                    <ComponentAnswer />
                </section>
                <Link
                    className="block w-[30px] h-[30px] flex items-center justify-center text-xl font-bold rounded bg-blue-300"
                    href={''}
                >
                    +
                </Link>
            </div>
        </div>
    )
}
