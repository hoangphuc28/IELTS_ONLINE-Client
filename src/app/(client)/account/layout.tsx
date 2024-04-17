'use client'
import { useRouter } from 'next/router'
import LayoutCenter from '../_components/layoutCenter'
import SideBar, { targets } from './_components/sideBar'
import { usePathname } from 'next/navigation'

export default function AccountLayout({ children }: { children: React.ReactNode }) {
    // #region select side bar active
    const pathname = usePathname()
    const routerSegments = pathname.split('/')
    const activeSidebar = routerSegments[routerSegments.length - 1]
    return (
        <>
            <main className="min-h-[50vh]">
                <LayoutCenter className="my-5">
                    <section className="flex flex-col sm:grid sm:grid-cols-12 gap-x-5">
                        <SideBar className="col-span-3" target={activeSidebar} />
                        <article className="col-span-9 text-neutral-600">{children}</article>
                    </section>
                </LayoutCenter>
            </main>
        </>
    )
}
