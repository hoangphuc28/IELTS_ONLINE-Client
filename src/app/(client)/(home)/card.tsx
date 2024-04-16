import Link from 'next/link'
import { CSSProperties } from 'react'

export default function ComponentCard({
    className,
    style,
    data,
}: {
    className?: string
    style?: CSSProperties
    data: { name: string; title?: string }
}) {
    return (
        <>
            <Link
                href="/exam-library/abc"
                className="mb-4 max-w-sm px-4 py-6 bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700"
            >
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
                <div className="text-right">
                    <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <span>Chi tiết</span>
                        <i className="ms-1 fa-solid fa-arrow-right"></i>
                    </span>
                </div>
            </Link>
        </>
    )
}
