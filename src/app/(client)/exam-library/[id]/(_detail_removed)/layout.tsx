import React from 'react'
import Header from '@client/_components/header'
import Footer from '@client/_components/footer'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <div id="alert" className="z-50 fixed top-[20%] right-0 pointer-events-none"></div>
        </>
    )
}
