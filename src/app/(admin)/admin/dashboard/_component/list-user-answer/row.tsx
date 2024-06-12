'use client'

export default function ComponentRow({
    values,
    className,
    children,
}: {
    values: string[]
    className?: string
    children?: React.ReactNode
}) {
    return (
        <section className={'px-2 grid grid-cols-12 gap-2 py-1 items-center ' + className}>
            <section className="col-span-1">{values[0]}</section>
            <section className="col-span-4 px-2">{values[1]}</section>
            <section className="col-span-4 px-2" style={{ borderLeft: '1px solid #cccccc80' }}>
                {values[2]}
            </section>
            <section className="col-span-2">{values[3]}</section>
            <section className="col-span-1">{children || values[4]}</section>
        </section>
    )
}
