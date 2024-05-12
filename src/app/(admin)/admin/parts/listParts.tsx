import * as React from 'react'
import '@admin/styles/components/_partList.scss'
import PartItem from './partItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { GetAllParts } from '../../lib/redux/action/Part/get'
import { useAppDispatch } from '../../lib/redux/hooks'

export default function ListParts() {
    const dispatch = useAppDispatch()
    const parts = useSelector((state: any) => state.part.list)
    const pagination = useSelector((state: any) => state.part.pagination)
    useEffect(() => {
        dispatch(GetAllParts(pagination))
    }, [])
    return (
        <div className="parts-list">
            {parts?.map((item: any, index: any) => (
                <React.Fragment key={index}>
                    <PartItem item={item} />
                </React.Fragment>
            ))}
        </div>
    )
}
