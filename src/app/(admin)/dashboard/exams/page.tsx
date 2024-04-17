'use client'
import CategoriesPanel from "../components/categoriesPanel/categoriesPanel";
import { useRef } from 'react';
import ExamPanel from "./examPanel";
import "../styles/pages/exams.scss"
import Resizer from "../components/resizer";
export default function Page() {
    const examLeft = useRef<HTMLDivElement>(null);

    return (
        <div className="exam">
            <div ref={examLeft} className="exam-left">
                <CategoriesPanel dataPanel={{ text: "Exam", categories: [] }} />
            </div>
          <div style={{padding: "17px 0"}} className="exam-middle">
            <Resizer forwardedRef={examLeft}/>
          </div>
            <div className="exam-right">
                <ExamPanel />
            </div>
        </div>
    )
}