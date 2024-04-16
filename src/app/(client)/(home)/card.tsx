import { CSSProperties } from 'react'

export default function ComponentCard({
    className,
    style,
}: {
    className?: string
    style?: CSSProperties
}) {
    return (
        <>
            <div className="mb-4 max-w-sm p-6 bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in
                    reverse chronological order.
                </p>
                <div className="text-right">
                    <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <span>Chi tiết</span>
                        <i className="ms-1 fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </>
    )
}
