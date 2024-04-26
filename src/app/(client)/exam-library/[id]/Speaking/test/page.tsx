'use client'
import ComponentTestHeader from '@clientExamLibrary/[id]/[skill]/test/_components/header'
import { useRouter } from 'next/navigation'
import test from '@clientExamLibrary/[id]/data'
import ComponentManagerSpeakingItem from '../_components/managerSpeakingItem'

export default function Page() {
    const router = useRouter()
    const targetSkillTest = test.details.find((detailSkill) => detailSkill.name === 'Speaking')
    if (!targetSkillTest) return router.push('/404')

    return (
        <>
            <ComponentTestHeader data={targetSkillTest} />
            <ComponentManagerSpeakingItem data={targetSkillTest} />
        </>
    )
}
