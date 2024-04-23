import { MouseEvent } from "react"
import { handleShowAccordingData } from "./according"

export default function toQuestion() {
    const listBtn = document.querySelectorAll('[data-question-id]')
    listBtn.forEach((btn) => {
        btn.addEventListener('click', (e: Event) => {
            const targetBtn = e.currentTarget as (HTMLElement | null)
            if (!targetBtn) {
                console.log('No target')
                return
            }
            const idQuestion = targetBtn.dataset["questionIdTarget"]
            if (!idQuestion) {
                console.log("No question")
                return
            }

            const idPart = targetBtn.dataset["partId"]
            handleShowAccordingData(idPart)

            const questionContent = document.querySelector(`[data-question-id-content="${idQuestion}]`) as (HTMLElement | null)
            if (!questionContent) {
                console.log('Question not found')
                return
            }
            questionContent.scrollIntoView({ behavior: 'smooth' })
        })
    })
}

export function handleToQuestion(e: MouseEvent<HTMLElement, any>) {
    const targetBtn = e.currentTarget as (HTMLElement | null)
    if (!targetBtn) {
        console.log('No target')
        return
    }
    const idQuestion = targetBtn.dataset["questionIdTarget"]
    if (!idQuestion) {
        console.log("No question")
        return
    }

    const idPart = targetBtn.dataset["partId"]
    handleShowAccordingData(idPart)

    const questionContent = document.querySelector(`[data-question-id-content="${idQuestion}]`) as (HTMLElement | null)
    if (!questionContent) {
        console.log('Question not found')
        return
    }
    questionContent.scrollIntoView({ behavior: 'smooth' })
}