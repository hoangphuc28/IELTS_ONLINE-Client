import { Fragment, useMemo, useState } from 'react'
import { Answer, Dropdown, Dropdown, MultipleResponse } from '../../type/Question'
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

export default function DropdownForm(props: QuestionProps) {
    const DynamicEditor = dynamic(() => import('../_components/editor/editor'), { ssr: false })
    const Editor = useMemo(() => DynamicEditor, [])
    const [question, setQuestion] = useState<Dropdown>(props.data as MultipleResponse)
    return (
        <Fragment>
            <div className="title mb-5">Multiple response</div>
            <div>
                <label className="title-label block mb-2" htmlFor="name">
                    Question text
                </label>
                <Editor
                    data={question?.questionText}
                    saveData={(data) => (question.questionText = data)}
                    formik={props.formik}
                    index={props.index}
                />
            </div>
            <label className="title-label block mt-3" htmlFor="name">
                Answers
            </label>
            {question?.answers.map((item, i) => (
                <Fragment key={i}>
                    <div className="flex justify-start items-start mt-5">
                        <label style={{ width: '15%' }} htmlFor="email">
                            Choice[[{item.id}]]
                        </label>
                        <input
                            className="form-control w-2/5 h-10 box-border"
                            style={{ width: '30%' }}
                            id="title"
                            name="title"
                            type="title"
                            // onChange={formik.handleChange}
                            // value={formik.values.title}
                        />
                    </div>
                </Fragment>
            ))}

            <div className="mt-5">
                <Button
                    onClick={() => {
                        let temp = { ...question }
                        temp.answers.push(new Answer((question.answers.length + 1).toString()))
                        setQuestion(temp)
                    }}
                    variant="contained"
                    style={{
                        background: '#36aafd',
                    }}
                >
                    <AddCircleIcon style={{ marginRight: '5px' }} /> Add new answer
                </Button>
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
