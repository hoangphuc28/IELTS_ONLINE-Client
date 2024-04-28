'use client'

import { useQuestionContext } from '@admin/admin/providers/questionProvider'
import { useFormik } from 'formik'
import { useState } from 'react'
import ComponentChoiceAnswer from './choiceAnswer'
import ComponentDragDrop from './dragDrop'
import ComponentFileQuestion from './fileQuestion'
import ComponentShortAnswer from './shortAnswer'

export enum ListTypeQuestion {
    multiChoice = 'Multi choice',
    dragDrop = 'Drag and drop',
    shortAnswer = 'Short answer',
    file = 'Speaking',
}

export default function ComponentAddBaseQuestion({}: {}) {
    const [typeQuestion, setTypeQuestion] = useState<string>(ListTypeQuestion.multiChoice)
    const { step: stepContext } = useQuestionContext()

    const formik = useFormik({
        initialValues: {
            type: ListTypeQuestion.multiChoice,
        },
        onSubmit: (values) => {
            stepContext.setStepSelected(stepContext.stepSelected + 1)
        },
    })
    return (
        <>
            <form className="flex flex-col gap-2 mt-3 w-full" onSubmit={formik.handleSubmit}>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <label className="title-label" htmlFor="email">
                            Type
                        </label>
                        <select
                            className="text-base rounded-lg px-3 py-1"
                            name="type"
                            id="type"
                            value={formik.values.type}
                            onChange={(e) => {
                                setTypeQuestion(e.currentTarget.value)
                                formik.handleChange(e)
                            }}
                        >
                            {Object.keys(ListTypeQuestion).map((key, index) => {
                                const obj = (ListTypeQuestion as any)[key]
                                if (!obj) return <></>
                                return (
                                    <option
                                        className="my-2"
                                        value={obj}
                                        key={'list-type-question-item-' + index}
                                    >
                                        {obj}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div>
                        <button
                            className="border-0 rounded px-5 py-1 bg-blue-400 text-white text-base"
                            type="submit"
                        >
                            Finish
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {(() => {
                        switch (typeQuestion) {
                            case ListTypeQuestion.dragDrop:
                                return <ComponentDragDrop />
                            case ListTypeQuestion.shortAnswer:
                                return <ComponentShortAnswer />
                            case ListTypeQuestion.file:
                                return <ComponentFileQuestion />
                            default:
                                break
                        }
                        return <ComponentChoiceAnswer />
                    })()}
                </div>
            </form>
        </>
    )
}
