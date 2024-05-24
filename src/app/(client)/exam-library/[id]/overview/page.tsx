'use client'

import LayoutCenter from '@client/_components/layoutCenter'
import ComponentCardInfo from '@clientExamLibrary/[id]/_components/cardInfo'

import test from '@clientExamLibrary/[id]/data'
import { MouseEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { testSkill, testSkillType } from '@/src/utils/shares/interfaces/IMiniTest'
import { TestItemManager } from '@/src/utils/shares/localStorage'
import { useAppShareDispatch, useAppShareSelector } from '@client/_lib/redux/hooks'
import {
    testSkillActions,
    testSkillSelectors,
} from '@client/_lib/redux/reducers/test-skill.reducer'
import { ComponentTestItem } from './_components/testItems/item'
import { useRouter } from 'next/navigation'
import { examActions } from '../../../_lib/redux/reducers/exam.reducer'

export default function Page() {
    const router = useRouter()
    const dispatch = useAppShareDispatch()
    const testFirstSkill = useAppShareSelector((state) =>
        testSkillSelectors.GetFirstSkill({ testSkill: state.testsSkill }),
    )
    // const testsManager = new TestItemManager()
    // const [firstSkill, setFirstSkill] = useState<string | null>(null)
    const colors = ['#31aabe', '#317343', '#eea055', '#c06073']

    useEffect(() => {
        dispatch(examActions.setter(test))
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
                                    <ComponentTestItem
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
                                    href={`exam-library/${test.code}/${testFirstSkill?.name}/test`} ///
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
        if (!testFirstSkill) return e.preventDefault()
        // create user answer
        // create user exam skill process
        // connect socket
        // load first exam skill
        router.push(`exam-library/${test.code}/${testFirstSkill.name}/test`)
    }

    function handleClickCheckSkill(skillName: string) {
        dispatch(testSkillActions.ToggleTestsSkillProgress(skillName))
        // testsManager.toggle(skillId)
        // setFirstSkill(testsManager.getFirst())
    }
}

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

// function ComponentFullTest() {
//     return
//         <section className="w-3/4 flex flex-col sm:flex-row items-center justify-between gap-3">
// <div className="flex items-center text-indigo-900">
//     <i className="fa-solid fa-battery-full text-4xl"></i>
//     <span className="ms-3 text-xl font-bold">Full Test</span>
// </div>
// <div className="w-full sm:w-auto h-[25px] grow relative bg-gray-200 rounded-full overflow-hidden">
//     <div
//         className="h-full bg-purple-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
//         style={{ width: `${fullProgress}%` }}
//     ></div>
//     <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-purple-700 font-bold">
//         <span>{fullProgress}</span>%
//     </div>
// </div>

// <div>
//     <Link
//         href={`/${test.code}/all/test`}
//         className="block text-white px-3 py-2 rounded-3xl bg-violet-800 font-bold"
//     >
//         <i className="fa-solid fa-bolt"></i> Làm bài
//     </Link>
// </div>
// </section>
// }
