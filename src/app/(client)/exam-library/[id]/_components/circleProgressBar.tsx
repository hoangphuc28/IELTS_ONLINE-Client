'use client'

import { SyntheticEvent, useEffect, useRef } from 'react'

export default function CircleProgressBar({
    // size,
    strokeWidth,
    progress,
    stroke,
    bgProgress,
}: {
    // size: number
    strokeWidth: number
    progress: number
    stroke?: string
    bgProgress?: string
}) {
    const svg = useRef<SVGSVGElement>(null)
    // let halfSize = size / 2
    // let radius = (size - strokeWidth) / 2
    // let circumFerence = radius * Math.PI * 2
    // let dash = (progress * circumFerence) / 100
    useEffect(() => {
        const svgDOM: SVGSVGElement | null = svg.current
        if (!svgDOM) return
        const circles = svgDOM.querySelectorAll('circle')
        if (circles.length <= 0) return
        const height = svgDOM.getBoundingClientRect().height
        svgDOM.setAttribute('width', height.toString() + 'px')
        // #set radius
        circles.forEach((circle) => {
            circle.setAttribute('r', ((height - strokeWidth) / 2).toString())
        })
        // #endset redius

        // set stroke dash array
        const progressBar = circles[1].classList.contains('fg') ? circles[1] : circles[0]
        const circumFerence = progressBar.r.baseVal.value * Math.PI * 2
        const dash = (progress * circumFerence) / 100
        progressBar.style.strokeDasharray = `${dash} ${circumFerence - dash}`
    }, [])

    return (
        <>
            <svg ref={svg} width="0" className="h-full circular-progress rounded-full shadow-xl">
                <circle
                    className={`stroke-[${bgProgress || '#dddddd50'}]`}
                    cx="50%"
                    cy="50%"
                    strokeWidth={strokeWidth}
                    fill="none"
                ></circle>
                <circle
                    cx="50%"
                    cy="50%"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeLinecap="round"
                    className={`origin-center rotate-[-90deg] fg`}
                    stroke={stroke || 'blue'}
                ></circle>
            </svg>
        </>
    )
}
