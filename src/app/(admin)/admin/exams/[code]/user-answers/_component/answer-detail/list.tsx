'use client'

import { useAppDispatch, useAppSelector } from '@/src/app/(admin)/lib/redux/hooks'
import {
    adminExamAction,
    adminExamSelector,
} from '@/src/app/(admin)/lib/redux/reducer/exam.reducer'
import {
    adminUserAnswerAction,
    adminUserAnswerSelector,
} from '@/src/app/(admin)/lib/redux/reducer/user-answer.reducer'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import ComponentUserAnswerItem from './item'
import { Pagination, Stack } from '@mui/material'

interface IProps {
    chooseIndex: {
        value: number
        callback: (index: number) => any
    }
}

export default function ComponentListUserAnswer({ chooseIndex }: IProps) {
    const params = useParams<{ code: string }>()
    const dispatch = useAppDispatch()
    const exam = useAppSelector((state) => adminExamSelector.Get(state, params.code))
    const listUserAnswers = useAppSelector((state) => adminUserAnswerSelector.GetList(state))

    const [page, setPage] = useState<number>(1)
    useEffect(() => {
        if (
            listUserAnswers.length === 0 ||
            listUserAnswers[0].processes[0].skillExam.exam.code !== params.code
        ) {
            dispatch(adminUserAnswerAction.FilterByExam(params.code))
        }
        if (!exam) {
            dispatch(adminExamAction.GetAll())
        }
    }, [])
    return (
        <section className="w-full h-[90vh] flex flex-col gap-3 overflow-hidden">
            <h3 className="pb-1 flex" style={{ borderBottom: '1px solid #ddd' }}>
                <span className="truncate me-1">{exam && exam.title}</span>
                <span>{exam && ' (' + exam.code + ')'}</span>
                {/* {exam && exam.title + ' (' + exam.code + ')'} */}
            </h3>

            <div className="w-full grid gap-2 overflow-y-auto">
                {listUserAnswers.length > 0 ? (
                    listUserAnswers.reduce((acc: JSX.Element[], userAnswer, index) => {
                        if (
                            index < Math.min(page * 10, listUserAnswers.length) &&
                            index >= (page - 1) * 10
                        ) {
                            acc.push(
                                <ComponentUserAnswerItem
                                    key={'user-answer-' + index}
                                    userAnswer={userAnswer}
                                    isActive={chooseIndex.value === index}
                                    onClick={() => chooseIndex.callback(index)}
                                />,
                            )
                        }
                        return acc
                    }, [])
                ) : (
                    <p className="text-center">-- / --</p>
                )}
            </div>
            {listUserAnswers.length > 12 && (
                <div className="grow flex justify-center items-end pagination">
                    <Stack spacing={2}>
                        <Pagination
                            count={Math.ceil(listUserAnswers.length / 10)}
                            variant="outlined"
                            shape="rounded"
                            page={page}
                            onChange={(e: any, value: number) => setPage(value)}
                        />
                    </Stack>
                </div>
            )}
        </section>
    )
}
