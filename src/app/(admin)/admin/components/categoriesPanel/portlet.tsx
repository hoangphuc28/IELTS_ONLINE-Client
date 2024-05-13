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

export default function Portlet() {
    const dispatch = useDispatch()
    const pagination: PaginationInterface = useSelector((state: any) => state.part.pagination)
    const [selected, setSelected] = useState(pagination.filter.skill)

    return (
        <div className="portlet">
            <div className="portlet-top">
                <div style={{ marginTop: '20px' }}>{/* <Search /> */}</div>
            </div>
            <div className="portlet-bottom">
                <div className="portlet-contain">
                    <div
                        onClick={() => {
                            setSelected('All')
                            const newPagination = _.cloneDeep(pagination)
                            newPagination.filter.skill = ''
                            newPagination.page = 1
                            dispatch(setPartPagination(newPagination))
                        }}
                        className={`portlet-item ${selected === 'All' && 'selected'}`}
                    >
                        <Image src={Folder} alt="folder" />
                        <div className="text">All</div>
                    </div>
                    {Object.keys(SkillEnum).map((key) => (
                        <div
                            onClick={() => {
                                setSelected(key)
                                const newPagination = _.cloneDeep(pagination)
                                newPagination.filter.skill = key
                                newPagination.page = 1
                                dispatch(setPartPagination(newPagination))
                            }}
                            key={key} // Assertion to React.ReactText
                            className={`portlet-item ${selected === key && 'selected'}`}
                        >
                            <Image src={Folder} alt="folder" />
                            <div className="text">{SkillEnum[key as keyof typeof SkillEnum]}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
