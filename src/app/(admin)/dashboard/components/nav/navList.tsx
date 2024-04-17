'use client'
import HomeIcon from "@/public/admin/svg/home.svg";
import ExamIcon from "@/public/admin/svg/exam.svg";
import QuestionIcon from "@/public/admin/svg/question.svg";
import StudentIcon from "@/public/admin/svg/student.svg";
import LogoutIcon from "@/public/admin/svg/logout.svg";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import "../../styles/nav/list.scss"
import Link from "next/link";
export default function NavList() {
    const pathname = usePathname()
    return (
        <div className="nav-list">
            <ul>
                <li className="nav-item">
                    <Link className={`${pathname === '/dashboard' && 'selected'}`} href="/dashboard">
                        <div>
                            <Image src={HomeIcon} alt="home-icon" />
                            <span>
                                Dashboard
                            </span>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`${pathname === '/dashboard/exams' && 'selected'}`} href="/dashboard/exams">
                        <div>
                        <Image src={ExamIcon} alt="exam-icon" />
                        <span>
                            Exams
                        </span>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`${pathname === '/dashboard/questions' && 'selected'}`} href="/dashboard/questions">
                        <div>
                        <Image src={QuestionIcon} alt="question-icon" />
                        <span>
                            Questions
                        </span>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`${pathname === '/dashboard/students' && 'selected'}`} href="/dashboard/students">
                        <div>
                        <Image src={StudentIcon} alt="question-icon" />
                        <span>
                            Students
                        </span>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/">
                        <div>
                        <Image src={LogoutIcon} alt="question-icon" />
                        <span>
                            Logout
                        </span>
                        </div>
                    </Link>
                </li>
           </ul>
        </div>
    )
}