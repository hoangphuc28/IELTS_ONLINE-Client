'use client'
import '@admin/styles/components/_navbar.scss'
import '@admin/styles/components/_button.scss'
import { useFormik } from 'formik'

import { Fragment, useState } from 'react'
import Popup from '../../components/popup/popup'
import { ListSkillType, useQuestionContext } from '@admin/admin/providers/questionProvider'
import ComponentAddQuestion from './_components/addQuestion'

export default function AddQuestions() {
    const { step: stepContext, skillType } = useQuestionContext()
    return (
        <div className="w-full add-questions">
            {(() => {
                if (skillType.type == ListSkillType.writing) {
                    stepContext.setStepSelected(3)
                    return <></>
                }

                return <ComponentAddQuestion />
            })()}
        </div>
    )
}
