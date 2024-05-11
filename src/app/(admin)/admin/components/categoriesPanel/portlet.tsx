'use client'
import { useState } from 'react'
import '@admin/styles/components/_portlet.scss'
import Search from '../search/search'
import Folder from '@/public/admin/svg/folder.svg'
import Image from 'next/image'
import { SkillEnum } from '../../parts/type/enum'
import { useDispatch, useSelector } from 'react-redux'
import { PaginationInterface } from '../../../lib/type/pagination'
import _ from 'lodash'
import { setPartPagination } from '../../../lib/redux/reducer/partReducer'

interface Props {
    skills: SkillEnum
}

export default function Portlet({ skills }: Props) {
    const dispatch = useDispatch()
    const pagination: PaginationInterface = useSelector((state) => state.part.pagination)
    const [selected, setSelected] = useState(pagination.filter.skill)

    return (
        <div className="portlet">
            <div className="portlet-top">
                <div style={{ marginTop: '20px' }}>{/* <Search /> */}</div>
            </div>
            <div className="portlet-bottom">
                <div className="portlet-contain">
                    <div onClick={() => {
                        setSelected('All')
                        const newPagination = _.cloneDeep(pagination)
                        newPagination.filter.skill = ''
                        dispatch(setPartPagination(newPagination))
                    }} className={`portlet-item ${selected === 'All' && "selected"}`}>
                        <Image src={Folder} alt="folder" />
                        <div className="text">All</div>
                    </div>
                    {Object.keys(skills).map((key) => (
                        <div onClick={() => {
                            setSelected(key)
                            const newPagination = _.cloneDeep(pagination)
                            newPagination.filter.skill = key
                            dispatch(setPartPagination(newPagination))
                        }} key={key} className={`portlet-item ${selected === key && "selected"}`}>
                            <Image src={Folder} alt="folder" />
                            <div className="text">{skills[key as keyof typeof skills]}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
