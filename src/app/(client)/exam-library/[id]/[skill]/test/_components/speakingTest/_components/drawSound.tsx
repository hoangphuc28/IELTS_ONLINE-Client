'use client'

import { CSSProperties, useEffect } from 'react'

export function ComponentDrawSound({
    isDraw,
    analyser,
    style,
}: {
    isDraw: boolean
    analyser: AnalyserNode
    style?: CSSProperties
}) {
    useEffect(() => {
        const canvas = document.getElementById('visualizer') as HTMLCanvasElement
        if (!canvas) return
        handleDraw(canvas)
    }, [])

    return isDraw ? <canvas id="visualizer" style={style}></canvas> : <></>

    function handleDraw(canvas: HTMLCanvasElement) {
        if (!isDraw) return
        const ctx = canvas.getContext('2d')
        draw()
        function draw() {
            if (!ctx) return
            const bufferLength = analyser.frequencyBinCount
            const dataArray = new Uint8Array(bufferLength)
            analyser.getByteTimeDomainData(dataArray)

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw waveform
            ctx.lineWidth = 2
            ctx.strokeStyle = 'violet'
            ctx.beginPath()
            const sliceWidth = canvas.width / bufferLength
            let x = 0
            for (let i = 0; i < bufferLength; i++) {
                const v = dataArray[i] / 128.0 // Normalize to [0, 1]
                const y = (v * canvas.height) / 2
                if (i === 0) {
                    ctx.moveTo(x, y)
                } else {
                    ctx.lineTo(x, y)
                }
                x += sliceWidth
            }
            ctx.stroke()

            requestAnimationFrame(draw)
        }
    }
}
