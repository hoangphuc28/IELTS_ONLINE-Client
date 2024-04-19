'use client'
import HomeIcon from "@/public/admin/svg/home.svg";
import ExamIcon from "@/public/admin/svg/exam.svg";
import QuestionIcon from "@/public/admin/svg/question.svg";
import StudentIcon from "@/public/admin/svg/student.svg";
import LogoutIcon from "@/public/admin/svg/logout.svg";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import "@admin/styles/nav/list.scss"
import Link from "next/link";
export default function NavList() {
    const pathname = usePathname()
    return (
        <div className="nav-list">
            <ul>
                <li className="nav-item">
                    <Link className={`${pathname === '/admin/dashboard' && 'selected'}`} href="/admin/dashboard">
                        <div>
                            <Image src={HomeIcon} alt="home-icon" />
                            <span>
                                Dashboard
                            </span>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`${pathname === '/admin/exams' && 'selected'}`} href="/admin/exams">
                        <div>
                        <Image src={ExamIcon} alt="exam-icon" />
                        <span>
                            Exams
                        </span>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`${pathname === '/admin/questions' && 'selected'}`} href="/admin/questions">
                        <div>
                        <Image src={QuestionIcon} alt="question-icon" />
                        <span>
                            Questions
                        </span>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`${pathname === '/admin/students' && 'selected'}`} href="/admin/students">
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