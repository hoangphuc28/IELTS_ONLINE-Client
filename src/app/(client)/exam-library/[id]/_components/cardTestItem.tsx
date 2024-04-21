'use client'
import IMiniTest from '@clientExamLibrary/interfaces/IMiniTest'
import { useEffect, useState } from 'react'
import CircleProgressBar from './circleProgressBar'
import Link from 'next/link'

export default function ComponentCardTestItem({
    index,
    testId,
    data,
    examProgress,
    maxExam,
    color,
}: {
    index: number
    testId: string
    data: IMiniTest
    examProgress: any[]
    maxExam: number
    color?: string
}) {
    const progress = Math.floor((examProgress.length / maxExam) * 100)
    return (
        <>
            <section className="flex flex-col items-center gap-4 bg-white px-2 py-2 text-cyan-700">
                <div
                    className="flex items-center justify-center text-5xl"
                    style={{ color: color || 'black' }}
                >
                    {(() => {
                        if (index === 0) return <i className="fa-solid fa-headphones-simple"></i>
                        if (index === 1) return <i className="fa-solid fa-receipt"></i>
                        if (index === 2) return <i className="fa-solid fa-feather-pointed"></i>
                        return <i className="fa-solid fa-microphone-lines"></i>
                    })()}
                </div>
                <h3 className="text-base font-bold">{data.name}</h3>
                <section>
                    <div className="relative h-[100px]">
                        <CircleProgressBar progress={progress} strokeWidth={6} stroke={color} />
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <span>{progress}%</span>
                        </div>
                    </div>
                </section>
                <div>
                    <Link
                        href={`/exam-library/${testId}/${data.name}/test`}
                        className="block text-white px-3 py-2 rounded-3xl"
                        style={{ backgroundColor: color || 'black' }}
                    >
                        <i className="fa-solid fa-bolt"></i> Làm bài
                    </Link>
                </div>
            </section>
        </>
    )
}
