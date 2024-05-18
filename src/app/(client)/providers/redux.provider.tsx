'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { storeShare, AppShareStore } from '../_lib/redux/store'

export function StoreShareProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppShareStore>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = storeShare()
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}
