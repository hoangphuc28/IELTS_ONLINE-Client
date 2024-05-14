import { AccordionSummary, AccordionDetails, Accordion } from '@mui/material'
import dynamic from 'next/dynamic'
import { Fragment, useMemo } from 'react'
import { Part } from '../../../type/Part.class'
import { FormikProps } from 'formik'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
interface Props {
    formik: FormikProps<Part>
}
export default function TitleForm({ formik }: Props) {
    const DynamicEditor = dynamic(() => import('../editor/editor'), { ssr: false })
    const Editor = useMemo(() => DynamicEditor, [])
    return (
        <Fragment>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <label className="title-label">Title</label>
                </AccordionSummary>
                <AccordionDetails>
                    <Editor
                        data={formik.values.title}
                        saveData={(data: any) => {
                            formik.values.title = data
                            formik.setValues({
                                ...formik.values,
                                title: formik.values.title,
                            })
                        }}
                        formik={formik}
                    />
                </AccordionDetails>
            </Accordion>
        </Fragment>
    )
}
