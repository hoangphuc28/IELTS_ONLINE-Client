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
import routes from "../../lib/routes/routes";
export default function NavList() {
    const pathname = usePathname()
    return (
        <div className="nav-list">
            <ul>
                <li className="nav-item">
                    <Link className={`${pathname === `${routes.dashBoard}` && 'selected'}`} href={`${routes.dashBoard}`}>
                        <div>
                            <Image src={HomeIcon} alt="home-icon" />
                            <span>
                                Dashboard
                            </span>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`${pathname === `${routes.exams}` && 'selected'}`} href={`${routes.exams}`}>
                        <div>
                        <Image src={ExamIcon} alt="exam-icon" />
                        <span>
                            Exams
                        </span>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`${pathname === `${routes.parts}` && 'selected'}`} href={`${routes.parts}`}>
                        <div>
                        <Image src={QuestionIcon} alt="question-icon" />
                        <span>
                            Parts
                        </span>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`${pathname === `${routes.accounts}` && 'selected'}`} href={`${routes.accounts}`}>
                        <div>
                        <Image src={StudentIcon} alt="question-icon" />
                        <span>
                             Accounts
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