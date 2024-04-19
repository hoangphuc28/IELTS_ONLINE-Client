'use client'
import { useState } from "react"
import "@admin/styles/components/_portlet.scss"
import Search from "../search/search"
import Folder from '@/public/admin/svg/folder.svg'
import Image from 'next/image'

interface Category {
    id: String,
    title: String
}
interface PortletProps {
    categories: Category[];
}
export default function Portlet({ categories }: PortletProps) {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id)

    return (
        <div className="portlet">
        <div className="portlet-top">
            <div style={{ marginTop: '20px' }}>
                <Search />
            </div>
        </div>
        <div className="portlet-bottom">
            <div className="portlet-contain">
                {categories?.map((item, index) => (
                    <div onClick={() => {
                        setSelectedCategory(item.id)
                    }} key={index} className={`portlet-item ${selectedCategory === item.id && "selected"}`}>
                        <Image src={Folder} alt="folder" />
                        <div className="text">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}