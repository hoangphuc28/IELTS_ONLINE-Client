'use client'
import '@admin/styles/components/_select.scss'
import '@admin/styles/components/_form.scss'
import '@admin/styles/components/_cover.scss'
import ArrowDownIcon from '@/public/admin/img/icons8-arrow-down-50.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PartEnum } from '../../parts/type/enum'
import { useDispatch, useSelector } from 'react-redux'
import { setPartPagination } from '../../../lib/redux/reducer/partReducer'
import { PaginationInterface } from '../../../lib/type/pagination'
import _ from 'lodash'
import { GetAllParts } from '../../../lib/redux/action/Part/get'

export default function SelectMenu() {
    const [openMenu, setOpenMenu] = useState(false)
    const [height, setHeight] = useState('0')
    const partValues = Object.values(PartEnum)
    const dispatch = useDispatch()
    const pagination: PaginationInterface = useSelector((state) => state.part.pagination)
    const changeHeight = async () => {
        const updatedOpenMenu = !openMenu
        setOpenMenu(updatedOpenMenu)
        if (updatedOpenMenu) {
            setHeight('auto')
        } else {
            setHeight('0')
        }
    }
    return (
        <div style={{width: '150px'}} className={`select-box ${openMenu ? 'select-open' : ''}`}>
            <div className="select-header form-control" onClick={changeHeight}>
                <div className="text">
                    {pagination.filter.partNumber === ''
                        ? 'All Parts'
                        : pagination.filter.partNumber}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                </svg>
            </div>
            <div style={{ height: height }} className={`select-content cover`}>
                <ul>
                    <li
                        onClick={() => {
                            const newPagination = _.cloneDeep(pagination)
                            newPagination.filter.partNumber = ''
                            dispatch(setPartPagination(newPagination))
                        }}
                    >
                        All Parts
                    </li>
                    {Object.keys(PartEnum).map((key) => (
                        <li
                        onClick={() => {
                            const newPagination = _.cloneDeep(pagination)
                            newPagination.filter.partNumber = key
                            dispatch(setPartPagination(newPagination))
                        }}
                        key={key}>{PartEnum[key as keyof typeof PartEnum]}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
