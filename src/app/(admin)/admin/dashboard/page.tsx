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
import { useEffect, useState } from 'react'
import HightChart from '@/src/app/(client)/account/dashboard/_components/charts/highChart'
import { IUserAnswerFull } from '@/src/utils/shares/interfaces/IUserAnswerFull'
import { userAnswerService } from '@/src/services/user-answer.service'

export default function Page() {
    const dispatch = useAppDispatch()
    const listAnswers = useAppSelector((state) => adminUserAnswerSelector.GetList(state))
    // const [statisticData, setStatisticData] = useState<IUserAnswerFull[]>([])
    const [statisticExam, setStatisticExam] = useState<[string, number][]>([])
    const [statisticAnswers, setStatisticAnswers] = useState<{ day: number; total: number }[]>([])
    const [statisticMonth, setStatisticMonth] = useState<string>('')
    useEffect(() => {
        dispatch(adminUserAnswerAction.GetAll())
        userAnswerService
            .getStatisticData()
            .then((listUserAnswers: IUserAnswerFull[]) => {
                if (listUserAnswers.length > 0) {
                    setStatisticMonth(
                        new Date(listUserAnswers[0].timeStart).toLocaleString('en-us', {
                            month: 'long',
                        }),
                    )
                }
                // #region convert data statistic exam
                const dataExam: [string, number][] = []
                listUserAnswers.forEach((answer) => {
                    const examCode = answer.processes[0].skillExam.exam.code
                    let examIndex = dataExam.findIndex((listValue) => listValue[0] === examCode)
                    if (examIndex === -1) {
                        examIndex = dataExam.push([examCode, 0]) - 1
                    }
                    dataExam[examIndex][1] += 1
                })
                setStatisticExam(dataExam)
                // #endregion convert data statistic exam
                // #region convert data statistic answer
                const dataAnswers: { day: number; total: number }[] = []
                const dataSortByDay: IUserAnswerFull[] = listUserAnswers.sort(
                    (beforeItem, afterItem) => {
                        if (beforeItem.timeStart > afterItem.timeStart) return 1
                        return -1
                    },
                )
                dataSortByDay.forEach((item) => {
                    const dayItem = new Date(item.timeStart).getDate()
                    let itemIndex = dataAnswers.findIndex((dItem) => dayItem === dItem.day)
                    if (itemIndex === -1) {
                        itemIndex = dataAnswers.push({ day: dayItem, total: 0 }) - 1
                    }
                    dataAnswers[itemIndex].total += 1
                })

                setStatisticAnswers(dataAnswers)
                // #endregion convert data statistic answer
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])
    return (
        <div className="dashboard">
            <section className="flex flex-col gap-3">
                <QuicActions />
                <section className="grid grid-cols-2 gap-2">
                    <HightChart
                        title={'In ' + statisticMonth}
                        xTitle="Exam's code"
                        yTitle=""
                        series={[
                            {
                                name: 'Number of assignments',
                                color: 'red',
                                type: 'column',
                                data: statisticExam,
                            },
                        ]}
                    />
                    <HightChart
                        title={'Number of answers in ' + statisticMonth}
                        xTitle="Day"
                        yTitle=""
                        series={[
                            {
                                name: 'Number of assignments',
                                color: 'blue',
                                type: 'line',
                                data: statisticAnswers.map((item) => ({
                                    x: item.day,
                                    y: item.total,
                                })),
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
