'use client'
import IMiniTest from '@/src/app/(client)/exam-library/interfaces/IMiniTest'
import ComponentTabItem from './tabItem'
import IPart from '@/src/app/(client)/exam-library/interfaces/IPart'
import IGroup from '@/src/app/(client)/exam-library/interfaces/IGroup'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ComponentListTap({ data }: { data: IMiniTest }) {
    const params = useParams<{ skill: string }>()
    const router = useRouter()
    const [isShow, setIsShow] = useState<boolean>(false)
    let [startIndexEveryPart, setStartIndexEveryPart] = useState<number[]>([])
    useEffect(() => {
        const data = localStorage.getItem('startIndexEveryPart')
        if (!data) {
            console.log('Data groups not found')
            router.push('/404')
        }
        setStartIndexEveryPart(JSON.parse(data!))
        setIsShow(true)
    }, [])
    return (
        <>
            <section
                data-skill-test={params.skill}
                className="h-full flex items-center gap-4 px-3 overflow-x-auto overflow-y-hidden scrollbar scrollbar-horizontal"
            >
                {isShow &&
                    startIndexEveryPart.length > 0 &&
                    data.parts.map((part: IPart, index: number) => (
                        <ComponentTabItem
                            data={part}
                            index={index}
                            questionIndex={startIndexEveryPart[index]}
                            key={'exam-library-test-' + index}
                        />
                    ))}
            </section>
        </>
    )
}
