'use client'
import '@admin/styles/components/_input.scss'
import '@admin/styles/components/_cover.scss'
import '@admin/styles/components/_text.scss'
import '@admin/styles/pages/createExam.scss'
import { usePathname, useRouter } from 'next/navigation'
export default function CreateExamLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <div className="create-exam">
            <div className="cover">
                <div className="header-container">
                    <div className="title">Create An Exam</div>
                    <ul>
                        <li
                            onClick={() => router.push('/admin/exams/create/basic-information')}
                            className={`${pathname === '/admin/exams/create/basic-information' ? 'selected' : ''}`}
                        >
                            <div className="circle">1</div>
                            <span>Basic information</span>
                            <div className="line" />
                        </li>
                        <li
                            onClick={() => router.push('/admin/exams/create/add-parts')}
                            className={`${pathname === '/admin/exams/create/add-parts' ? 'selected' : ''}`}
                        >
                            <div className="circle">2</div>
                            <span>Add questions</span>
                            <div className="line" />
                        </li>
                        <li
                            onClick={() => router.push('/admin/exams/create/custom-setting')}
                            className={`${pathname === '/admin/exams/create/custom-setting' ? 'selected' : ''}`}
                        >
                            <div className="circle">3</div>
                            <span>Customized settings</span>
                            <div className="line" />
                        </li>
                        <li
                            onClick={() => router.push('/admin/exams/create/finish')}
                            className={`${pathname === 'finish' ? 'selected' : ''}`}
                        >
                            <div className="circle">4</div>
                            <span>Finish</span>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}
