import { Fragment, useState } from 'react'
import { Part } from '../../type/Part.class'
import { FormikProps } from 'formik'
import Modal from '../questionType/modal'
import MultipleChoice from '../questionType/multipleChoice'
import { QuestionType } from '../../type/enum'
import { UnionType } from '../../type/unionType'
import {
    DragAndDrop,
    Dropdown,
    FillTheBlank,
    MultipleChoice as MultipleChoiceType,
    MultipleResponse,
} from '../../type/Question'
import MultipleResponseForm from '../questionType/multipleResponse'
import DropdownForm from '../questionType/dropDown'
import DragAndDropForm from '../questionType/dragAndDrop'
import FillBlankForm from '../questionType/fillTheBlank'
interface Props {
    index: number
    formik: FormikProps<Part>
    showModal: boolean
    setShowModal: (check: boolean) => void
    isCreate: boolean
    showModalEditQuestion: UnionType | null
}

export default function Question({
    index,
    formik,
    showModal,
    setShowModal,
    showModalEditQuestion,
    isCreate,
}: Props) {
    const renderComponent = (type: QuestionType) => {
        switch (type) {
            case QuestionType.MultipleChoice:
                return (
                    <MultipleChoice
                        data={isCreate ? new MultipleChoiceType() : showModalEditQuestion}
                        closeAction={() => setShowModal(false)}
                        saveAction={(question: MultipleChoiceType) => {
                            if (!isCreate) {
                                const newData = formik.values.groupQuestions[index].data?.map(
                                    (item: any) => {
                                        if (item.id === question.id) {
                                            return question
                                        }
                                        return item
                                    },
                                )

                                formik.values.groupQuestions[index].data = newData
                            } else {
                                question.id = (
                                    formik.values.groupQuestions[index].data?.length + 1
                                ).toString()
                                formik.values.groupQuestions[index].data?.push(
                                    question as MultipleChoiceType,
                                )
                            }
                        }}
                        formik={formik}
                        index={index}
                    />
                )
            case QuestionType.MultipleResponse:
                return (
                    <MultipleResponseForm
                        data={isCreate ? new MultipleResponse() : showModalEditQuestion}
                        closeAction={() => setShowModal(false)}
                        saveAction={(question: MultipleResponse) => {
                            if (!isCreate) {
                                console.log(question)
                                const newData = formik.values.groupQuestions[index].data?.map(
                                    (item: any) => {
                                        if (item.id === question.id) {
                                            return question
                                        }
                                        return item
                                    },
                                )

                                formik.values.groupQuestions[index].data = newData
                            } else {
                                question.id = (
                                    formik.values.groupQuestions[index].data?.length + 1
                                ).toString()
                                formik.values.groupQuestions[index].data?.push(
                                    question as MultipleResponse,
                                )
                            }
                        }}
                        formik={formik}
                        index={index}
                    />
                )
            case QuestionType.Dropdown:
                return (
                    <DropdownForm
                        data={isCreate ? new Dropdown() : showModalEditQuestion}
                        closeAction={() => setShowModal(false)}
                        saveAction={(question: Dropdown) => {
                            if (!isCreate) {
                                console.log(question)
                                const newData = formik.values.groupQuestions[index].data?.map(
                                    (item: any) => {
                                        if (item.id === question.id) {
                                            return question
                                        }
                                        return item
                                    },
                                )

                                formik.values.groupQuestions[index].data = newData
                            } else {
                                question.id = (
                                    formik.values.groupQuestions[index].data?.length + 1
                                ).toString()
                                formik.values.groupQuestions[index].data?.push(
                                    question as MultipleResponse,
                                )
                            }
                        }}
                        formik={formik}
                        index={index}
                    />
                )

            case QuestionType.DragAndDrop:
                return (
                    <DragAndDropForm
                        data={isCreate ? new DragAndDrop() : showModalEditQuestion}
                        closeAction={() => setShowModal(false)}
                        saveAction={(question: Dropdown) => {
                            if (!isCreate) {
                                console.log(question)
                                const newData = formik.values.groupQuestions[index].data?.map(
                                    (item: any) => {
                                        if (item.id === question.id) {
                                            return question
                                        }
                                        return item
                                    },
                                )
                                formik.values.groupQuestions[index].data = newData
                            } else {
                                question.id = (
                                    formik.values.groupQuestions[index].data?.length + 1
                                ).toString()
                                formik.values.groupQuestions[index].data?.push(
                                    question as MultipleResponse,
                                )
                            }
                        }}
                        formik={formik}
                        index={index}
                    />
                )
            case QuestionType.FillInTheBlank:
                return (
                    <FillBlankForm
                        data={isCreate ? new FillTheBlank() : showModalEditQuestion}
                        closeAction={() => setShowModal(false)}
                        saveAction={(question: FillTheBlank) => {
                            if (!isCreate) {
                                console.log(question)
                                const newData = formik.values.groupQuestions[index].data?.map(
                                    (item: any) => {
                                        if (item.id === question.id) {
                                            return question
                                        }
                                        return item
                                    },
                                )
                                formik.values.groupQuestions[index].data = newData
                            } else {
                                question.id = (
                                    formik.values.groupQuestions[index].data?.length + 1
                                ).toString()
                                formik.values.groupQuestions[index].data?.push(
                                    question as MultipleResponse,
                                )
                            }
                        }}
                        formik={formik}
                        index={index}
                    />
                )
            default:
                return null
        }
    }
    const componentName: QuestionType = formik.values.groupQuestions[index].questionType
    const component = renderComponent(componentName)
    return (
        <Fragment>
            {showModal && <Modal onClose={() => setShowModal(false)}>{component}</Modal>}
        </Fragment>
    )
}
