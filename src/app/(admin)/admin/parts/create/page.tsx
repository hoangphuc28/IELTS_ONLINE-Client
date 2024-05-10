'use client'
import '@admin/styles/components/_input.scss'
import '@admin/styles/components/_cover.scss'
import '@admin/styles/components/_text.scss'
import '@admin/styles/pages/createExam.scss'
import '@admin/styles/pages/createPart.scss'
import { useEffect } from 'react'
import { useQuestionContext } from '../../providers/questionProvider'
import AddPart from '../addedit/part'
import part from '../type/sampleData';
import { Part } from '../type/Part.class'
import { useDispatch } from 'react-redux'
import { CreatePart } from '../../../lib/redux/action/Part/create'
import { useRouter } from 'next/navigation'
import routes from '../../../lib/routes/routes'
export default function Page() {
    const {push} = useRouter()
    const { step: stepContext } = useQuestionContext()
    const { stepSelected, setStepSelected } = stepContext
    const dispatch = useDispatch()

    useEffect(() => {
        setStepSelected(1)
    }, [])
    return (
        <div className="create-part relative">
            <div className="cover">
                <div className="header-container">
                    <div className="title">Create A Part</div>
                </div>

                <div className="content pb-10">
                        <AddPart action={(values) => {
                            dispatch(CreatePart(values, () => push(`${routes.parts}`)));
                        }} part={new Part()}/>

                </div>
            </div>
        </div>
    )
}
