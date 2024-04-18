import Link from 'next/link'
import HightChart from '../dashboard/_components/charts/highChart'
import HistoryItem from './_components/item'

export default function Page() {
    const histories = [
        {
            time: '12:12:00 - 12/12/1997',
            name: 'Kiểm thử chất lượng đầu vào IELTS',
            grade: 8.9,
        },
        {
            time: '12:12:00 - 12/12/1997',
            name: 'Kiểm thử chất lượng đầu vào IELTS',
            grade: 8.9,
        },
        {
            time: '12:12:00 - 12/12/1997',
            name: 'Kiểm thử chất lượng đầu vào IELTS',
            grade: 8.9,
        },
        {
            time: '12:12:00 - 12/12/1997',
            name: 'Kiểm thử chất lượng đầu vào IELTS',
            grade: 8.9,
        },
    ]
    return (
        <>
            <section>
                <section>
                    <h2>Đánh giá tổng quan</h2>
                    <HightChart
                        title="Điểm số"
                        props={{}}
                        series={[
                            {
                                name: 'Điểm số Listening',
                                color: 'red',
                                dataLabels: [{ x: 1, y: 2 }],
                                type: 'line',
                                data: [
                                    { x: 1, y: 4 },
                                    { x: 2, y: 3 },
                                    { x: 4, y: 3 },
                                    { x: 6, y: 4 },
                                    { x: 8, y: 5 },
                                ],
                            },
                            {
                                name: 'Điểm số Reading',
                                color: 'blue',
                                dataLabels: [{ x: 1, y: 2 }],
                                type: 'line',
                                data: [
                                    { x: 1, y: 5 },
                                    { x: 2, y: 3 },
                                    { x: 4, y: 4 },
                                    { x: 6, y: 6 },
                                    { x: 8, y: 9 },
                                ],
                            },
                            {
                                name: 'Điểm số Writing',
                                color: 'black',
                                dataLabels: [{ x: 1, y: 2 }],
                                type: 'line',
                                data: [
                                    { x: 1, y: 3 },
                                    { x: 2, y: 2 },
                                    { x: 4, y: 4 },
                                    { x: 6, y: 6 },
                                    { x: 8, y: 7 },
                                ],
                            },
                            {
                                name: 'Điểm số Speaking',
                                color: 'violet',
                                dataLabels: [{ x: 1, y: 2 }],
                                type: 'line',
                                data: [
                                    { x: 1, y: 1 },
                                    { x: 2, y: 2 },
                                    { x: 4, y: 3 },
                                    { x: 6, y: 4 },
                                    { x: 8, y: 5 },
                                ],
                            },
                        ]}
                    />
                </section>
                <section>
                    <h2>Lịch sử</h2>

                    <section className="flex flex-col gap-1 bg-white px-2 py-2 rounded">
                        <div className="grid grid-cols-12 gap-x-2">
                            <p className="col-span-3 border-r font-bold">Thời gian</p>
                            <p className="col-span-7 border-r font-bold">Tên bài kiểm tra</p>
                            <p className="col-span-1 text-center font-bold">Điểm</p>
                        </div>

                        {histories.map((history) => (
                            <HistoryItem
                                time={history.time}
                                name={history.name}
                                grade={history.grade}
                            />
                        ))}

                        <section className="flex justify-center py-2">
                            <nav aria-label="Page navigation example">
                                <ul className="flex items-center -space-x-px h-8 text-sm">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            <span className="sr-only">Previous</span>
                                            <svg
                                                className="w-2.5 h-2.5 rtl:rotate-180"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 6 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M5 1 1 5l4 4"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            2
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            aria-current="page"
                                            className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                        >
                                            3
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            4
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            5
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            <span className="sr-only">Next</span>
                                            <svg
                                                className="w-2.5 h-2.5 rtl:rotate-180"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 6 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="m1 9 4-4-4-4"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}
