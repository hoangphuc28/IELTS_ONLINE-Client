'use client'
import "@admin/styles/components/_cover.scss"
import PlustIcon from "@/public/admin/img/icons8-plus-24.png";
import Link from "next/link";
import Image from "next/image";
import Search from "../components/search/search";
import SelectMenu from "../components/selectMenu/SelectMenu";
import "@admin/styles/components/_tableToolbar.scss";
import ExamsList from "./examsList";
import { Pagination } from "@mui/material";
import { Stack } from "@mui/system";
export default function ExamPanel() {
    return (
        <div className="cover">
           
            <div className="exams-contain">
                <div className="table-toolbar">
                    <div className="left">
                        <Link className="btn-style3" href="/admin/exams/create">
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
                <div className="pagination" style={{marginTop: "20px", display: "flex", justifyContent: "center"}}>
                <Stack spacing={2}>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
                </div>
            </div>
            
        </div>
    )
}