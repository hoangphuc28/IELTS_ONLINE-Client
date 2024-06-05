'use client'

import Link from 'next/link'
import ComponentSignUpForm from './_components/signUpForm'
import Image from 'next/image'

export default function Page() {
    return (
        <section className="min-h-[100vh] bg-gray-100">
            <section className="flex flex-col items-center pt-4">
                <section className="logo w-24">
                    <Link href="/" className="logo">
                        {/* <img
                            alt=""
                            className="w-100 w-full"
                            src={process.env.NEXT_PUBLIC_APP_LOGO}
                        /> */}
                        <Image
                            alt=""
                            className="w-100 w-full"
                            src={process.env.NEXT_PUBLIC_APP_LOGO || ''}
                        />
                    </Link>
                </section>
            </section>
            <ComponentSignUpForm />
        </section>
    )
}
