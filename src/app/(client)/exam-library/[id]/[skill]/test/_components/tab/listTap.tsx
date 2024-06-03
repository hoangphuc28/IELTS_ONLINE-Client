'use client'
import IMiniTest from '@/src/utils/shares/interfaces/IMiniTest'
import ComponentTabItem from './tabItem'
import IPart from '@/src/utils/shares/interfaces/IPart'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAppShareSelector } from '@/src/app/(client)/_lib/redux/hooks'
import { testSkillSelectors } from '@/src/app/(client)/_lib/redux/reducers/test-skill.reducer'

export default function ComponentListTap({ data }: { data: IMiniTest }) {
    const params = useParams<{ skill: string }>()
    const router = useRouter()
    const [isShow, setIsShow] = useState<boolean>(false)
    const startIndexesEveryPart = useAppShareSelector((state) =>
        testSkillSelectors.GetIndexesEveryPart(state),
    )
    useEffect(() => {
        // const data = localStorage.getItem('startIndexEveryPart')
        // if (!data) {
        //     console.log('Data groups not found')
        //     router.push('/404')
        // }
        // setStartIndexEveryPart(JSON.parse(data!))
        setIsShow(true)
    }, [])
    return (
        <>
            <section
                data-skill-test={params.skill}
                className="h-full flex items-center gap-4 px-3 overflow-x-auto overflow-y-hidden scrollbar scrollbar-horizontal"
            >
                {isShow &&
                    startIndexesEveryPart.length > 0 &&
                    data.parts.map((part: IPart, index: number) => (
                        <ComponentTabItem
                            data={part}
                            index={index}
                            questionIndex={startIndexesEveryPart[index]}
                            key={'exam-library-test-' + index}
                        />
                    ))}
            </section>
        </>
    )
}
