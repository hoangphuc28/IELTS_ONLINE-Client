'use client'
import Link from 'next/link'
import LayoutCenter from './layoutCenter'
import ComponentSearch from './search'
import { MouseEvent, useEffect } from 'react'
import { createToastDanger } from './toast/sysToast'
import { useAppShareDispatch, useAppShareSelector } from '../_lib/redux/hooks'
import { IUserState, setUser } from '../_lib/redux/reducers/userReducer'
import { userRole } from '@/src/utils/shares/interfaces/IUser'
import { getTokenKey } from '@/src/utils/shares/localStorage'

export default function Header() {
    const user = useAppShareSelector((state) => state.user)

    return (
        <>
            <header className="shadow">
                {/* logo desktop and banner and header mobile */}
                <section>
                    <LayoutCenter>
                        <section className="hidden sm:flex items-center justify-between py-2">
                            <div className="logo lg:w-28 sm:w-28 rounded-full shadow-xl">
                                <Link href="/" className="logo">
                                    <img
                                        alt=""
                                        className="w-100 w-full"
                                        src={process.env.NEXT_PUBLIC_APP_LOGO}
                                    />
                                </Link>
                            </div>
                            {/* banner */}
                            <section
                                className="header-banner w-3/4 min-h-[100px] bg-img-center rounded"
                                style={{
                                    background: `url("./../../../../../IELTS Online Practice Tests FREE _ IELTS Online Tests_files/da18bdcf8b0a4f8d6afce6dcf976b3b6.png")`,
                                }}
                            ></section>
                        </section>
                        {/* mobile */}
                        <section className="header-mobile flex sm:hidden justify-between items-center px-2 py-2 shadow shadow-lg-[#000]">
                            <section className="logo mobile w-16">
                                <Link href="/" className="logo">
                                    <img
                                        alt=""
                                        className="w-100 w-full"
                                        src={process.env.NEXT_PUBLIC_APP_LOGO}
                                    />
                                </Link>
                            </section>
                            <nav className="h-full flex md:hidden items-center">
                                <ContainerSignInSignUp />
                                <ContainerAccount user={user} />
                            </nav>
                        </section>
                    </LayoutCenter>
                </section>
                {/* feature - nav  bg-purple-400 bg-yellow-400 bg-pink-400 */}
                <section className="hidden h-[80px] bg-[#294563] md:block py-2 bg-violet-950">
                    <LayoutCenter className="h-full">
                        <nav className="h-full flex justify-between items-center gap-x-5">
                            <ContainerRenderLogo />
                            <ComponentRenderLibrary />

                            <section className="grow">
                                <ComponentSearch className="w-full bg-white" />
                            </section>
                            <section className="flex items-center gap-x-2">
                                {(() => {
                                    if (!user) return <ContainerSignInSignUp />
                                    return <ContainerAccount user={user} />
                                })()}
                            </section>
                        </nav>
                    </LayoutCenter>
                </section>
            </header>
        </>
    )
}

// function ExamLibrary() {
//     return (
//         <>
//             <div className="flex flex-col gy-5">
//                 <div>
//                     <Link
//                         href="/exam-library?skill=listening"
//                         className="text-white  hover:opacity-[0.8]"
//                     >
//                         IELTS Listening Tests
//                     </Link>
//                 </div>
//                 <div>
//                     <Link
//                         href="/exam-library?skill=reading"
//                         className="text-white  hover:opacity-[0.8]"
//                     >
//                         IELTS Reading Tests
//                     </Link>
//                 </div>
//                 <div>
//                     <Link
//                         href="/exam-library?skill=writing"
//                         className="text-white  hover:opacity-[0.8]"
//                     >
//                         IELTS Writing Tests
//                     </Link>
//                 </div>
//                 <div>
//                     <Link
//                         href="/exam-library?skill=speaking"
//                         className="text-white  hover:opacity-[0.8]"
//                     >
//                         IELTS Speaking Tests
//                     </Link>
//                 </div>
//                 <div>
//                     <Link href="/exam-library" className="text-white  hover:opacity-[0.8]">
//                         IELTS Test Collection
//                     </Link>
//                 </div>
//             </div>
//         </>
//     )
// }

function ContainerRenderLogo() {
    return (
        <>
            <section>
                <Link href="/" className="text-3xl text-white">
                    <i className="fa-solid fa-house"></i>
                </Link>
            </section>
            {/* <section className="h-full logo shadow-lg rounded-full">
                <Link href="/" className="h-full logo">
                    <img
                        alt=""
                        className="h-full"
                        src={process.env.NEXT_PUBLIC_APP_LOGO}
                    />
                </Link>
            </section> */}
        </>
    )
}

function ContainerSignInSignUp() {
    return (
        <>
            <section className="pe-2 me-2 sm:me-0 border-r border-black md:border-white">
                <Link
                    className="text-black sm:text-white"
                    data-drupal-selector="menu-item-user"
                    href="/login"
                >
                    Sign In
                </Link>
            </section>
            <section className="">
                <Link
                    className="text-black sm:text-white"
                    data-drupal-selector="menu-item-user"
                    href="/signup"
                >
                    Sign Up
                </Link>
            </section>
        </>
    )
}

function ContainerAccount({ user }: { user: IUserState }) {
    const dispatch = useAppShareDispatch()
    return (
        <>
            <section local-btn-dropdown-toggle="">
                <Link
                    className="block bg-gray-500 rounded-full w-[40px] h-[40px] flex items-center justify-center text-lg text-white"
                    href="/account/dashboard"
                >
                    <i className="fa-solid fa-user-tie"></i>
                </Link>
                <section
                    // {/** bg-amber-100 */}
                    className="hidden z-[9999] backdrop-blur-md bg-white/65 rounded-b pt-1 pb-2 min-w-[160px] absolute top-[110%] right-0 text-base shadow shadow-fuchsia-400"
                    local-data-dropdown-toggle=""
                >
                    {user.role == userRole.ADMIN && (
                        <Link
                            className="block text-violet-800 ps-3 pe-5 py-3 hover:bg-violet-900/40 hover:text-white"
                            href="/admin/dashboard"
                        >
                            Admin Dashboard
                        </Link>
                    )}

                    <Link
                        className="block text-violet-800 ps-3 pe-5 py-3 hover:bg-violet-900/40 hover:text-white"
                        href="/account/dashboard"
                    >
                        My dashboard
                    </Link>
                    <Link
                        className="block text-violet-800 ps-3 pe-5  py-3 hover:bg-violet-900/40 hover:text-white"
                        href="/account/logout"
                        onClick={async (e) => await handleLogOut(e)}
                    >
                        Log out
                    </Link>
                </section>
            </section>
        </>
    )

    async function handleLogOut(e: MouseEvent<HTMLAnchorElement, any>) {
        e.preventDefault()
        try {
            // const data = await authService.logout()
            localStorage.removeItem(getTokenKey())
            dispatch(setUser({ id: '', name: '', role: '', mail: '' }))
        } catch (error) {
            console.log(error)
            createToastDanger('Đăng xuất thất bại!')
        }
    }
}

function ComponentRenderLibrary() {
    return (
        <>
            {/* <div className="relative">
                <Link
                    href="/exam-library"
                    className="text-white"
                    local-btn-dropdown-toggle=""
                >
                    <span className="me-1">Thư viện đề thi IELTS</span>
                    <i className="fa-solid fa-angle-down"></i>
                    <div
                        className="hidden absolute z-[9999] top-[140%] left-0 w-[130%] rounded-b ps-3 pe-4 py-3 shadow-xl shadow-[#ffffff10] bg-[#294563dd]"
                        local-data-dropdown-toggle=""
                        style={{ backgroundColor: '#294563e6' }}
                    >
                        <ExamLibrary />
                    </div>
                </Link>
            </div> */}
        </>
    )
}
