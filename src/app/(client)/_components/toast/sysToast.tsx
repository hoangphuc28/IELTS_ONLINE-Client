'use client'

import { initDismisses } from 'flowbite'
import { useEffect } from 'react'
import { Container, createRoot } from 'react-dom/client'

export const CONSTANT = {
    types: {
        info: 'info',
        danger: 'danger',
        warn: 'warn',
    },
}

export function createToastDanger(message: string = 'Error!') {
    const containerAlert = document.getElementById('alert')
    const container = document.createElement('div') as Container
    const root = createRoot(container)
    root.render(<ComponentSysToast type={CONSTANT.types.danger} message={message} />)
    containerAlert?.appendChild(container)

    setTimeout(() => {
        root?.unmount()
    }, 2000)
}

export default function ComponentSysToast({ type, message }: { type: string; message: string }) {
    let result: JSX.Element = toastInfo({ message })
    if (type === CONSTANT.types.danger) result = toastDanger({ message })
    if (type === CONSTANT.types.warn) result = toastWarn({ message })
    useEffect(() => {
        initDismisses()
    }, [])
    return <>{result}</>
}

function toastInfo({ message }: { message: string }) {
    const date = new Date().getTime()
    const id = 'toast-danger-' + date
    return (
        <>
            <div
                id={id}
                className=" flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
            >
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <i className="fa-solid fa-circle-check"></i>
                    <span className="sr-only">Check icon</span>
                </div>
                <div className="ms-3 text-sm font-normal">{message}</div>
                <button
                    type="button"
                    className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-dismiss-target={'#' + id}
                    aria-label="Close"
                >
                    <span className="sr-only">Close</span>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </>
    )
}
function toastDanger({ message }: { message: string }) {
    const date = new Date().getTime()
    const id = 'toast-danger-' + date
    return (
        <>
            <div
                id={id}
                className=" flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
            >
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                    <i className="fa-solid fa-circle-xmark"></i>
                    <span className="sr-only">Error icon</span>
                </div>
                <div className="ms-3 text-sm font-normal">{message}</div>
                <button
                    type="button"
                    className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-dismiss-target={'#' + id}
                    aria-label="Close"
                >
                    <span className="sr-only">Close</span>

                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </>
    )
}
function toastWarn({ message }: { message: string }) {
    const date = new Date().getTime()
    const id = 'toast-warning-' + date
    return (
        <>
            <div
                id={id}
                className=" flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
            >
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                    <span className="sr-only">Warning icon</span>
                </div>
                <div className="ms-3 text-sm font-normal">{message}</div>
                <button
                    type="button"
                    className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-dismiss-target={'#' + id}
                    aria-label="Close"
                >
                    <span className="sr-only">Close</span>

                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </>
    )
}
