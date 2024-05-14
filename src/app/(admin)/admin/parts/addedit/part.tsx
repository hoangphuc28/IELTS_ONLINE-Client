'use client'
import '@admin/styles/globals.css'
import React, { Fragment, useState } from 'react'
import { useFormik } from 'formik'
import '@admin/styles/components/_input.scss'
import '@admin/styles/components/_button.scss'
import AddQuestionPopup from './_components/addQuestionPopup'
import { Part } from '../type/Part.class'
import { GroupQuestion } from '../type/GroupQuestion.class'
import GroupQuestionsComponent from './_components/groupQuestion'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import _ from 'lodash'
import PartInformation from './_components/basicInformation/information'
import SKillInformation from './_components/basicInformation/skillInformation'

interface Props {
    part: Part
    action: (values: any) => void
}
const partSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    // skill: Yup.string().oneOf(Object.values(SkillEnum)).required('Skill is required'),
    // partNumber: Yup.string().oneOf(Object.values(PartEnum)).required('Part number is required'),
    groupQuestions: Yup.array().of(Yup.object().shape({})),
})
export default function AddPart({ part, action }: Props) {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: part,
        validationSchema: partSchema,
        onSubmit: (values) => {
            console.log(values)
            action(values)
        },
    })
    const [showAddQuestionPopup, setShowAddQuestionPopup] = useState(false)
    const [resetEditor, setResetEditor] = useState(false)

    const moveElementUp = (data: GroupQuestion) => {
        const index = formik.values.groupQuestions.indexOf(data)
        if (index > 0) {
            setResetEditor((prev) => !prev)
            const newOrder = [...formik.values.groupQuestions]
            ;[newOrder[index], newOrder[index - 1]] = [newOrder[index - 1], newOrder[index]]

            formik.setFieldValue('groupQuestions', newOrder)
        }
    }

    // Function to move element down
    const moveElementDown = (data: GroupQuestion) => {
        const index = formik.values.groupQuestions.indexOf(data)
        if (index < formik.values.groupQuestions.length - 1) {
            setResetEditor((prev) => !prev)
            const newOrder = [...formik.values.groupQuestions]
            ;[newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]]
            formik.setFieldValue('groupQuestions', newOrder)
        }
    }
    const removeAPart = (data: GroupQuestion) => {
        const isBrowser = typeof window !== 'undefined'
        if (isBrowser && window.confirm('Bạn có chắc muốn xóa không?')) {
            setResetEditor((prev) => !prev)
            let newGroup = formik.values.groupQuestions.filter(
                (item) => item !== data || item.id !== data.id,
            )
            formik.setFieldValue('groupQuestions', newGroup)
        }
    }

    return (
        <Fragment>
            {showAddQuestionPopup ? (
                <AddQuestionPopup
                    saveEvent={(data) => formik.values.groupQuestions.push(data)}
                    onClose={() => setShowAddQuestionPopup(false)}
                    formik={formik}
                />
            ) : (
                <Fragment></Fragment>
            )}
            <form onSubmit={formik.handleSubmit}>
                <div className="flex">
                    <div className="content-left">
                        <div className="ml-5 mt-5 mb-5">
                            <PartInformation formik={formik} />
                            <button
                                style={{ background: 'transparent', border: 'none' }}
                                className="release-btn mt-5 ml-5 w-3/6"
                                type="button"
                                onClick={() => {
                                    setShowAddQuestionPopup(true)
                                }}
                            >
                                <a style={{ marginLeft: '0px !important', width: '100%' }}>
                                    Add Group Question
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="content-right">
                        <SKillInformation formik={formik} />
                        <div className="mt-5 ">
                            {formik.values.groupQuestions?.map((item, index) => (
                                <Fragment key={index}>
                                    <GroupQuestionsComponent
                                        resetEditor={resetEditor}
                                        deleteEvent={() => removeAPart(item)}
                                        downEvent={() => moveElementDown(item)}
                                        upEvent={() => moveElementUp(item)}
                                        index={index}
                                        formik={formik}
                                    />
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                <button
                    style={{ background: 'transparent', border: 'none' }}
                    className="release-btn absolute top-2.5 right-5"
                >
                    <a style={{ marginLeft: '0px !important' }}>Save and next</a>
                </button>
            </form>
        </Fragment>
    )
}
