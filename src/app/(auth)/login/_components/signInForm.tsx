'use client'

import { createToastDanger } from '@client/_components/toast/sysToast'
import { SignIn } from '@client/_lib/redux/actions/auth'
import { useAppShareDispatch } from '@client/_lib/redux/hooks'
import authService from '@/src/services/auth.service'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useRef } from 'react'

export default function ComponentSignInForm() {
    const dispatch = useAppShareDispatch()
    const refForm = useRef<HTMLFormElement>(null)
    const router = useRouter()

    return (
        <form
            ref={refForm}
            onSubmit={(e) => handleSignIn(e)}
            className="max-w-sm mx-auto mt-8 flex flex-col gap-3"
        >
            <h2 className="w-full mb-4 font-bold text-2xl text-center text-gray-500 uppercase">
                Sign in to your account
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
                        name="username"
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
            <div className="flex gap-2 items-center">
                <span className="text-gray-500">Don't have an account?</span>
                <Link href={'/signup'} className="text-blue-600">
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
    )

    async function handleSignIn(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = refForm.current
        if (!form) {
            return
        }
        const formData = new FormData(form)
        const keys: Record<string, FormDataEntryValue> = Object.fromEntries(formData.entries())

        try {
            // dispatch(SignIn(keys))
            await authService.signIn(keys)
            router.back()
        } catch (error: any) {
            console.log(error)
            createToastDanger(error.message)
        }
    }
}
