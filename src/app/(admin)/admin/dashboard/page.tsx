'use client'
import { useAppShareSelector } from '@/src/app/(client)/_lib/redux/hooks'
import ComponentListUserAnswer from './_component/list-user-answer'
import Charts from './charts'
import QuicActions from './quickActions'
import '@admin/styles/components/_cover.scss'
import '@admin/styles/pages/dashboard.scss'
import { useAppDispatch, useAppSelector } from '../../lib/redux/hooks'
import {
    adminUserAnswerAction,
    adminUserAnswerSelector,
} from '../../lib/redux/reducer/user-answer.reducer'
import { useEffect } from 'react'
import HightChart from '@/src/app/(client)/account/dashboard/_components/charts/highChart'

export default function Page() {
    const dispatch = useAppDispatch()
    const listAnswers = useAppSelector((state) => adminUserAnswerSelector.GetList(state))
    useEffect(() => {
        dispatch(adminUserAnswerAction.GetAll())
    }, [])
    return (
        <div className="dashboard">
            <section className="flex flex-col gap-3">
                <QuicActions />
                <section className="grid grid-cols-2 gap-2">
                    <HightChart
                        title={'In ' + new Date().toLocaleString('en-us', { month: 'long' })}
                        xTitle="Exam's code"
                        yTitle=""
                        series={[
                            {
                                name: 'Number of assignments',
                                color: 'red',
                                type: 'column',
                                data: [
                                    ['code 1', 100],
                                    ['code 2', 2],
                                    ['code 3', 2],
                                    ['code 4', 1],
                                ],
                            },
                        ]}
                    />
                    <HightChart
                        title="Answers"
                        xTitle="Aug"
                        yTitle="Assignments"
                        series={[
                            {
                                name: 'Number of assignments',
                                color: 'blue',
                                type: 'line',
                                data: [
                                    { x: 1, y: 0 },
                                    { x: 2, y: 3 },
                                    { x: 4, y: 3 },
                                    { x: 15, y: 4 },
                                    { x: 31, y: 5 },
                                ],
                            },
                        ]}
                    />
                </section>
                <section className="bg-white flex flex-col gap-3 px-4 py-4 rounded-lg shadow-2xl">
                    <h3>Recent Submissions</h3>
                    <ComponentListUserAnswer listUserAnswer={listAnswers} />
                </section>
            </section>
        </div>
    )
}
