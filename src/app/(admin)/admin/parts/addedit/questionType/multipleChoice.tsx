import { Fragment, useMemo, useState } from 'react'
import { Answer, MultipleChoice as MultipleChoiceType } from '../../type/Question'
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import dynamic from 'next/dynamic'
import { QuestionProps } from './dataQuestion'

export default function MultipleChoiceForm(props: QuestionProps) {
    const DynamicEditor = dynamic(() => import('../_components/editor/editor'), { ssr: false })
    const Editor = useMemo(() => DynamicEditor, [])
    const [question, setQuestion] = useState<MultipleChoiceType>(props.data as MultipleChoiceType)
    console.log(question)
    return (
        <Fragment>
            <div className="title mb-5">Multiple choice</div>
            <div>
                <label className="title-label block mb-2" htmlFor="name">
                    Question text
                </label>
                <Editor
                    data={question?.questionText}
                    saveData={(data: any) => (question.questionText = data)}
                    formik={props.formik}
                    index={props.index}
                />
            </div>
            {question?.answers.map((item, i) => (
                <Fragment key={i}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <label className="title-label block mb-2" htmlFor="name">
                                Answer ({i + 1})
                            </label>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Editor
                                data={item.content}
                                saveData={(data: any) => (item.content = data)}
                                formik={props.formik}
                                index={props.index}
                            />
                        </AccordionDetails>
                        <AccordionActions>
                            <Button
                                onClick={() => {
                                    const updatedAnswers = [...question.answers]
                                    updatedAnswers.splice(i, 1)
                                    setQuestion({
                                        ...question,
                                        answers: updatedAnswers,
                                    })
                                }}
                                size={'small'}
                                style={{ color: '#d52b2a' }}
                            >
                                Delete
                            </Button>
                        </AccordionActions>
                    </Accordion>
                </Fragment>
            ))}
            <FormControl style={{ marginTop: '1.25rem' }}>
                <FormLabel id="demo-row-radio-buttons-group-label">Right answer: </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={(event) => {
                        const id = event.target.value
                        const updatedAnswers = question.answers.map((answer, i) => ({
                            ...answer,
                            isCorrect: id === answer.id,
                        }))
                        setQuestion({
                            ...question,
                            answers: updatedAnswers,
                        })
                    }}
                >
                    {question?.answers.map((item, index) => (
                        <Fragment key={index}>
                            <FormControlLabel
                                value={item.id}
                                control={<Radio checked={item.isCorrect} />}
                                label={index + 1}
                            />
                        </Fragment>
                    ))}
                </RadioGroup>
            </FormControl>

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
