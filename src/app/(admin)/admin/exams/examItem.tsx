'use client'

import Link from 'next/link'
import '@admin/styles/components/_examItem.scss'
import '@admin/styles/components/_button.scss'
import { IExam } from '@/src/utils/shares/interfaces/IUserAnswerFull'
import { examStatuses } from '@/src/utils/constants/exam'

interface Props {
    data: IExam
    index: number
}

export default function ExamItem({ data, index }: Props) {
    return (
        <div className="exam-item">
            <div className="item-infor">
                <div className="exam-infor-left">
                    <div>#{index + 1}</div>
                    <img src={data.src} alt="thumbnail" />
                    {/* <Image src={data.thumbnail} alt="thumbnail" /> */}
                </div>
                <div className="exam-infor-right">
                    <div className="infor-right-top">
                        <div className="container">
                            <div className="title">
                                {data.title} <span>{data.status}</span>
                            </div>
                            <div className="des">{data.description}</div>
                        </div>
                        <div className="release-btn">
                            {data.status === examStatuses.draft && <a>Publish</a>}
                            {data.status === examStatuses.published && <a>Draft</a>}
                        </div>
                    </div>
                    <div className="infor-right-bottom">
                        <div className="text-left-bottom">
                            <span>Created on {data.createdAt}</span>
                        </div>
                        <div className="text-right-bottom">
                            <Link href={`/admin/exams/${data.code}/user-answers`}>Assignments</Link>
                            <Link href="/">Questions</Link>
                            <Link href="/">Previews</Link>
                            <Link href="/">Delete</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
