'use client'

import Link from 'next/link'
import ComponentSignInForm from './_components/signInForm'
import { useAppShareSelector } from '../../(client)/_lib/redux/hooks'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
    // const user = useAppShareSelector((state) => state.user)
    // const router = useRouter()

    // useEffect(() => {
    //     if (user.id) {
    //         router.back()
    //     }
    // }, [user])

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
            <ComponentSignInForm />
        </section>
    )
}
