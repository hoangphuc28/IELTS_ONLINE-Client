'use client'
import '@admin/styles/components/_input.scss'
import '@admin/styles/components/_cover.scss'
import '@admin/styles/components/_text.scss'
import '@admin/styles/pages/createExam.scss'
import '@admin/styles/pages/createPart.scss'
import { Fragment, useEffect } from 'react'
import { useQuestionContext } from '../../../providers/questionProvider'
import AddPart from '../../addedit/part'
import { useRouter, useParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { GetPart } from '../../../lib/redux/action/Part/get'
import { setPartEdit, setPartList } from '../../../lib/redux/reducer/partReducer'
import _ from 'lodash'
import { UpdatePart } from '../../../lib/redux/action/Part/update'
import routes from '../../../lib/routes/routes'

export default function Page() {
    const { push } = useRouter();
    const { step: stepContext } = useQuestionContext()
    const { stepSelected, setStepSelected } = stepContext
    const dispatch = useDispatch()
    const param = useParams()
    const partEdit = useSelector((state) => state.part.partEdit)
    useEffect(() => {
        dispatch(setPartEdit(null))
        dispatch(GetPart(param.id))
    }, [])
    return (
        <div className="create-part relative">
            <div className="cover">
                <div className="header-container">
                    <div className="title">Edit A Part</div>
                </div>
                <div className="content pb-10">
                    {
                        partEdit !== null ?
                    <AddPart action={(values) => {
                        dispatch(UpdatePart(values, () => push(`${routes.parts}`)))
                    }} part={_.cloneDeep(partEdit)} />
                        : <Fragment></Fragment>
                    }
                </div>
            </div>
        </div>
    )
}
