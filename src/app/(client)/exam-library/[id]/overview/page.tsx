'use client'

import LayoutCenter from '@client/_components/layoutCenter'
import IMiniTest from '@/src/utils/shares/interfaces/IMiniTest'
import ITest from '@/src/utils/shares/interfaces/ITest'
import ComponentCardInfo from '@clientExamLibrary/[id]/_components/cardInfo'
import ComponentCardTestItem from '@clientExamLibrary/[id]/_components/cardTestItem'

import test from '@clientExamLibrary/[id]/data'
import { useEffect } from 'react'

export default function Page() {
    const colors = ['#31aabe', '#317343', '#eea055', '#c06073']
    const examProgresses = [
        [
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
        ],
        [
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
            { quesId: 'abc', value: '' },
        ],
        [{ quesId: 'abc', value: '' }],
        [{ quesId: 'abc', value: '' }],
    ]
    const fullProgress = Math.floor(
        (examProgresses.reduce((acc, item) => {
            acc += item.length
            return acc
        }, 0) /
            (40 + 40 + 3 + 2)) *
            100,
    )
    const maxExams: Array<number> = [40, 40, 3, 2]

    return (
        <>
            <main className="min-h-[50vh] mb-5 sm:mt-5 sm:py-5">
                <LayoutCenter>
                    <section>
                        <ComponentCardInfo data={test} />
                    </section>
                    <section className="mt-3 pb-3 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center">
                        <section className="grid grid-cols-2 md:grid-cols-4 gap-5 px-5 py-3">
                            {test.details.map((miniTest, index) => (
                                <section
                                    key={`test-card-item-${index}`}
                                    className="border rounded px-4 py-2"
                                >
                                    <ComponentCardTestItem
                                        index={index}
                                        color={colors[index]}
                                        testId={test.code}
                                        data={miniTest}
                                        examProgress={examProgresses[index] as any[]}
                                        maxExam={maxExams[index]}
                                    />
                                </section>
                            ))}
                        </section>
                        <section className="w-3/4 flex flex-col sm:flex-row items-center justify-between gap-3">
                            <div className="flex items-center text-indigo-900">
                                <i className="fa-solid fa-battery-full text-4xl"></i>
                                <span className="ms-3 text-xl font-bold">Full Test</span>
                            </div>
                            <div className="w-full sm:w-auto h-[25px] grow relative bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-purple-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                    style={{ width: `${fullProgress}%` }}
                                ></div>
                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-purple-700 font-bold">
                                    <span>{fullProgress}</span>%
                                </div>
                            </div>

                            {/* <div>
                                <Link
                                    href={`/${test.code}/all/test`}
                                    className="block text-white px-3 py-2 rounded-3xl bg-violet-800 font-bold"
                                >
                                    <i className="fa-solid fa-bolt"></i> Làm bài
                                </Link>
                            </div> */}
                        </section>
                    </section>
                </LayoutCenter>
            </main>
        </>
    )
}
