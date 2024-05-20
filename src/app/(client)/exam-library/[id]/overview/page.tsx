'use client'

import LayoutCenter from '@client/_components/layoutCenter'
import ComponentCardInfo from '@clientExamLibrary/[id]/_components/cardInfo'
import ComponentCardTestItem from '@clientExamLibrary/[id]/_components/cardTestItem'

import test from '@clientExamLibrary/[id]/data'
import { ChangeEvent, MouseEvent, MouseEventHandler, useEffect, useState } from 'react'
import Link from 'next/link'
import { testSkill, testSkillType } from '@/src/utils/shares/interfaces/IMiniTest'
import { TestItemManager } from '@/src/utils/shares/localStoreage'
import { useAppShareDispatch, useAppShareSelector } from '@client/_lib/redux/hooks'
// import { selectFirstSkill } from '@client/_lib/redux/actions/testSkill/get'
import { selectFirstSkill } from '@client/_lib/redux/reducers/test-skill.reducer'
import { ToggleTestsSkillProgress } from '@client/_lib/redux/actions/testSkill/update'

// const examProgresses = [
//     [
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//     ],
//     [
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//         { quesId: 'abc', value: '' },
//     ],
//     [{ quesId: 'abc', value: '' }],
//     [{ quesId: 'abc', value: '' }],
// ]

export default function Page() {
    // const testsSkill = useAppShareSelector(selectFirstSkill)
    const testFirstSkill = useAppShareSelector((state) =>
        selectFirstSkill({ testSkill: state.testsSkill }),
    )
    const testsSkill = useAppShareSelector((state) => state.testsSkill.testsSkillProgress)
    const dispatch = useAppShareDispatch()
    // const testsManager = new TestItemManager()
    // const [firstSkill, setFirstSkill] = useState<string | null>(null)
    const colors = ['#31aabe', '#317343', '#eea055', '#c06073']

    // const fullProgress = Math.floor(
    //     (examProgresses.reduce((acc, item) => {
    //         acc += item.length
    //         return acc
    //     }, 0) /
    //         (40 + 40 + 3 + 2)) *
    //         100,
    // )
    // const maxExams: Array<number> = [40, 40, 3, 2]

    useEffect(() => {
        // const data = new AnswerForPart({ examSkillDetailId: 'idExamDetail', answer: { id: 'a', value: 'b' } })
        // ExamService.createPart(data)
        // testsManager.reset()
    }, [])

    return (
        <>
            <main className="min-h-[50vh] mb-5 sm:mt-5 sm:py-5">
                <LayoutCenter>
                    <section>
                        <ComponentCardInfo data={test} />
                    </section>
                    <section className="mt-3 pb-3 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center">
                        <div className="grid grid-cols-1 my-5 gap-2">
                            <h3 className="font-bold text-2xl text-center">
                                Choose your practice tests
                            </h3>
                            <section className="grid grid-cols-2 md:grid-cols-4 gap-5 py-3">
                                {test.details.map((miniTest, index) => (
                                    <ComponentTestItemManger
                                        key={`test-card-item-${index}`}
                                        color={colors[index]}
                                        name={miniTest.name}
                                        time={miniTest.time}
                                        callback={() => handleClickCheckSkill(miniTest.name)}
                                    />
                                ))}
                            </section>

                            <section className="text-end">
                                <Link
                                    href={`/exam-library/${test.code}/${testFirstSkill}/test`}
                                    className="inline-block min-w-[110px] px-5 py-2 rounded font-bold bg-violet-600 hover:bg-violet-500 text-white text-lg text-center"
                                    onClick={handleClickStartProgressTest}
                                >
                                    Start
                                </Link>
                            </section>
                        </div>
                    </section>
                </LayoutCenter>
            </main>
        </>
    )

    function handleClickStartProgressTest(e: MouseEvent<HTMLAnchorElement, any>) {
        if (!testFirstSkill) e.preventDefault()
    }

    function handleClickCheckSkill(skill: testSkillType) {
        dispatch(ToggleTestsSkillProgress(testsSkill, skill))
        // testsManager.toggle(skill)
        // setFirstSkill(testsManager.getFirst())
    }
}

function ComponentTestItemManger({
    color,
    name,
    time,
    callback,
}: {
    color: string
    name: string
    time: string
    callback?: CallableFunction
}) {
    const [isClient, setIsClient] = useState(false)
    const tempId = name + new Date().getTime().toString() + (100 * Math.random()).toString()

    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <>
            {isClient && (
                <section className="flex flex-col gap-2">
                    <section className="text-center">
                        <input
                            className="rounded"
                            type="checkbox"
                            id={tempId}
                            name={name}
                            onChange={handleChangeCheckBox}
                        />
                    </section>
                    <label htmlFor={tempId} className="cursor-pointer select-none">
                        <ComponentCardTestItem
                            color={color}
                            name={name}
                            time={time}
                            // data={miniTest}
                            // testId={test.code}
                            // examProgress={examProgresses[index] as any[]}
                            // maxExam={maxExams[index]}
                        />
                    </label>
                </section>
            )}
        </>
    )

    function handleChangeCheckBox(e: ChangeEvent<HTMLInputElement>) {
        if (callback) callback()
    }
}

function ComponentFullTest() {
    {
        /* <section className="w-3/4 flex flex-col sm:flex-row items-center justify-between gap-3">
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

<div>
    <Link
        href={`/${test.code}/all/test`}
        className="block text-white px-3 py-2 rounded-3xl bg-violet-800 font-bold"
    >
        <i className="fa-solid fa-bolt"></i> Làm bài
    </Link>
</div>
</section> */
    }
}
