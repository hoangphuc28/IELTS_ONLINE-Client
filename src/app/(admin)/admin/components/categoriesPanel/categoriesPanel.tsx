'use client'
import Image from 'next/image'
import "@admin/styles/components/_cover.scss"
import PlusFolder from '@/public/admin/svg/folder-plus-svgrepo-com.svg'
import '@admin/styles/components/categoriesPanel.scss'
import Portlet from './portlet'
interface Props {
    dataPanel: {
        text: string
        categories: Category[]
    }
}
interface Category {
    id: String,
    title: String
}
export default function CategoriesPanel(props: Props) {
    return (
        <div className="categories-panel">
            <div className="cover">
                <div className="panel-top">
                <div className="title">{props.dataPanel.text} categories</div>
                    <Image src={PlusFolder} alt="folder-icon" />
                </div>
              <Portlet categories={props.dataPanel.categories}/>

             
            </div>
        </div>
    )
}
