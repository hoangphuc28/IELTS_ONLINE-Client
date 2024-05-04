'use client'

import { Modal } from 'flowbite'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

export default function ComponentModal({
    isShow,
    setIsShow,
}: {
    isShow: boolean
    setIsShow: Dispatch<SetStateAction<boolean>>
}) {
    const refModal = useRef<HTMLElement>(null)
    return (
        <>
            {isShow && (
                <section
                    onClick={(e) => handleClose(e)}
                    ref={refModal}
                    className="fixed top-0 bottom-0 left-0 right-0 bg-black/[0.6] flex justify-center"
                >
                    <form
                        onSubmit={(e) => handleSubmit(e)}
                        className="flex flex-col gap-2 relative top-[10%] max-h-[60vh] w-[500px] bg-white rounded px-5 py-5"
                    >
                        <section className="text-center mb-5">
                            <h2>Add Student</h2>
                        </section>

                        <div className="flex flex-col gap-2">
                            <section className="grid grid-cols-12 items-center gap-2">
                                <div className="col-span-1"></div>
                                <p className="col-span-2">Mail</p>
                                <input
                                    className="block col-span-8 text-base rounded px-2 py-1"
                                    type="text"
                                    name="mail"
                                />
                                <div className="col-span-1"></div>
                            </section>
                            <section className="grid grid-cols-12 items-center gap-2">
                                <div className="col-span-1"></div>
                                <p className="col-span-2">Name</p>
                                <input
                                    className="block col-span-8 text-base rounded px-2 py-1"
                                    type="text"
                                    name="name"
                                />
                                <div className="col-span-1"></div>
                            </section>
                            <section className="grid grid-cols-12 items-center gap-2">
                                <div className="col-span-1"></div>
                                <p className="col-span-2">Password</p>
                                <input
                                    className="block col-span-8 text-base rounded px-2 py-1"
                                    type="password"
                                    name="password"
                                />
                                <div className="col-span-1"></div>
                            </section>
                        </div>

                        <section className="mt-auto flex gap-2 justify-end">
                            <button
                                className="px-4 py-2 border-0 outline-0 text-base rounded"
                                type="button"
                                onClick={(e) => handleClose(e)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 border-0 outline-0 text-base bg-cyan-400 text-white rounded"
                                type="submit"
                            >
                                Add
                            </button>
                        </section>
                    </form>
                </section>
            )}
        </>
    )

    function handleClose(e: any) {
        setIsShow(false)
    }
    function handleSubmit(e: any) {
        e.preventDefault()
    }
}
