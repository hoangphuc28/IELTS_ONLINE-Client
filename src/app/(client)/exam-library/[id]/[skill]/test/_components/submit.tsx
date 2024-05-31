'use client'
import { useRef } from 'react'

export default function ComponentSubmit({ target }: { target: string }) {
    const btnRef = useRef<HTMLButtonElement>(null)
    return (
        <>
            <button
                ref={btnRef}
                className="bg-cyan-700 px-4 py-1 text-gray-200 font-bold text-base rounded-2xl"
            >
                Submit <i className="fa-regular fa-paper-plane"></i>
            </button>
        </>
    )
}
