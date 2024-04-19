'use client'
import "@admin/styles/components/_select.scss"
import "@admin/styles/components/_form.scss"
import "@admin/styles/components/_cover.scss";
import ArrowDownIcon from "@/public/admin/img/icons8-arrow-down-50.png";
import Image from "next/image";
import { useState } from "react";

export default function SelectMenu() {
    const [openMenu, setOpenMenu] = useState(false)
    const [height, setHeight] = useState('0px')
    const changeHeight = async () => {
        const updatedOpenMenu = !openMenu;
        setOpenMenu(updatedOpenMenu);
    
        if (updatedOpenMenu) {
            console.log(1);
            setHeight("100px");
        } else {
            console.log(2);
            setHeight("0px");
        }
    };
    return (
        <div className={`select-box ${openMenu ? "select-open" : ""}`}>
            <div className="select-header form-control" onClick={changeHeight}>
                <div className="text">Exam Status</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>
            </div>
            <div style={{height: height}} className={`select-content cover`}>
                <ul>
                    <li>All Status</li>
                    <li>Completed</li>
                </ul>
            </div>
        </div>
    )
}