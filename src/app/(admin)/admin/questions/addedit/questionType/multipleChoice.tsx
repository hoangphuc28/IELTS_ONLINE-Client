import { Fragment, useMemo, useState } from 'react'

import { FormikProps } from 'formik'
import { Part } from '../../type/Part.class'
import { Answer, MultipleChoice } from '../../type/Question'
import { GroupQuestion } from '../../type/GroupQuestion.class'
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
import CloseIcon from '@mui/icons-material/Close'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import dynamic from 'next/dynamic'
interface Props {
    formik: FormikProps<Part>
    index: number
    saveAction: (question: any) => void
    closeAction: () => void
    question: MultipleChoice
}

export default function MultipleChoiceForm({
    formik,
    saveAction,
    index,
    closeAction,
    question,
}: Props) {
    const DynamicEditor = dynamic(() => import('../_components/editor/editor'), { ssr: false })
    const Editor = useMemo(() => DynamicEditor, [])
    const [multipleChoiceQuestion, setMultiplechoiceQuestion] = useState(question)
    return (
        <Fragment>
            <div className="title mb-5">Multiple choice</div>
            <div>
                <label className="title-label block mb-2" htmlFor="name">
                    Question text
                </label>
                <Editor
                    data={multipleChoiceQuestion.question}
                    saveData={(data) => (multipleChoiceQuestion.question = data)}
                    formik={formik}
                    index={index}
                />
            </div>
            {multipleChoiceQuestion.answers.map((item, i) => (
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
                                saveData={(data) => (item.content = data)}
                                formik={formik}
                                index={index}
                            />
                        </AccordionDetails>
                        <AccordionActions>
                            <Button
                                onClick={() => {
                                    const updatedAnswers = [...multipleChoiceQuestion.answers]
                                    updatedAnswers.splice(i, 1)
                                    setMultiplechoiceQuestion({
                                        ...multipleChoiceQuestion,
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
                        const updatedAnswers = multipleChoiceQuestion.answers.map((answer, i) => ({
                            ...answer,
                            isCorrect: id === answer.id,
                        }))
                        setMultiplechoiceQuestion({
                            ...multipleChoiceQuestion,
                            answers: updatedAnswers,
                        })
                    }}
                >
                    {multipleChoiceQuestion.answers.map((item, index) => (
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
                        let temp = { ...multipleChoiceQuestion }
                        temp.answers.push(
                            new Answer((multipleChoiceQuestion.answers.length + 1).toString()),
                        )
                        setMultiplechoiceQuestion(temp)
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
                        saveAction(multipleChoiceQuestion)
                        closeAction()
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
