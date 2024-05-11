'use client'
import "@admin/styles/globals.css"
import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import ImageUpload from '../../../components/Uploads/ImageUpload'
import '@admin/styles/components/_button.scss'
import { useExamContext } from '../../../providers/examProvider'
import { useRouter } from "next/navigation"

export default function BasicInformation() {
    const {setIsUnlimited} : any= useExamContext()
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            examTimes: false,
        },
        onSubmit: (values) => {
            if(values.examTimes) {
                setIsUnlimited(true)
            }
            router.push('/admin/exams/create/add-parts')
        },
    })
    return (
        <div className="cover">
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label className="title-label" htmlFor="email">
                        Title
                    </label>
                    <input
                        className="form-control mt-5 ml-5"
                        id="title"
                        name="title"
                        type="title"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                </div>
                <div className="mt-6">
                    <label className="title-label" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="form-control mt-5 ml-5" style={{height: 120}}
                        id="description"
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                </div>
                <div className="mt-6">
                    <label style={{display: "block"}} className="title-label mb-5" htmlFor="email">
                        Exam cover
                    </label>
                    <ImageUpload />
                </div>
                <div className="mt-6 radio-btn">
                    <label htmlFor="examTimes">
                    Unlimited exam taken times
                    </label>
                    <input
                        id="examTimes"
                        name="examTimes"
                        type="checkbox"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                    <span className="checkmark"></span>

                </div>
                <button style={{background: "transparent", border: "none"}} className="release-btn mt-6" type="submit">
                    <a style={{marginLeft: '0px !important'}}>Save and next</a>
                </button>
            </form>
        </div>
    )
}
