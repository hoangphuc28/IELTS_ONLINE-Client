'use client'
import React, { CSSProperties, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import ICarouselData from '../../(home)/interfaces/ICarouselData'
import dynamic from 'next/dynamic'

// const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: true })

export default function CarouselItem({
    className,
    style,
    data,
}: {
    className?: string
    style?: CSSProperties
    data: ICarouselData
}) {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <>
            <div
                // key={'-abc-' + (new Date().getTime() * Math.random()).toString()}
                // key={data.type + '-' + data.url + (new Date().getTime() * Math.random()).toString()}
                className={`hidden duration-700 ease-in-out${className ? ` ${className}` : ''}`}
                style={style}
                data-carousel-item
            >
                <div
                    className="w-full h-full bg-img-center"
                    style={{
                        background: `url(${data.url}), url(../../../../../../assets/img/carousel-default.svg)`,
                    }}
                >
                    {data.url.length > 0 && data.type == 'video' && (
                        <>
                            {isClient ? (
                                <ReactPlayer
                                    url={data.url}
                                    width="100%"
                                    height="100%"
                                    playing={true}
                                    suppressHydrationWarning
                                    loop={true}
                                />
                            ) : (
                                ''
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
