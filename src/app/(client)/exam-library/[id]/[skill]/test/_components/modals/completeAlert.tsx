'use client'

import { useRouter } from 'next/navigation'
import ComponentBaseModel from './base'

export default function ComponentCompleteAlert() {
    const router = useRouter()
    return (
        <ComponentBaseModel>
            <section className="flex flex-col gap-3">
                <section>
                    <div className="flex justify-center py-2">
                        <div className="border border-violet-700 rounded-full w-[100px] h-[100px] flex items-center justify-center">
                            <i className="fa-solid fa-check text-violet-700 text-5xl"></i>
                        </div>
                    </div>
                    <h2>Nice work, your exam has been submitted.</h2>
                </section>
                <section className="flex flex-col gap-1">
                    <div className="">
                        <button
                            onClick={(e) => router.push('/')}
                            className="w-full px-2 py-2 rounded border border-gray-200/90 bg-violet-700/80 hover:bg-violet-700 font-semibold text-white"
                        >
                            Back to home
                        </button>
                    </div>
                </section>
            </section>
        </ComponentBaseModel>
    )
}
