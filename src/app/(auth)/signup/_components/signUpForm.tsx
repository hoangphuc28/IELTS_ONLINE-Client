'use client'

import { createToastDanger } from '@/src/app/(client)/_components/toast/sysToast'
import authService from '@/src/services/auth.service'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useRef } from 'react'
import { verify } from '../../login/_components/getUser'
import { useAppShareDispatch } from '@/src/app/(client)/_lib/redux/hooks'

export default function ComponentSignUpForm() {
    const refForm = useRef<HTMLFormElement>(null)
    const dispatch = useAppShareDispatch()
    const router = useRouter()
    return (
        <form
            ref={refForm}
            onSubmit={(e) => handleSignUp(e)}
            className="max-w-sm mx-auto mt-8 flex flex-col gap-3"
            method="post"
        >
            <h2 className="w-full mb-4 font-bold text-2xl text-center text-gray-500 uppercase">
                Create an account
            </h2>
            <div className="">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Name
                </label>
                <div className="relative top-0">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <i className="fa-solid fa-id-badge text-gray-500"></i>
                    </div>
                    <input
                        type="text"
                        id="text"
                        name="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 pb-3"
                        placeholder="Your name"
                        required
                        value="name"
                        onChange={(e) => {}}
                    />
                </div>
            </div>
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
                        name="mail"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 pb-3"
                        placeholder="name@gmail.com"
                        required
                        value="abc@gmail.com"
                        onChange={(e) => {}}
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
                        name="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                        required
                        placeholder="password"
                        value="12345678"
                        onChange={(e) => {}}
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
                        name="confirmPassword"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                        required
                        placeholder="confirm password"
                        value="12345678"
                        onChange={(e) => {}}
                    />
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <span className="text-gray-500">Have an account already?</span>
                <Link href={'/login'} className="text-blue-600">
                    Sign In
                </Link>
            </div>
            <button
                type="submit"
                className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center font-bold"
            >
                Submit
            </button>
        </form>
    )

    async function handleSignUp(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = refForm.current
        if (!form) {
            return
        }
        const formData = new FormData(form)
        const keys: Record<string, FormDataEntryValue> = Object.fromEntries(formData.entries())

        try {
            const result = await authService.signUpTempUser(keys)

            verify(dispatch)
            router.replace('/')
        } catch (error: any) {
            console.log(error)
            createToastDanger(error.message)
        }
    }
}
