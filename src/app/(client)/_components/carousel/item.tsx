import { CSSProperties } from 'react'

export default function CarouselItem({
    children,
    className,
    style,
}: {
    children: React.ReactNode
    className?: string
    style?: CSSProperties
}) {
    return (
        <>
            <div
                className={`hidden duration-700 ease-in-out ${className}`}
                style={style}
                data-carousel-item
            >
                {children}
            </div>
        </>
    )
}
