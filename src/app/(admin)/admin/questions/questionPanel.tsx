'use client'
import "@admin/styles/components/_cover.scss"
import PlustIcon from "@/public/admin/img/icons8-plus-24.png";
import Link from "next/link";
import Image from "next/image";
import Search from "../components/search/search";
import SelectMenu from "../components/selectMenu/SelectMenu";
import "@admin/styles/components/_tableToolbar.scss";
import "@admin/styles/components/_button.scss"
import "@admin/styles/globals.css"
import ListParts from "./listParts";
export default function QuestionPanel() {
    return (
        <div className="cover">
           
        <div className="question-contain">
            <div className="table-toolbar">
                <div className="left flex" >
                    <Link className="btn-style3 mr-2.5" href="/admin/questions/create">
                        <Image src={PlustIcon} alt="plus-icon"/>
                        New Part
                    </Link>
                    <Link style={{display: "flex", justifyContent: "center", alignItems: "center"}} className="btn-style4" href="/admin/questions/import">
                    <svg style={{width: "20px", height: "20px", marginRight: "5px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#36aafd" d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                       <div>Import parts</div>
                    </Link>
                </div>
                <div className="right">
                    <div className="flex">
                    <Search/>
                    <SelectMenu/>
                    </div>
                </div>
            </div>
            <ListParts/>
        </div>
    </div>
    )
}