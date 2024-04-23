import { MouseEvent } from "react"

export default function according() {
    const targets = document.querySelectorAll('[data-according-target]')
    targets.forEach((tar: Element) => {
        tar.addEventListener('click', (e: Event) => {
            const target = e.currentTarget as HTMLElement | null
            const currentShowTarget = document.querySelector('[data-according-target="true"]') as (HTMLElement | null)
            // #region change element show
            if (currentShowTarget) {
                currentShowTarget.dataset['accordingTarget'] = 'false'
                const contentShowId = currentShowTarget.dataset['accordingId']
                if (contentShowId) {
                    toggleShow(`[data-according-body="${contentShowId}"]`)
                    toggleShow(`[data-according-content="${contentShowId}"]`)
                }
            }
            if (!target) {
                console.log('No target')
                return
            }
            target.dataset['accordingTarget'] = 'true'
            // #endregion change element show

            // #region show content
            const contentId = target.dataset['accordingId']
            if (!contentId) {
                console.log('No id content')
                return
            }

            toggleShow(`[data-according-body="${contentId}"]`)
            toggleShow(`[data-according-content="${contentId}"]`)
            // #endregion show content
        })
    })
}

function toggleShow(selector: string) {
    const target = document.querySelector(selector) as HTMLElement | null
    if (!target) {
        console.log('[toggle show] No target')
        return
    }
    // #region use class tailwind
    if (target.classList.contains('flex')) {
        target.classList.remove('flex')
        target.classList.add('hidden')
    } else if (target.classList.contains('hidden')) {
        target.classList.remove('hidden')
        target.classList.add('flex')
    }
    // #endregion use class tailwind

    // #region use style
    // if (target.style.display === 'none' || target.style.display.length === 0) {
    //     target.style.display = 'flex'
    // } else
    //     if (target.style.display !== 'none') {
    //         target.style.display = 'none'
    //     }
    // #endregion use style
}

export function handleShowAccordingData(id?: string): void {
    if (!id) {
        console.log("No part")
        return
    }

    const part = document.querySelector(`[data-part-id=${id}]`) as (HTMLElement | null)
    if (!part) {
        console.log("Part not found")
        return
    }

    const isTarget = part.dataset['accordingTarget']
    if (isTarget === 'undefined') {
        console.log("Part not found")
        return
    }

    if (isTarget === 'false') {
        part.click()
    }

}