'use client'
import LayoutCenter from '@client/_components/layoutCenter'
import ComponentTestFooter from './_components/footer'

import test from '@clientExamLibrary/[id]/data'
import { useParams, useRouter } from 'next/navigation'

export default function Page() {
    const params = useParams<{ id: string; skill: string }>()
    const router = useRouter()
    const targetSkillTest = test.details.find((detailSkill) => detailSkill.name === params.skill)
    if (!targetSkillTest) return router.push('/404')
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
