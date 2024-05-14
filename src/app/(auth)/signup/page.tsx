'use client'

import authService from '@/src/services/auth.service'
import Link from 'next/link'
import { FormEvent, MouseEvent, useRef } from 'react'

export default function Page() {
    const refForm = useRef<HTMLFormElement>(null)
    return (
        <section className="min-h-[100vh] bg-gray-100">
            <section className="flex flex-col items-center pt-4">
                <section className="logo w-24">
                    <Link href="/" className="logo">
                        <img
                            alt=""
                            className="w-100 w-full"
                            src={process.env.NEXT_PUBLIC_APP_LOGO}
                        />
                    </Link>
                </section>
            </section>
            <form
                ref={refForm}
                onSubmit={(e) => handleSignUp(e)}
                className="max-w-sm mx-auto mt-8 flex flex-col gap-3"
            >
                <h2 className="w-full mb-4 font-bold text-2xl text-center text-gray-500 uppercase">
                    Create an account
                </h2>
                <div className="">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Email
                    </label>
                    <div className="relative top-0">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <i className="fa-solid fa-envelope text-gray-500"></i>
                        </div>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 pb-3"
                            placeholder="name@gmail.com"
                            required
                        />
                    </div>
                </div>
                <div className="">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Password
                    </label>
                    <div className="relative top-0">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <i className="fa-solid fa-lock text-gray-500"></i>
                        </div>
                        <input
                            type="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                            required
                            placeholder="password"
                        />
                    </div>
                </div>
                <div className="">
                    <label
                        htmlFor="repeat-password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Confirm password
                    </label>
                    <div className="relative top-0">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <i className="fa-solid fa-lock text-gray-500"></i>
                        </div>
                        <input
                            type="password"
                            id="repeat-password"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                            required
                            placeholder="confirm password"
                        />
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="text-gray-500">Have an account already?</span>
                    <Link href={'/login'} className="text-blue-600">
                        Sign Up
                    </Link>
                </div>
                <button
                    type="submit"
                    className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center font-bold"
                >
                    Submit
                </button>
            </form>
        </section>
    )

    async function handleSignUp(e: FormEvent<HTMLFormElement>) {
        const form = refForm.current
        if (!form) {
            e.preventDefault()
            return
        }
        const formData = new FormData(form)

        try {
            const result = await authService.signUp(formData)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
}
