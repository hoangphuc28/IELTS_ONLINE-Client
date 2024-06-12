'use client'
import BtnQuickAction from '../components/button/btnQuickAction'
import PlusIcon from '@/public/admin/img/plus.png'
import DocumentIcon from '@/public/admin/img/document-icon.png'
import StudentIcon from '@/public/admin/img/student-icon2.png'
import routes from '../../lib/routes/routes'

export default function QuickActions() {
    return (
        <div className="quickAction">
            <div className="cover">
                <div className="title">Quick Actions</div>
                <div className="action-container">
                    <BtnQuickAction
                        href={`${routes.exams}/create/basic-information`}
                        btnData={{ text: 'Add new exam', icon: PlusIcon, color: 'blue' }}
                    />
                    <BtnQuickAction
                        href="/admin/questions/import"
                        btnData={{ text: 'Import questions', icon: DocumentIcon, color: 'blue' }}
                    />
                    <BtnQuickAction
                        href="/admin/questions/import"
                        btnData={{ text: 'Add questions', icon: DocumentIcon, color: 'blue' }}
                    />
                </div>
            </div>
        </div>
    )

    function handleClickNewExam() {}
}
