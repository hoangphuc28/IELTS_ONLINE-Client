'use client'
import React, { useRef } from 'react'
import * as HighCharts from 'highcharts'
import HighChartsReact from 'highcharts-react-official'

export default function HightChart({
    title,
    series,
    props,
    xTitle,
    yTitle,
}: {
    title: string
    series: HighCharts.SeriesOptionsType[]
    props?: HighChartsReact.Props
    xTitle?: string
    yTitle?: string
}) {
    const propsConvert = props || {}
    const chartComponentRef = useRef<HighChartsReact.RefObject>(null)
    const xAxisOption: HighCharts.XAxisOptions = {}
    const options: HighCharts.Options = {
        title: {
            text: title,
        },
        xAxis: [{ title: { text: xTitle || '', style: { fontSize: '18px' } }, type: 'category' }],
        yAxis: [{ title: { text: yTitle || '', style: { fontSize: '18px' } } }],
        series: series,
    }
    return (
        <>
            <HighChartsReact
                highcharts={HighCharts}
                ref={chartComponentRef}
                options={options}
                {...propsConvert}
            />
        </>
    )
}
