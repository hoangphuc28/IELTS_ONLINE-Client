import Link from 'next/link'
import { CSSProperties } from 'react'
import ITest from '@/src/utils/shares/interfaces/ITest'

export default function ComponentCard({
    className,
    style,
    data,
}: {
    className?: string
    style?: CSSProperties
    data: ITest
}) {
    const url = '/exam-library/' + data.code + '/overview'
    return (
        <>
            <Link
                href={url}
                className={
                    'relative mb-4 max-w-sm px-4 py-4 bg-white border border-gray-200 rounded shadow flex flex-col items-center gap-2' +
                    (className ? ' ' + className : '')
                }
                style={style}
            >
                <div
                    className="w-48 h-48 rounded-lg bg-img-center"
                    style={{
                        background: `url(${data.src}), url(../../../../assets/img/src-test-default.jpg)`,
                    }}
                ></div>
                <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.name}
                </h5>
                <p
                    className="w-full h-[54px] text-ellipsis overflow-hidden text-base font-normal text-gray-700"
                    style={{
                        WebkitBoxOrient: 'vertical',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                    }}
                >
                    {data?.title ? data.title : ''}
                </p>
                <section className="w-full text-right">
                    <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-400 rounded hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300">
                        <span>Làm bài</span>
                        <i className="ms-1 fa-solid fa-arrow-right"></i>
                    </span>
                </section>

                {/* {data.hasPassword && (
                    <>
                        <div className="absolute pointer-events-none top-0 left-0 w-full h-full bg-[#000] opacity-[0.3] rounded"></div>
                        <div className="pointer-events-none absolute top-[-5px] right-[-5px] flex items-center justify-center rounded-full shadow-lg">
                            <i className="fa-solid fa-key text-yellow-300 text-2xl"></i>
                        </div>
                    </>
                )} */}
            </Link>
        </>
    )
}
