'use client'
import '@admin/styles/components/_navbar.scss'
import '@admin/styles/components/_button.scss'
import { useFormik } from 'formik'
import { Fragment, useState } from 'react'
import Popup from '../../../components/popup/popup'
import ChosePart from '../selectParts'
import { useExamContext } from '../../../providers/examProvider'
import Listening from './listening'
import Reading from './reading'
import Writing from './writing'
import Speaking from './speaking'

export default function AddQuestions() {
    const { stepSelected, setStepSelected, isUnlimited, setIsUnlimited } = useExamContext()
    const [showPopup, setShowPopup] = useState(false)
    const [selected, setSelected] = useState(1)
    console.log(isUnlimited)
    const formik = useFormik({
        initialValues: {
            time: isUnlimited ? 0 : 30,
        },
        onSubmit: (values) => {},
    })
    return (
        <div className="add-questions">

            <div className="table-questions">
                <div className="cover">
                    <div className="header">
                        <div className="nav-bar">
                            <ul>
                                <li
                                    onClick={() => setSelected(1)}
                                    className={`${selected === 1 ? 'selected' : ''}`}
                                >
                                    Listening
                                </li>
                                <li
                                    onClick={() => setSelected(2)}
                                    className={`${selected === 2 ? 'selected' : ''}`}
                                >
                                    Reading
                                </li>
                                <li
                                    onClick={() => setSelected(3)}
                                    className={`${selected === 3 ? 'selected' : ''}`}
                                >
                                    Speaking
                                </li>
                                <li
                                    onClick={() => setSelected(4)}
                                    className={`${selected === 4 ? 'selected' : ''}`}
                                >
                                    Writing
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        {
                            selected === 1 ? <Listening/> :
                            selected === 2 ? <Reading/> :
                            selected === 3 ? <Writing/> :
                                            <Speaking/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
