'use client'
import { useFormik } from 'formik'
import { useQuestionContext } from '../../providers/questionProvider'
import { KeyboardEvent, MouseEvent, useEffect, useState } from 'react'
import Link from 'next/link'

export interface FormikTagInterface {
    tag: string
    tags: string[]
}

export default function Finish() {
    const { step: stepContext, skillType } = useQuestionContext()
    const { stepSelected, setStepSelected } = stepContext
    const formik = useFormik<FormikTagInterface>({
        initialValues: {
            tag: '',
            tags: [],
        },
        onSubmit: (values) => {
            setStepSelected(stepSelected + 1)
        },
    })
    return (
        <section className="flex flex-col items-center justify-center mt-3">
            <div className="flex gap-2 items-center">
                <label htmlFor="" className="text-base">
                    Tags
                </label>
                <input
                    onKeyDown={(e) => handleAddTags(e)}
                    onChange={formik.handleChange}
                    type="text"
                    id="tag"
                    name="tag"
                    className="text-base rounded px-2"
                    value={formik.values.tag}
                />
            </div>
            <form onSubmit={formik.handleSubmit} action="" className="flex flex-col items-center">
                <div className="flex flex-wrap justify-center px-3 py-3 gap-3">
                    {formik.values.tags.map((value, index) => (
                        <div className="relative" key={'tag-' + index}>
                            <span
                                className="block px-3 py-1 text-base rounded"
                                style={{ border: '1px solid #ccc' }}
                            >
                                {value}
                            </span>
                            <input
                                type="text"
                                name={'tag-' + index}
                                className="hidden"
                                value={value}
                                disabled
                            />

                            <Link
                                onClick={(e) => handleDeleteTag(e)}
                                href={''}
                                className="absolute -top-2 -right-1"
                                data-tag={value}
                            >
                                <span>
                                    <i className="fa-solid fa-xmark"></i>
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
                <div>
                    <button className="px-4 py-1 text-base rounded bg-blue-200 border-0">
                        Create an part
                    </button>
                </div>
            </form>
        </section>
    )

    function handleAddTags(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key.toLowerCase() === 'enter') {
            const value = formik.values.tag
            const newValue = [...formik.values.tags]
            if (value.length > 0) {
                const hasValue = newValue.find((tag) => tag === value)
                if (hasValue) return
                newValue.push(value)
                formik.setFieldValue('tag', '')
                formik.setFieldValue('tags', newValue)
            }
        }
    }

    function handleDeleteTag(e: MouseEvent<HTMLAnchorElement, any>) {
        e.preventDefault()
        const element = e.currentTarget as HTMLElement
        if (!element) return
        const dataTag = element.dataset.tag
        if (!dataTag) return
        const tags = formik.values.tags.filter((tag) => tag !== dataTag)

        formik.setFieldValue('tags', tags)
    }
}
