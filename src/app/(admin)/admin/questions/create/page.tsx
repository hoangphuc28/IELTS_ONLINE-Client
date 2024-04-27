'use client'
import '@admin/styles/components/_input.scss'
import '@admin/styles/components/_cover.scss'
import '@admin/styles/components/_text.scss'
import '@admin/styles/pages/createExam.scss'
import { useEffect } from 'react'
import BasicInformation from './basicInformation'
import AddQuestions from './addQuestions'
import Finish from './finish'
import { useQuestionContext } from '../../providers/questionProvider'
export default function Page() {
    const { step: stepContext } = useQuestionContext()
    const { stepSelected, setStepSelected } = stepContext

    useEffect(() => {
        setStepSelected(1)
    }, [])
    return (
        <div className="create-exam">
            <div className="cover">
                <div className="header-container">
                    <div className="title">Create An Part</div>
                    <ul>
                        <li
                            onClick={() => setStepSelected(1)}
                            className={`${stepSelected === 1 ? 'selected' : ''}`}
                        >
                            <div className="circle">1</div>
                            <span>Basic information</span>
                            <div className="line" />
                        </li>
                        <li
                            onClick={() => setStepSelected(2)}
                            className={`${stepSelected === 2 ? 'selected' : ''}`}
                        >
                            <div className="circle">2</div>
                            <span>Add questions</span>
                            <div className="line" />
                        </li>
                        <li
                            onClick={() => setStepSelected(3)}
                            className={`${stepSelected === 3 ? 'selected' : ''}`}
                        >
                            <span>Finish</span>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    {stepSelected === 1 ? (
                        <BasicInformation />
                    ) : stepSelected === 2 ? (
                        <AddQuestions />
                    ) : (
                        <Finish />
                    )}
                </div>
            </div>
        </div>
    )
}
