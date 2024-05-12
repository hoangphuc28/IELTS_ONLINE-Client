import { Fragment, useMemo, useState } from 'react'
import { Answer, MultipleResponse } from '../../type/Question'
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

export default function MultipleResponseForm(props: QuestionProps) {
    const DynamicEditor = dynamic(() => import('../_components/editor/editor'), { ssr: false })
    const Editor = useMemo(() => DynamicEditor, [])
    const [question, setQuestion] = useState<MultipleResponse>(props.data as MultipleResponse)
    return (
        <Fragment>
            <div className="title mb-5">Multiple response</div>
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
                <FormLabel sx={{ marginBottom: '5px' }}>Right answer: </FormLabel>
                <FormGroup
                    sx={{
                        flexDirection: 'row',
                    }}
                >
                    {question?.answers?.map((item, index) => (
                        <FormControlLabel
                            sx={{
                                marginRight: '20px',
                                border: '1px solid #cccccc',
                                borderRadius: '5px',
                                width: '120px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                paddingRight: '9px',
                                height: '35px',
                            }}
                            key={index}
                            onChange={() => {
                                const updatedAnswers = question.answers.map((answer, i) => ({
                                    ...answer,
                                    isCorrect:
                                        item.id === answer.id
                                            ? !answer.isCorrect
                                            : answer.isCorrect,
                                }))
                                setQuestion({ ...question, answers: updatedAnswers })
                            }}
                            control={<Checkbox checked={item.isCorrect} />}
                            label={`(${index + 1})`}
                        />
                    ))}
                </FormGroup>
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
