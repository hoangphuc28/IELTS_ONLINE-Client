'use client'

import IAnswer from '@/src/utils/shares/interfaces/IAnswer'
import ComponentDropItem, {
    componentStringDropItem,
} from '@/src/app/(client)/exam-library/[id]/[skill]/test/_components/dragdrop/dropItem'
import ComponentListDrag from '@/src/app/(client)/exam-library/[id]/[skill]/test/_components/dragdrop/listDrag'
import ComponentFloatingInputLabel, {
    componentStringFloatingInputLabel,
} from '../floatingInputLabel'
import { useParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import ComponentDropdownItem from '../dropdown/dropdownItem'
import { allowDrop, drop } from '../../../utils/dragAndDrop'
import ComponentContainerMultiChoice from '@/src/app/(client)/exam-library/[id]/[skill]/test/_components/questionItems/multipleChoice'
import ComponentContainerMultipleResponse from '@clientExamLibrary/[id]/[skill]/test/_components/questionItems/multipleResponse'

import { QuestionType } from '@/src/utils/constants/questionType'

import { GroupShowDTO } from '../../../../../../../../utils/shares/dto/group-show.dto'

export default function ComponentListQuestionContent({
    data,
    startQuestionIndex,
}: {
    data: GroupShowDTO
    startQuestionIndex?: number
}) {
    const params = useParams<{ skill: string }>()
    // if (params.skill === 'Speaking') return <></>
    if (params.skill === 'Writing') return <ComponentWritingQuestion data={data} />
    if (data.type === QuestionType.multiChoice) return <ComponentListMultipleChoice data={data} />
    if (data.type === QuestionType.multipleResponse)
        return <ComponentListQuestionMultipleResponse data={data} />
    if (data.type === QuestionType.matching) return <ComponentQuestionDragDrop data={data} />
    if (data.type === QuestionType.fillInTheBlank)
        return <ComponentQuestionShortAnswer data={data} startQuestionIndex={startQuestionIndex} />
    if (data.type === QuestionType.dropdown) return <ComponentQuestionDropDown data={data} />
    if (data.type === QuestionType.matchingHeading)
        return <ComponentQuestionDragDropHeading data={data} />
    if (data.type === QuestionType.matchingFillInTheBlanks)
        return <ComponentQuestionDragDropShortAnswer data={data} />
    // if (data.type === 'DROP_DOWN_CHECKBOX') return <ComponentDropDownCheckbox data={data} />
    return <></>
}

function ComponentWritingQuestion({ data }: { data: GroupShowDTO }) {
    return (
        <section className="flex flex-col gap-5 px-5 w-full">
            {data.questions.map((question) => (
                <textarea
                    name={question.id}
                    className="w-full rounded-lg border-violet-500 border-2"
                    rows={16}
                ></textarea>
            ))}
        </section>
    )
}

function ComponentListMultipleChoice({ data }: { data: GroupShowDTO }) {
    return (
        <>
            <section className="flex flex-col gap-2">
                <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
                <h3 dangerouslySetInnerHTML={{ __html: data.description }}></h3>
                {data.questions.map((question, index) => {
                    const key = 'exam-library-part-list-question-choice-' + index
                    return (
                        <ComponentContainerMultiChoice
                            examSkillDetailId={data.examSkillDetailId}
                            data={question}
                            key={key}
                        />
                    )
                })}
            </section>
        </>
    )
}
function ComponentListQuestionMultipleResponse({ data }: { data: GroupShowDTO }) {
    return (
        <>
            <section className="flex flex-col gap-2">
                <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
                <h3 dangerouslySetInnerHTML={{ __html: data.description }}></h3>
                {data.questions.map((question, index) => {
                    const key = 'exam-library-part-list-question-choice-' + index
                    return (
                        <ComponentContainerMultipleResponse
                            examSkillDetailId={data.examSkillDetailId}
                            data={question}
                            key={key}
                        />
                    )
                })}
            </section>
        </>
    )
}
function ComponentQuestionDragDrop({ data }: { data: GroupShowDTO }) {
    const answers: IAnswer[] = []
    data.questions.forEach((question) => {
        // every question have one answer
        question.answers.forEach((answer) => {
            const ans = answers.find((an) => answer.content === an.content)
            if (!ans) {
                answers.push({ ...answer })
            }
        })
    })
    return (
        <>
            <section className="flex flex-col gap-2">
                <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
                <h3 dangerouslySetInnerHTML={{ __html: data.description }}></h3>

                <div className="flex gap-2">
                    <ComponentListDrag groupId={data.id} data={answers} />
                    <div className="flex flex-col gap-2">
                        {data.questions.map((question, index) => {
                            const key = 'exam-library-part-list-question-choice-' + index
                            if (question.content.trim().length === 0)
                                return <section key={key}></section>
                            return <ComponentDropItem groupId={data.id} data={question} key={key} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
function ComponentQuestionShortAnswer({
    data,
    startQuestionIndex,
}: {
    data: GroupShowDTO
    startQuestionIndex?: number
}) {
    const refDataHTML = useRef<HTMLDivElement>(null)
    let dataHTML = data.questions[0].content
    let index = 0
    while (index < data.questions[0].answers.length - 1) {
        index++
        dataHTML = dataHTML.replace(
            '<ShortAnswer />',
            componentStringFloatingInputLabel({ id: 'group-' + data.id + '-question-' + index }),
        )
    }
    return (
        <>
            <section className="flex flex-col gap-2 short-answer">
                <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
                <h3 dangerouslySetInnerHTML={{ __html: data.description }}></h3>

                <section className="flex gap-1">
                    <div ref={refDataHTML} dangerouslySetInnerHTML={{ __html: dataHTML }}></div>
                    {/* {data.questions.map((question, index) => (
                        <ComponentFloatingInputLabel
                            id={question.id}
                            key={'question-' + question.id + '-short-answer-' + index}
                            label={(startQuestionIndex + index).toString()}
                        />
                    ))} */}
                </section>
            </section>
        </>
    )
}

function ComponentQuestionDropDown({ data }: { data: GroupShowDTO }) {
    return (
        <section className="flex flex-col gap-2">
            <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: data.description }}></h3>
            <section className="flex flex-col gap-2">
                {data.questions.map((question, index) => (
                    <ComponentDropdownItem
                        key={'question-' + question.id + '-index-' + index}
                        data={question}
                        answers={data.answers || []}
                    />
                ))}
            </section>
        </section>
    )
}

function ComponentQuestionDragDropHeading({ data }: { data: GroupShowDTO }) {
    useEffect(() => {
        for (let index = 0; index < data.questions.length; index++) {
            const questionId = data.questions[index]

            const input = document.querySelector(
                `input[name="${questionId}"]`,
            ) as HTMLInputElement | null
            if (!input) continue
            const parentInput = input.parentElement as HTMLInputElement | null
            if (!parentInput) continue
            parentInput.addEventListener('drop', (e) => {
                drop(e as any)
            })
            parentInput.addEventListener('dragover', (e) => {
                allowDrop(e as any)
            })
        }
    }, [])
    return (
        <section className="flex flex-col gap-2">
            <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: data.description }}></h3>

            <section className="flex flex-col gap-2">
                <h3 className="text-base font-bold">List of answers</h3>
                <ComponentListDrag groupId={data.id} data={data.answers || []} />
            </section>
        </section>
    )
}

function ComponentQuestionDragDropShortAnswer({ data }: { data: GroupShowDTO }) {
    const refDataHTML = useRef<HTMLDivElement>(null)
    let dataHTML = data.questions[0].content
    let index = 0
    while (index < (data.answers || []).length - 1) {
        index++
        dataHTML = dataHTML.replace(
            '<DragAndDropShortAnswer />',
            componentStringDropItem({
                groupId: data.id,
                data: {
                    id: 'group-' + data.id + '-question-' + index,
                    content: '',
                    answers: [],
                    src: '',
                },
            }),
        )
    }
    return (
        <section>
            <section className="flex flex-col gap-2">
                <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
                <h3 dangerouslySetInnerHTML={{ __html: data.description }}></h3>

                <section className="flex flex-col gap-2">
                    <div
                        className=""
                        ref={refDataHTML}
                        dangerouslySetInnerHTML={{ __html: dataHTML }}
                    ></div>
                    <h3 className="text-base font-bold">List of answers</h3>
                    <ComponentListDrag groupId={data.id} data={data.answers || []} />
                </section>
            </section>
        </section>
    )
}

// function ComponentDropDownCheckbox({ data }: { data: GroupShowDTO }) {
//     return (
//         <>
//             <section className="flex flex-col gap-2">
//                 <h3 dangerouslySetInnerHTML={{ __html: data.description }}></h3>
//                 <section className="flex flex-col gap-2">
//                     {data.questions.map((question, index) => {
//                         return (
//                             <ComponentDropdownItemCheckBox
//                                 key={'question-' + question.id + '-' + index}
//                             />
//                         )
//                     })}
//                 </section>
//             </section>
//         </>
//     )
// }
