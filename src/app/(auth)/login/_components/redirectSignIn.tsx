'use client'

import { createToastDanger } from '@/src/app/(client)/_components/toast/sysToast'
import { setUser } from '@/src/app/(client)/_lib/redux/reducers/user.reducer'
import authService from '@/src/services/auth.service'
import { getTokenKey } from '@/src/utils/shares/localStorage'
import { useAppShareDispatch, useAppShareSelector } from '@client/_lib/redux/hooks'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function ComponentRedirectSignIn() {
    const dispatch = useAppShareDispatch()
    const user = useAppShareSelector((state) => state.user)
    const router = useRouter()
    useEffect(() => {
        const redirectSignIn = () => router.push('/login')
        const accessToken = localStorage.getItem(getTokenKey())
        if (!accessToken) {
            redirectSignIn()
            return
        }

        // authService
        //     .verify(accessToken!)
        //     .then((user) => dispatch(setUser(user)))
        //     .catch((error) => {
        //         console.log(error)
        //         createToastDanger(error?.message || 'Login session has expired')
        //         redirectSignIn()
        //     })
    }, [user])
    return <></>
}
