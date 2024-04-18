'use client'
import React, { useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import "./styles/components/_cover.scss"

const options: Highcharts.Options = {
    title: {
        text: 'Exam Taken Times'
    },
    series: [{
        type: 'line',
        data: [1, 2, 3]
    }]
};
export default function Charts(props: HighchartsReact.Props) {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    return (
        <div className="charts">
            <div className='cover'>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                    ref={chartComponentRef}
                    {...props}
                />
            </div>
        </div>
    )
}