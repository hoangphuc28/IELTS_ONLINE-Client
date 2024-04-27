'use client'
import '@admin/styles/globals.css'
import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import ImageUpload from '../../components/Uploads/ImageUpload'
import '@admin/styles/components/_button.scss'
import { useQuestionContext } from '../../providers/questionProvider'
import { ListSkillType } from '@admin/admin/providers/questionProvider'

export default function BasicInformation() {
    const { step: stepContext, skillType } = useQuestionContext()
    const { stepSelected, setStepSelected } = stepContext

    const formik = useFormik({
        initialValues: {
            type: skillType.type,
            description: '',
        },
        onSubmit: (values) => {
            setStepSelected(stepSelected + 1)
        },
    })
    return (
        <div className="cover">
            <form onSubmit={formik.handleSubmit}>
                <div className="">
                    <label className="title-label" htmlFor="email">
                        Type
                    </label>
                    <select
                        className="form-control ms-5 mt-3 px-3 py-2 text-base"
                        name="type"
                        id="type"
                        value={formik.values.type}
                        onChange={(e) => {
                            skillType.setType(e.currentTarget.value)
                            formik.handleChange(e)
                        }}
                    >
                        <option value={ListSkillType.listening}>{ListSkillType.listening}</option>
                        <option value={ListSkillType.speaking}>{ListSkillType.speaking}</option>
                        <option value={ListSkillType.writing}>{ListSkillType.writing}</option>
                        <option value={ListSkillType.speaking}>{ListSkillType.speaking}</option>
                    </select>
                </div>
                <div className="mt-6">
                    <label className="title-label" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="form-control mt-5 ml-5"
                        style={{ height: 120 }}
                        id="description"
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                </div>
                <div className="mt-6">
                    <label
                        style={{ display: 'block' }}
                        className="title-label mb-5"
                        htmlFor="email"
                    >
                        Exam cover
                    </label>
                    <ImageUpload />
                </div>
                <button
                    style={{ background: 'transparent', border: 'none' }}
                    className="release-btn mt-6"
                    type="submit"
                >
                    <a style={{ marginLeft: '0px !important' }}>Save and next</a>
                </button>
            </form>
        </div>
    )
}
