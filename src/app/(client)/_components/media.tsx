'use client'

import { CSSProperties, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import ISourceData from '@client/(home)/interfaces/ISourceData'
import { sourceType } from '@client/(home)/interfaces/ISourceData'

export default function ComponentMedia({
    data,
}: {
    data: ISourceData
    className?: string
    style?: CSSProperties
}) {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>
            <div
                className="w-full h-full bg-img-center flex items-center justify-center"
                style={{
                    background: `url(${
                        (data.type == sourceType.image || data.type == sourceType.hybrid) &&
                        data.src
                    }), #906ff8bf`,
                }}
            >
                {data.type == sourceType.video && data.src.length > 0 && (
                    <>
                        {isClient ? (
                            <ReactPlayer
                                url={data.src}
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

                {(data.type == sourceType.text || data.type == sourceType.hybrid) &&
                    data.content &&
                    data.content.length > 0 && (
                        <>
                            <section className="pointer-events-none font-bold text-2xl text-white">
                                {data?.content}
                            </section>
                        </>
                    )}
            </div>
        </>
    )
}
