'use client'
import React, { useState, useEffect, Fragment, useMemo } from 'react'
import {
    Accordion,
    AccordionSummary,
    AccordionActions,
    AccordionDetails,
    Button,
    Typography,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CardActions,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { FormikProps } from 'formik'
import { Part } from '../../type/Part.class'
import Close from '@mui/icons-material/Close'
import dynamic from 'next/dynamic'
import EditIcon from '@mui/icons-material/Edit'
import Question from './question'
import { UnionType } from '../../type/unionType'
import { QuestionType } from '../../type/enum'
//using useReducer
// const initialState = {
//     groupQuestion: formik.values.groupQuestions[index]
// };
// const reducer = (state , action) => {
//     switch (action.type) {
//         case 'UPDATE_INSTRUCTION':
//             console.log({...state})
//             return { ...state, groupQuestion: { ...state.groupQuestion, instruction: action.payload } };
//         default:
//             return state;
//     }
// };
// const [state, dispatch] = useReducer(reducer, initialState);
// dispatch({ type: 'UPDATE_INSTRUCTION', payload: value });

interface GroupQuestionProps {
    index: number
    formik: FormikProps<Part>
    upEvent: () => void // Up event handler
    downEvent: () => void // Down event handler
    deleteEvent: () => void
    resetEditor: boolean
}

export default function GroupQuestionsComponent({
    index,
    formik,
    upEvent,
    downEvent,
    deleteEvent,
    resetEditor,
}: GroupQuestionProps) {
    const [showModal, setShowModal] = useState(false)
    const [isCreate, setIsCreate] = useState(false)

    const [showModalEditQuestion, setShowModalEditQuestion] = useState<UnionType | null>(null)
    const DynamicEditor = dynamic(() => import('./editor/editor'), { ssr: false })
    const Editor = useMemo(() => DynamicEditor, [resetEditor])
    const deleteQuestion = (question: any) => {
        {
            const isBrowser = typeof window !== 'undefined'
            if (isBrowser && window.confirm('Bạn có chắc muốn xóa không?')) {
                const newArr = formik.values.groupQuestions[index].data.filter(
                    (el: any) => el.id !== question.id,
                )
                formik.values.groupQuestions[index].data = newArr
                formik.setValues({
                    ...formik.values,
                    groupQuestions: formik.values.groupQuestions,
                })
            }
        }
    }
    return (
        <Fragment>
            <Question
                isCreate={isCreate}
                index={index}
                formik={formik}
                showModal={showModal}
                setShowModal={setShowModal}
                showModalEditQuestion={showModalEditQuestion}
            />
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography
                        dangerouslySetInnerHTML={{
                            __html: formik.values.groupQuestions[index].instruction,
                        }}
                        sx={{
                            marginRight: '50px',
                            width: '33%',
                            flexShrink: 0,
                            wordWrap: 'break-word',
                            maxWidth: '250px',
                            maxHeight: '50px',
                            overflow: 'scroll',
                        }}
                    ></Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        {formik.values.groupQuestions[index].questionType}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <label className="title-label" htmlFor="name">
                            Instruction
                        </label>
                        <Editor
                            data={formik.values.groupQuestions[index].instruction}
                            saveData={(data: any) => {
                                formik.values.groupQuestions[index].instruction = data
                                formik.setValues({
                                    ...formik.values,
                                    groupQuestions: formik.values.groupQuestions,
                                })
                            }}
                            formik={formik}
                        />
                    </div>
                    <div className="mt-5">
                        <label className="title-label" htmlFor="name">
                            Questions
                        </label>
                        {Array.isArray(formik.values.groupQuestions[index].data) &&
                            formik.values.groupQuestions[index].data?.map((question: any, i) => (
                                <Fragment key={i}>
                                    <Card
                                        sx={{
                                            width: '100%',
                                            height: '50px',
                                            marginTop: '0.5rem',
                                        }}
                                    >
                                        <div className="flex justify-between items-center">
                                            <CardContent sx={{
                                                 maxHeight: '20px',
                                                 overflow: 'scroll',
                                            }}>
                                                <Typography
                                                    style={{ fontSize: 14, color: '#4f6799' }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: question.questionText,
                                                    }}
                                                ></Typography>
                                            </CardContent>
                                            <CardActions style={{ margin: 0 }}>
                                                <Button
                                                    size={'small'}
                                                    onClick={() => {
                                                        setIsCreate(false)
                                                        setShowModal(true)
                                                        setShowModalEditQuestion(question)
                                                    }}
                                                >
                                                    <EditIcon />
                                                </Button>
                                                {formik.values.groupQuestions[index]
                                                    .questionType !== QuestionType.Dropdown && (
                                                    <Button
                                                        onClick={() => {
                                                            deleteQuestion(question)
                                                            console.log(1)
                                                        }}
                                                        size="small"
                                                    >
                                                        <Close color="error"></Close>
                                                    </Button>
                                                )}
                                            </CardActions>
                                        </div>
                                    </Card>
                                </Fragment>
                            ))}
                    </div>
                </AccordionDetails>
                <AccordionActions>
                    <Button size={'small'} onClick={upEvent}>
                        <KeyboardArrowUpIcon />
                    </Button>
                    <Button size={'small'} onClick={downEvent}>
                        <KeyboardArrowDownIcon />
                    </Button>
                    {(formik.values.groupQuestions[index].questionType !== QuestionType.Dropdown ||
                      formik.values.groupQuestions[index].questionType !== QuestionType.DragAndDrop) ? (
                        <Button
                            onClick={() => {
                                setIsCreate(true)
                                setShowModal(true)
                                setShowModalEditQuestion(null)
                            }}
                            size={'small'}
                            style={{ color: '#4E6799' }}
                        >
                            Add Question
                        </Button>
                    ): <Fragment></Fragment>
                }
                    <Button onClick={deleteEvent} size={'small'} style={{ color: '#d52b2a' }}>
                        Delete
                    </Button>
                </AccordionActions>
            </Accordion>
        </Fragment>
    )
}
