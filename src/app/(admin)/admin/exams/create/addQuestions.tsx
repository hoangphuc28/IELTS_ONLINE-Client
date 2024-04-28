'use client'
import '@admin/styles/components/_navbar.scss'
import '@admin/styles/components/_button.scss'
import { useFormik } from 'formik'

import { Fragment, useState } from 'react'
import Popup from '../../components/popup/popup'
import ChosePart from './selectParts'

import { dataPart } from './dataPart'
import ComponentPartItem from './_components/partItem'

export default function AddQuestions() {
    const [showPopup, setShowPopup] = useState(false)
    const [selected, setSelected] = useState(1)
    const [inputDisabled, setInputDisabled] = useState(true)
    const formik = useFormik({
        initialValues: {
            time: 30,
        },
        onSubmit: (values) => {},
    })
    return (
        <div className="add-questions">
            {showPopup ? (
                <Popup onClose={() => setShowPopup(false)}>{<ChosePart />}</Popup>
            ) : (
                <Fragment></Fragment>
            )}

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
                    <div className="content flex flex-col gap-2 mt-[64px] px-3">
                        {(() => {
                            if (selected === 1) {
                                return dataPart.listening.map((e) => <ComponentPartItem data={e} />)
                            }
                            if (selected === 2) {
                                return dataPart.reading.map((e) => <ComponentPartItem data={e} />)
                            }
                            if (selected === 3) {
                                return dataPart.writing.map((e) => <ComponentPartItem data={e} />)
                            }
                            if (selected === 4) {
                                return dataPart.speaking.map((e) => <ComponentPartItem data={e} />)
                            }
                        })()}
                    </div>
                </div>
            </div>
            <div className="exam-information">
                <div className="cover">
                    <div className="time">
                        <span>The Test Time</span>
                        <form>
                            <div>
                                <input
                                    className={`${!inputDisabled ? 'edit' : ''}`}
                                    id="time"
                                    name="time"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.time}
                                    disabled={inputDisabled}
                                />
                                <div>min</div>
                            </div>

                            <button
                                className="edit-time"
                                type="button"
                                onClick={() => setInputDisabled(!inputDisabled)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                                </svg>
                                <div>{inputDisabled ? 'Edit' : 'Save'}</div>
                            </button>
                        </form>
                    </div>
                    <div className="action">
                        <button
                            onClick={() => setShowPopup(!showPopup)}
                            style={{ background: 'transparent', border: 'none' }}
                            className="release-btn"
                        >
                            <a>Add Questions</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
