'use client'
import { CSSProperties } from 'react'

export default function LayoutCenter({
    children,
    className = '',
    style,
}: {
    children: React.ReactNode
    className?: string
    style?: CSSProperties
}) {
    return (
        <>
            <section className={`layout-center ${className}`} style={style}>
                <div className="container">{children}</div>
            </section>
        </>
    )
}
