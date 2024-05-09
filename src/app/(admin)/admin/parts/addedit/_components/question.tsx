import { Fragment, useState } from 'react'
import { Part } from '../../type/Part.class'
import { FormikProps } from 'formik'
import Modal from '../questionType/modal'
import MultipleChoice from '../questionType/multipleChoice'
import {
    FillTheBlank,
    Matching,
    MatchingFillBlank,
    MatchingHeading,
    MultipleChoice as MultipleChoiceType,
    MultipleReponse,
} from '../../type/Question'
import { Dropdown } from 'flowbite'

interface Props {
    index: number
    formik: FormikProps<Part>
    showModal: boolean
    setShowModal: (check: boolean) => void
    isCreate: boolean,
    showModalEditQuestion:
        | MultipleChoiceType
        | MultipleReponse
        | Dropdown
        | Matching
        | MatchingHeading
        | FillTheBlank
        | MatchingFillBlank
}
export default function AddEditQuestion({
    index,
    formik,
    showModal,
    setShowModal,
    showModalEditQuestion,
    isCreate,
}: Props) {
    return (
        <Fragment>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    {
                        <MultipleChoice
                            question={isCreate ? new MultipleChoiceType : showModalEditQuestion}
                            closeAction={() => setShowModal(false)}
                            saveAction={(question: MultipleChoiceType) => {
                                if(!isCreate) {
                                    console.log(question)
                                    const newData = formik.values.groupQuestions[index].data?.map(
                                        (item: MultipleChoiceType) => {
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
                    }
                </Modal>
            )}
        </Fragment>
    )
}
