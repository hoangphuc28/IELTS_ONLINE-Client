'use client'

import { useRouter } from 'next/navigation'

export default function RedirectBack() {
    const router = useRouter()

    router.back()
}
