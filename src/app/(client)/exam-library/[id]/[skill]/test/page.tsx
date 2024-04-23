'use client'
import LayoutCenter from '@client/_components/layoutCenter'
import ComponentTestFooter from './_components/footer'

import test from '@clientExamLibrary/[id]/data'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import according from '@clientExamLibrary/[id]/[skill]/utils/according'
import toQuestion from '@clientExamLibrary/[id]/[skill]/utils/toQuestion'

export default function Page() {
    const params = useParams<{ id: string; skill: string }>()
    const router = useRouter()
    const targetSkillTest = test.details.find((detailSkill) => detailSkill.name === params.skill)
    if (!targetSkillTest) return router.push('/404')
    useEffect(() => {
        according()
        toQuestion()
    }, [])
    return (
        <>
            <main className="min-h-[200vh]">
                <LayoutCenter>
                    <h1>Test</h1>
                </LayoutCenter>
            </main>
            <ComponentTestFooter data={targetSkillTest} />
        </>
    )
}
