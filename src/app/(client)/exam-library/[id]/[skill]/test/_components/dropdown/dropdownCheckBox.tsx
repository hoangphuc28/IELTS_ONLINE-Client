'use client'
import { Dropdown } from 'flowbite'
import { useEffect, useRef } from 'react'

export default function ComponentDropdownItemCheckBox() {
    const refBtn = useRef<HTMLButtonElement>(null)
    const dropdownDOM = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const dropdown = new Dropdown(dropdownDOM.current, refBtn.current)
    }, [])
    return (
        <>
            <section className="flex gap-2">
                <h3>Question content</h3>
                <section>
                    <button
                        ref={refBtn}
                        id="dropdownBgHoverButton"
                        data-dropdown-toggle="dropdownBgHover"
                        className="flex items-center border bg-slate-100
                            focus:ring-4 focus:outline-none focus:ring-blue-300
                            font-medium rounded-lg text-sm px-5 py-1 text-center"
                        type="button"
                    >
                        <div className="grow flex items-center gap-2 min-w-[20px]">
                            {/* <span>abc def ghi</span> */}
                        </div>
                        <div className="text-center">
                            <i className="fa-solid fa-chevron-down text-black"></i>
                        </div>
                    </button>
                    <div
                        ref={dropdownDOM}
                        id="dropdownBgHover"
                        className="z-10 hidden min-w-48 bg-zinc-50 rounded-lg shadow-lg"
                    >
                        <ul
                            className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownBgHoverButton"
                        >
                            <li>
                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                        id="checkbox-item-4"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="checkbox-item-4"
                                        className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                        Default checkbox
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                        id="checkbox-item-5"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="checkbox-item-5"
                                        className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                        state
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                        id="checkbox-item-6"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="checkbox-item-6"
                                        className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                        Default checkbox
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </>
    )
}
