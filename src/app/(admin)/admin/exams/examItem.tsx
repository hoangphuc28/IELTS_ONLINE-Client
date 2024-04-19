'use client'

import Image from 'next/image'
import Link from 'next/link'
import '@admin/styles/components/_examItem.scss'
import '@admin/styles/components/_button.scss'
interface Props {
    data: Exam;
    index: number
}
interface Exam {
    thumbnail: String
    title: String
    description: String
    status: String
    author: String
    createdAt: String
}
export default function ExamItem({ data, index }: Props) {
    return (
        <div className="exam-item">
            <div className="item-infor">
                <div className="exam-infor-left">
                    <div>#{index+1}</div>
                    <img src={data.thumbnail} alt="thumbnail" />
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
                            <a>Publish</a>
                        </div>
                    </div>
                    <div className="infor-right-bottom">
                        <div className="text-left-bottom">
                            <span>
                                {data.author} created on {data.createdAt}
                            </span>
                        </div>
                        <div className="text-right-bottom">
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
