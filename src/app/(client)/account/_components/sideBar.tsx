import Link from 'next/link'
import { CSSProperties } from 'react'

export enum targets {
    dashboard = 'dashboard',
    testHistory = 'test-history',
    profile = 'profile',
}

export default function SideBar({
    className,
    style,
    target,
}: {
    className?: string
    style?: CSSProperties
    target: string
}) {
    return (
        <>
            <section className={`${className ? className : ''}`}>
                <aside
                    className={`flex flex-col gap-y-2 bg-white rounded overflow-hidden `}
                    style={style}
                >
                    <SideBarItem
                        href={'/account/' + targets.dashboard}
                        isActive={target === targets.dashboard}
                    >
                        <i className="fa-solid fa-house text-sm"></i>
                        <span className="ms-2">Dashboard</span>
                    </SideBarItem>
                    <SideBarItem
                        href={'/account/' + targets.testHistory}
                        isActive={target === targets.testHistory}
                    >
                        <i className="fa-solid fa-chart-line text-sm"></i>
                        <span className="ms-2">Lịch sử làm bài</span>
                    </SideBarItem>
                    <SideBarItem
                        href={'/account/' + targets.profile}
                        isActive={target === targets.profile}
                    >
                        <i className="fa-regular fa-user text-sm"></i>
                        <span className="ms-2">Hồ sơ của tôi</span>
                    </SideBarItem>
                </aside>
            </section>
        </>
    )
}

function SideBarItem({
    children,
    isActive,
    href,
}: {
    children: React.ReactNode
    href: string
    isActive: boolean
}) {
    const bgActive = 'bg-cyan-300'
    const defaultBg = isActive ? bgActive : 'bg-white'
    const fontWeightActive = 'font-bold'
    const defaultFontWeight = isActive ? fontWeightActive : 'font-regular'
    return (
        <Link
            className={`flex items-center ${defaultBg} hover:bg-cyan-300 ${defaultFontWeight} hover:font-bold ps-4 py-2 pe-4 text-base text-neutral-500`}
            href={href}
        >
            {children}
        </Link>
    )
}
