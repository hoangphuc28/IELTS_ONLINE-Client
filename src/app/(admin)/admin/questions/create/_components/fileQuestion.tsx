'use client'
import Link from 'next/link'

export default function ComponentFileQuestion() {
    return (
        <>
            <section className="flex gap-2 px-4">
                <div className="flex gap-2">
                    <label className="text-base" htmlFor="">
                        Audio
                    </label>
                    <input className="text-base" type="file" name="" id="" />
                </div>
                <div>
                    <Link
                        href={''}
                        className="text-nowrap px-3 py-2 bg-violet-300 rounded border-0 text-base"
                    >
                        Add Question
                    </Link>
                </div>
            </section>
        </>
    )
}
