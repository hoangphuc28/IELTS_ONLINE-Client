'use client'
import { useRouter } from 'next/router'
import LayoutCenter from '../_components/layoutCenter'
import SideBar, { targets } from './_components/sideBar'
import { usePathname } from 'next/navigation'
import '@clientAccount/styles/account.scss'
import Header from '@client/_components/header'
import Footer from '@client/_components/footer'

export default function AccountLayout({ children }: { children: React.ReactNode }) {
    // #region select side bar active
    const pathname = usePathname()
    const routerSegments = pathname.split('/')
    const activeSidebar = routerSegments[routerSegments.length - 1]
    return (
        <>
            <Header />
            <main className="account-page min-h-[80vh]">
                <LayoutCenter className="my-5 pb-3">
                    <section className="flex flex-col sm:grid sm:grid-cols-12 gap-x-5">
                        <SideBar className="col-span-3" target={activeSidebar} />
                        <article className="col-span-9 text-neutral-600 account-page-content">
                            {children}
                        </article>
                    </section>
                </LayoutCenter>
            </main>
            <Footer />
            <div id="alert" className="z-50 fixed top-[20%] right-0 pointer-events-none"></div>
        </>
    )
}
