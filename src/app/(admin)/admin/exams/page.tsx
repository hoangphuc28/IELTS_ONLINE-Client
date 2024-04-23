'use client'
import CategoriesPanel from "../components/categoriesPanel/categoriesPanel";
import { useRef } from 'react';
import ExamPanel from "./examPanel";
import "@admin/styles/pages/layoutTable.scss"
import Resizer from "../components/resizer";
interface Category {
    id: String,
    title: String
}
export default function Page() {
    let categories: Category[] = [{id: "1", title: "All categories"}, {id: "2", title: "Default categories"}]
    const examLeft = useRef<HTMLDivElement>(null);

    return (
        <div className="layout-table">
            <div ref={examLeft} className="layout-table-left">
                <CategoriesPanel dataPanel={{ text: "Exam", categories}} />
            </div>
          <div style={{padding: "17px 0"}} className="table-middle">
            <Resizer max={800} forwardedRef={examLeft}/>
          </div>
            <div className="layout-table-right">
                <ExamPanel />
            </div>
        </div>
    )
}