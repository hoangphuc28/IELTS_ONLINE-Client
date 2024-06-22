'use client'

import { useState } from 'react'
import ComponentAnswerDetailItem from './_component/answer-detail/detail'
import ComponentListUserAnswer from './_component/answer-detail/list'
import ComponentStatisticTop from './_component/statistic-top'

export default function Page() {
    const [chooseIndex, setChooseIndex] = useState<number>(-1)
    return (
        <section className="grid grid-cols-12 gap-3">
            <section className="col-span-8 bg-white rounded-lg p-4 shadow-lg">
                <ComponentListUserAnswer
                    chooseIndex={{
                        value: chooseIndex,
                        callback: (index: number) => setChooseIndex(index),
                    }}
                />
            </section>
            <section className="h-[94vh] col-span-4 flex flex-col gap-2 justify-between">
                <section className="bg-white rounded p-4 shadow-lg">
                    {chooseIndex !== -1 && (
                        <ComponentAnswerDetailItem indexUserAnswer={chooseIndex} />
                    )}
                </section>
                <ComponentStatisticTop />
            </section>
        </section>
    )
}
