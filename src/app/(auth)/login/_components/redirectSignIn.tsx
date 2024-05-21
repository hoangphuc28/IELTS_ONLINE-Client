'use client'

import { useAppShareSelector } from '@client/_lib/redux/hooks'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ComponentRedirectLogin() {
    const user = useAppShareSelector((state) => state.user)
    const router = useRouter()
    useEffect(() => {
        if (!user.id) {
            router.push('/login')
        }
    }, [user])
    return <></>
}
