import { Fragment, useMemo, useState } from 'react'
import { Answer, DragAndDrop, Dropdown, MultipleResponse } from '../../type/Question'
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import dynamic from 'next/dynamic'
import { QuestionProps } from './dataQuestion'

export default function DragAndDropForm(props: QuestionProps) {
    const DynamicEditor = dynamic(() => import('../_components/editor/editor'), { ssr: false })
    const Editor = useMemo(() => DynamicEditor, [])
    const [question, setQuestion] = useState<DragAndDrop>(props.data as DragAndDrop)
    return (
        <Fragment>
            <div className="title mb-5">Drag And Drop</div>
            <div>
                        <label className="title-label block mb-2" htmlFor="">
                            Question text
                        </label>
                        <Editor
                            data={question?.questionText}
                            saveData={(data: any) => (question.questionText = data)}
                            formik={props.formik}
                            index={props.index}
                        />
                    </div>
                    <Fragment>
                    <div className="flex justify-start items-start mt-5">
                        <label style={{ width: '15%' }} htmlFor="">
                           Answer
                        </label>
                        <input
                            value={question.answer.content}
                            className="form-control w-2/5 h-10 box-border"
                            style={{ width: '30%' }}
                            id="title"
                            name="title"
                            type="title"
                            onChange={(event: any) => {
                                const newValue = event.target.value
                                const updatedAnswer = question.answer
                                updatedAnswer.content = newValue
                                setQuestion((prevQuestion) => ({
                                    ...prevQuestion,
                                    answer: updatedAnswer,
                                }))
                            }}
                            // value={formik.values.title}
                        />
                    </div>
                </Fragment>

            <div className="mt-5">
                <Button
                    onClick={() => {
                        props.saveAction(question)
                        props.closeAction()
                    }}
                    variant="contained"
                    style={{
                        background: '#36aafd',
                        marginLeft: '1.25rem',
                    }}
                >
                    Save
                </Button>
            </div>
        </Fragment>
    )
}
