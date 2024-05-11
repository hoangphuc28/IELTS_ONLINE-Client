'use client'
import Image from 'next/image'
import "@admin/styles/components/_cover.scss"
import PlusFolder from '@/public/admin/svg/folder-plus-svgrepo-com.svg'
import '@admin/styles/components/categoriesPanel.scss'
import Portlet from './portlet'
import { SkillEnum } from '../../parts/type/enum'
interface Props {
    title: string
    skills: SkillEnum
}

export default function CategoriesPanel({title, skills}: Props) {
    return (
        <div className="categories-panel">
            <div className="cover">
                <div className="panel-top">
                <div className="title">{title}</div>
                    <Image src={PlusFolder} alt="folder-icon" />
                </div>
              <Portlet/>
            </div>
        </div>
    )
}
