'use client'
import React, { CSSProperties, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import ICarouselData from '../../(home)/interfaces/ICarouselData'
import dynamic from 'next/dynamic'
import ISourceData from '../../(home)/interfaces/ISourceData'
import ComponentMedia from '../media'

// const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: true })

export default function CarouselItem({
    className,
    style,
    data,
}: {
    className?: string
    style?: CSSProperties
    data: ISourceData
}) {
    return (
        <>
            <div
                // key={'-abc-' + (new Date().getTime() * Math.random()).toString()}
                // key={data.type + '-' + data.url + (new Date().getTime() * Math.random()).toString()}
                className={`hidden duration-700 ease-in-out ${className ? ` ${className}` : ''}`}
                style={style}
                data-carousel-item
            >
                <ComponentMedia data={data} />
            </div>
        </>
    )
}
