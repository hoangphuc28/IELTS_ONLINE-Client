'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ComponentRedirectLogin() {
    const router = useRouter()
    useEffect(() => {
        const accessTokenKey = process.env.NEXT_PUBLIC_ACCESS_TOKEN_LOCAL_NAME
        if (!accessTokenKey) return
        const haveAccessToken = localStorage.getItem(accessTokenKey)
        if (!haveAccessToken) {
            router.push('/login')
        }
    }, [])
    return <></>
}
