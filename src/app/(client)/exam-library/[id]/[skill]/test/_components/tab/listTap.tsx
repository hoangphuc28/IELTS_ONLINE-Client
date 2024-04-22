'use client'
import IMiniTest from '@/src/app/(client)/exam-library/interfaces/IMiniTest'
import ComponentTabItem from './tabItem'

export default function ComponentListTap({ data }: { data: IMiniTest }) {
    return (
        <>
            <section className="h-full flex items-center gap-4 px-3">
                {data.parts.map((part, index) => (
                    <ComponentTabItem
                        data={part}
                        index={index}
                        questionIndex={(() => {
                            if (index === 0) return 1
                            return data.parts.reduce((total, e, i) => {
                                if (i < index) total += e.groups.length
                                return total
                            }, 1)
                        })()}
                        key={'exam-library-test-' + index}
                    />
                ))}
            </section>
        </>
    )
}
