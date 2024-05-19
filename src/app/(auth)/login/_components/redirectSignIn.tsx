'use client'

import { getTokenKey } from '@/src/utils/shares/localStoreage'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ComponentRedirectLogin() {
    const router = useRouter()
    useEffect(() => {
        const haveAccessToken = localStorage.getItem(getTokenKey())
        if (!haveAccessToken) {
            router.push('/login')
        }
    }, [])
    return <></>
}
