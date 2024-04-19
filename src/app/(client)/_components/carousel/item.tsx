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
    keyName,
}: {
    className?: string
    style?: CSSProperties
    data: ICarouselData
    keyName: string
}) {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <>
            <div
                key={keyName}
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
