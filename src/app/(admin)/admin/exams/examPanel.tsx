'use client'
import "@admin/styles/components/_cover.scss"
import PlustIcon from "@/public/admin/img/icons8-plus-24.png";
import Link from "next/link";
import Image from "next/image";
import Search from "../components/search/search";
import SelectMenu from "../components/selectMenu/SelectMenu";
import "@admin/styles/components/_tableToolbar.scss";
import ExamsList from "./examsList";
export default function ExamPanel() {
    return (
        <div className="cover">
           
            <div className="exams-contain">
                <div className="table-toolbar">
                    <div className="left">
                        <Link href="/admin/exams/create">
                            <Image src={PlustIcon} alt="plus-icon"/>
                            New exam
                        </Link>
                    </div>
                    <div className="right">
                        <div className="flex">
                        <Search/>
                        <SelectMenu/>
                        </div>
                    </div>
                </div>
                <ExamsList/>
            </div>
        </div>
    )
}