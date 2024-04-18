'use client'
import React, { useRef } from 'react'
import * as HighCharts from 'highcharts'
import HighChartsReact from 'highcharts-react-official'

export default function HightChart({
    title,
    series,
    props,
}: {
    title: string
    series: HighCharts.SeriesOptionsType[]
    props: HighChartsReact.Props
}) {
    const chartComponentRef = useRef<HighChartsReact.RefObject>(null)
    const options: HighCharts.Options = {
        title: {
            text: title,
        },
        xAxis: [{ title: { text: 'Tháng 3', style: { fontSize: '18px' } } }],
        yAxis: [{ max: 10, title: { text: 'Điểm', style: { fontSize: '18px' } } }],
        series: series,
    }
    return (
        <>
            <HighChartsReact
                highcharts={HighCharts}
                ref={chartComponentRef}
                options={options}
                {...props}
            />
        </>
    )
}
