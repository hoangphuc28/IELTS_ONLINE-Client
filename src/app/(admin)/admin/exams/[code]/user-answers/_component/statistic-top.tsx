'use client'

import { useAppSelector } from '@/src/app/(admin)/lib/redux/hooks'
import { adminUserAnswerSelector } from '@/src/app/(admin)/lib/redux/reducer/user-answer.reducer'
import { useEffect, useState } from 'react'

export default function ComponentStatisticTop() {
    const listUserAnswers = useAppSelector((state) => adminUserAnswerSelector.GetList(state))
    const [topUsers, setTopUsers] = useState<{ mail: string; avgPoint: number }[]>([])

    useEffect(() => {
        const tops: { mail: string; avgPoint: number }[] = [...listUserAnswers]
            .sort((a, b) => {
                if (!Number.isFinite(b.avgScore)) return -1
                if (!Number.isFinite(a.avgScore)) return 1
                return b.avgScore! - a.avgScore!
            })
            .filter((item, i) => i < 10 && Number.isFinite(item.avgScore))
            .map((item) => ({ mail: item.user.mail, avgPoint: item.avgScore! }))
        setTopUsers(tops)
    }, [listUserAnswers])
    return (
        <section className="bg-white rounded p-4 shadow-lg flex flex-col gap-2">
            <h3 className="text-base text-violet-700 font-semibold">Top 10</h3>
            <section className="flex flex-col gap-1">
                {topUsers.length > 0 ? (
                    topUsers.map((user, index) => (
                        <div
                            key={'user-answer-detail-item-' + index}
                            className="flex gap-2 justify-between items-center pt-1"
                            style={{
                                borderTop: index !== 0 ? '1px solid #ccc' : '',
                            }}
                        >
                            <span className="text-sm text-violet-500 w-[24px] text-center">
                                #{index + 1}
                            </span>
                            <p className="grow text-sm text-violet-800 truncate">{user.mail}</p>
                            <span className="text-sm text-violet-600 w-[24px] text-center">
                                {user.avgPoint}
                            </span>
                        </div>
                    ))
                ) : (
                    <p className="text-center">-- / --</p>
                )}
            </section>
        </section>
    )
}
