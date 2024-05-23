'use client'
import IMiniTest, { testSkill } from '@/src/utils/shares/interfaces/IMiniTest'
import { useEffect, useState } from 'react'
import CircleProgressBar from './circleProgressBar'
import Link from 'next/link'

export function ComponentCardTestItem({
    // testId,
    // data,
    name,
    time,
    // examProgress,
    // maxExam,
    color,
}: {
    // testId: string
    // data: IMiniTest
    name: string
    time: string
    // examProgress: any[]
    // maxExam: number
    color?: string
}) {
    // const progress = Math.floor((examProgress.length / maxExam) * 100)
    return (
        <>
            <section className="border rounded px-4 py-2">
                <section className="flex flex-col items-center gap-4 bg-white px-5 py-4 text-cyan-700">
                    <ComponentHandleIcon name={name} color={color} />
                    <h3 className="text-xl font-bold">{name}</h3>
                    <ComponentHandleTimer time={time} />
                </section>
            </section>
        </>
    )
}

function ComponentHandleIcon({ name, color }: { name: string; color?: string }) {
    return (
        <section
            className="flex items-center justify-center text-5xl"
            style={{ color: color || 'black' }}
        >
            {(() => {
                if (name.toLowerCase() === testSkill.READING)
                    return <i className="fa-solid fa-headphones-simple"></i>
                if (name.toLowerCase() === testSkill.WRITING)
                    return <i className="fa-solid fa-receipt"></i>
                if (name.toLowerCase() === testSkill.SPEAKING)
                    return <i className="fa-solid fa-feather-pointed"></i>
                return <i className="fa-solid fa-microphone-lines"></i>
            })()}
        </section>
    )
}

function ComponentHandleTimer({ time }: { time: string }) {
    return (
        <section className="text-center text-base">
            <span>{time} minutes</span>
        </section>
    )
}

// function ComponentOtherFeature() {

//     <section>
//     <div className="relative h-[100px]">
//         <CircleProgressBar progress={progress} strokeWidth={6} stroke={color} />
//         <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
//             <span>{progress}%</span>
//         </div>
//     </div>
// </section>
// <div>
//     <Link
//         href={`/exam-library/${testId}/${data.name}/test`}
//         className="block text-white px-3 py-2 rounded-3xl"
//         style={{ backgroundColor: color || 'black' }}
//     >
//         <i className="fa-solid fa-bolt"></i> Làm bài
//     </Link>
// </div>
// }
