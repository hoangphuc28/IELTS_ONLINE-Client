import * as React from 'react'
import '@admin/styles/components/_partList.scss'
import PartItem from './partItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { GetAllParts } from '../../lib/redux/action/Part/get'

export default function ListParts() {
    const dispatch = useDispatch()
    const parts = useSelector((state) => state.part.list)
    useEffect(() => {
        dispatch(GetAllParts())
    }, [])
    return (
        <div className="parts-list">
            {parts.map((item, index) => (
                <React.Fragment key={index}>
                    <PartItem item={item} />
                </React.Fragment>
            ))}
        </div>
    )
}
