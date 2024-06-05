'use client'

import { FormikProps } from 'formik'
import { Part } from '../../../type/Part.class'
import dynamic from 'next/dynamic'
import { Fragment, useMemo } from 'react'
import { AccordionSummary, AccordionDetails, Accordion } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TitleForm from './titleForm'

interface Props {
    formik: FormikProps<Part>
}
export default function PartContent({ formik }: Props) {
    const DynamicEditor = dynamic(() => import('../editor/editor'), { ssr: false })
    const Editor = useMemo(() => DynamicEditor, [])
    return (
        <Fragment>
            <TitleForm formik={formik} />
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <label className="title-label" htmlFor="name">
                        Content
                    </label>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <Editor
                            data={formik.values.content}
                            saveData={(data: any) => {
                                formik.values.content = data
                                formik.setValues({
                                    ...formik.values,
                                    content: formik.values.content,
                                })
                            }}
                            formik={formik}
                        />
                    </div>
                </AccordionDetails>
            </Accordion>
        </Fragment>
    )
}
