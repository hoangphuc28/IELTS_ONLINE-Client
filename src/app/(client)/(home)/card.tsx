import Link from 'next/link'
import { CSSProperties } from 'react'
import ITest from '@client/exam-library/interfaces/ITest'

export default function ComponentCard({
    className,
    style,
    data,
}: {
    className?: string
    style?: CSSProperties
    data: ITest
}) {
    return (
        <>
            <Link
                href="/exam-library/abc"
                className="mb-4 max-w-sm px-4 py-6 bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700"
            >
                <div
                    className="w-48 h-48 rounded-lg bg-img-center"
                    style={{
                        background: `url(${data.src}), url(../../../../assets/img/src-test-default.jpg)`,
                    }}
                ></div>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.name}
                </h5>
                <p
                    className="h-[54px] text-ellipsis overflow-hidden text-base font-normal text-gray-700 dark:text-gray-400"
                    style={{
                        WebkitBoxOrient: 'vertical',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                    }}
                >
                    {data?.title ? data.title : ''}
                </p>
                <section className="text-right">
                    <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-400 rounded hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300">
                        <span>Làm bài</span>
                        <i className="ms-1 fa-solid fa-arrow-right"></i>
                    </span>
                </section>
            </Link>
        </>
    )
}
