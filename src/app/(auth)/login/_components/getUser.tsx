'use client'

import { setUser } from '@/src/app/(client)/_lib/redux/reducers/userReducer'
import authService from '@/src/services/auth.service'
import { getTokenKey } from '@/src/utils/shares/localStorage'
import { useAppShareDispatch, useAppShareSelector } from '@client/_lib/redux/hooks'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function ComponentGetUser() {
    const dispatch = useAppShareDispatch()
    const user = useAppShareSelector((state) => state.user)
    const router = useRouter()
    useEffect(() => {
        // check token, if it has existed, then verify.
        const accessToken = localStorage.getItem(getTokenKey())
        if (!accessToken) {
            return
        }

        authService
            .verify(accessToken!)
            .then((user) => dispatch(setUser(user)))
            .catch((error) => {
                console.log(error)
            })
    }, [user])
    return <></>
}
