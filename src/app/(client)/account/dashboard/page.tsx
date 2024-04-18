import HightChart from './_components/charts/highChart'
import ComponentOverallAssessment from './_components/overallAssessment'

export default function Page() {
    return (
        <>
            <section className="flex flex-col gap-5">
                <ComponentOverallAssessment />
                <section>
                    <h2 className="">Đánh giá tổng quan</h2>
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
            </section>
        </>
    )
}
