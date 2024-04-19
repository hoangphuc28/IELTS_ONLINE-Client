'use client'
import BtnQuickAction from "../components/button/btnQuickAction"
import PlusIcon from "@/public/admin/img/plus.png"
import DocumentIcon from "@/public/admin/img/document-icon.png"
import StudentIcon from "@/public/admin/img/student-icon2.png"


export default function QuickActions() {
    return (
        <div className="quickAction">
            <div className="cover">
                <div className="title">
                    Quick Actions
                </div>
                <div className="action-container">
                    <BtnQuickAction btnData={{ text: "Add new exam", icon: PlusIcon, color: "blue" }} />
                    <BtnQuickAction btnData={{ text: "Import questions", icon: DocumentIcon, color: "blue" }} />
                    <BtnQuickAction btnData={{ text: "Add students", icon: StudentIcon, color: "blue" }} />
                </div>
            </div>
        </div>
    )
}