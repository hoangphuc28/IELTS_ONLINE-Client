'use client'

import { IExam } from '@/src/utils/shares/interfaces/IUserAnswerFull'
import ExamItem from './examItem'
import { useAppDispatch, useAppSelector } from '../../lib/redux/hooks'
import { adminExamAction, adminExamSelector } from '../../lib/redux/reducer/exam.reducer'
import { useEffect } from 'react'

export default function ExamsList() {
    const dispatch = useAppDispatch()
    const exams = useAppSelector((state) => adminExamSelector.GetAll(state))
    useEffect(() => {
        if (exams.length === 0) {
            dispatch(adminExamAction.GetAll())
        }
    }, [])
    return (
        <div className="exams-list">
            <div className="list-contain">
                {exams.map((item, index) => (
                    <ExamItem key={index} index={index} data={item} />
                ))}
            </div>
        </div>
    )
}
