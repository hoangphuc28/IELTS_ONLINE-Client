import '@admin/styles/components/_cover.scss'
import '@admin/styles/components/_popup.scss'
import { Field, FormikProps, useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { targets } from '../../../../../(client)/account/_components/sideBar'
import { QuestionType } from '../../type/enum'
import { Part } from '../../type/Part.class'
import { GroupQuestion } from '../../type/GroupQuestion.class'
interface AddQuestionPopup {
    onClose: () => void
    formik: FormikProps<Part>
    saveEvent: (data: any) => void
}
export default function AddQuestionPopup({ onClose, formik, saveEvent }: AddQuestionPopup) {
    const [newGroupQuestion, setNewGroupQuesiton] = useState(new GroupQuestion())
    const [select, setSelect] = useState('1')

    return (
        <div className="popup flex justify-center">
            <div
                className="cover"
                style={{
                    maxWidth: '50% !important',
                    width: '30% !important',
                    maxHeight: '70%',
                    height: '370px',
                    transform: 'translatey(10%)',
                }}
            >
                <div className="container">
                    <div className="header">
                        <div
                            onClick={() => {
                                onClose()
                            }}
                            className="popup-close">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div className='mt-5'>
                            <label className="title-label" htmlFor="instruction">
                                Instruction
                            </label>
                            <input
                                className="form-control h-7 w-4/5 mt-2 ml-5 mb-2.5"
                                id="instruction"
                                name="instruction"
                                type="text"
                                onChange={(event: any) => {
                                    const { name, value } = event.target
                                    newGroupQuestion.instruction = value
                                    // formik.values.groupQuestions[
                                    //     formik.values.groupQuestions.length - 1
                                    // ].instruction = value
                                }}
                            />
                        </div>
                        <div className="title ml-5 mb-2.5 mt-5" style={{ fontSize: 16 }}>
                            Question Type
                        </div>
                        <div className="grid grid-cols-2">
                            {Object.values(QuestionType).map((item, index) => (
                                <div
                                    className={`radio-input ${select === item ? 'selected' : ''}`}
                                    key={index}
                                >
                                    <label>
                                        <input
                                            type="radio"
                                            name="questionType"
                                            checked={
                                                // formik.values.groupQuestions[
                                                //     formik.values.groupQuestions.length - 1
                                                // ].questionType === item
                                                newGroupQuestion.questionType === item
                                            }
                                            value={item}
                                            onChange={(event: any) => {
                                                const { value } = event.target
                                                setSelect(value)
                                                newGroupQuestion.questionType = value
                                            }}
                                        />
                                        <div
                                            className={`circle ${
                                                // formik.values.groupQuestions[
                                                //     formik.values.groupQuestions.length - 1
                                                // ].questionType === item
                                                newGroupQuestion.questionType === item
                                                    ? 'checked'
                                                    : ''
                                            }`}
                                        ></div>
                                        <span>{item}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => {
                                saveEvent(newGroupQuestion)
                                onClose()
                            }}
                            style={{ background: 'transparent', border: 'none' }}
                            className="release-btn mt-6 ml-5"
                        >
                            <a style={{ marginLeft: '0px !important' }}>Save and next</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
