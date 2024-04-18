import Link from 'next/link'
import HightChart from '../dashboard/_components/charts/highChart'
import HistoryItem from './_components/item'
import IHistory from './interfaces/IHistory'
import ComponentHistory from './_components/listItem'

export default function Page() {
    const histories: Array<IHistory> = [
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

                    <ComponentHistory data={histories} />
                </section>
            </section>
        </>
    )
}
