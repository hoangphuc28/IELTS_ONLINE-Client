import Link from 'next/link'
import IHistory from '../interfaces/IHistory'
import HistoryItem from './item'

export default function ComponentHistory({ data }: { data: Array<IHistory> }) {
    return (
        <>
            <section className="flex flex-col gap-1 bg-white px-2 py-2 rounded">
                <div className="grid grid-cols-12 gap-x-2">
                    <p className="col-span-3 border-r font-bold">Thời gian</p>
                    <p className="col-span-7 border-r font-bold">Tên bài kiểm tra</p>
                    <p className="col-span-1 text-center font-bold">Điểm</p>
                </div>

                {data.map((history) => (
                    <HistoryItem time={history.time} name={history.name} grade={history.grade} />
                ))}

                <section className="flex justify-center py-2">
                    <nav aria-label="Page navigation example">
                        <ul className="flex items-center -space-x-px h-8 text-sm">
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Previous</span>
                                    <i className="fa-solid fa-angle-left"></i>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    aria-current="page"
                                    className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                >
                                    3
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    4
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    5
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Next</span>
                                    <i className="fa-solid fa-angle-right"></i>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
            </section>
        </>
    )
}
