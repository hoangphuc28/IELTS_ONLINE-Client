'use client'
import Link from 'next/link'
import LayoutCenter from './layoutCenter'
import ComponentSearch from './search'

function ExamLibrary() {
    return (
        <>
            <div className="flex flex-col gy-5">
                <div>
                    <Link
                        href="/exam-library?skill=listening"
                        className="text-white  hover:opacity-[0.8]"
                    >
                        IELTS Listening Tests
                    </Link>
                </div>
                <div>
                    <Link
                        href="/exam-library?skill=reading"
                        className="text-white  hover:opacity-[0.8]"
                    >
                        IELTS Reading Tests
                    </Link>
                </div>
                <div>
                    <Link
                        href="/exam-library?skill=writing"
                        className="text-white  hover:opacity-[0.8]"
                    >
                        IELTS Writing Tests
                    </Link>
                </div>
                <div>
                    <Link
                        href="/exam-library?skill=speaking"
                        className="text-white  hover:opacity-[0.8]"
                    >
                        IELTS Speaking Tests
                    </Link>
                </div>
                <div>
                    <Link href="/exam-library" className="text-white  hover:opacity-[0.8]">
                        IELTS Test Collection
                    </Link>
                </div>
            </div>
        </>
    )
}

function ContainerSignInSignUp() {
    return (
        <>
            <div className="pe-2 me-2 sm:me-0 border-r border-black md:border-white">
                <Link
                    className="text-black sm:text-white"
                    data-drupal-selector="menu-item-user"
                    href="/account/login"
                >
                    Đăng nhập
                </Link>
            </div>
            <div className="">
                <Link
                    className="text-black sm:text-white"
                    data-drupal-selector="menu-item-user"
                    href="/account/register"
                >
                    Đăng ký
                </Link>
            </div>
        </>
    )
}

function ContainerAccount() {
    return (
        <>
            <div local-btn-dropdown-toggle="">
                <Link
                    className="block bg-gray-500 rounded-full w-[40px] h-[40px] flex items-center justify-center text-lg text-white"
                    href="/account/dashboard"
                >
                    <i className="fa-solid fa-user-tie"></i>

                    <div
                        className="hidden z-[9999] rounded-b pt-2 pb-5 min-w-[160px] top-[110%] right-0 bg-gray-300 text-base"
                        local-data-dropdown-toggle=""
                    >
                        <Link
                            className="block text-[#000] ps-3 pe-5 py-2 hover:opacity-[0.7] hover:bg-gray-500 hover:text-stone-100"
                            href="/account/dashboard"
                        >
                            Trang cá nhân
                        </Link>
                        <Link
                            className="block text-[#000] ps-3 pe-5  py-2 hover:opacity-[0.7] hover:bg-gray-500 hover:text-stone-100"
                            href="/account/logout"
                        >
                            Đăng xuất
                        </Link>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default function Header() {
    return (
        <>
            <header>
                {/* logo desktop and banner and header mobile */}
                <section>
                    <LayoutCenter>
                        <section className="hidden sm:flex items-center justify-between">
                            <div className="logo lg:w-48 sm:w-28">
                                <Link href="/" className="logo">
                                    <img
                                        alt=""
                                        className="w-100 w-full"
                                        src="./../../../../../IELTS Online Practice Tests FREE _ IELTS Online Tests_files/logo.svg"
                                    />
                                </Link>
                            </div>
                            <div className="header-banner">
                                <Link href="#">
                                    <img
                                        src="./../../../../../IELTS Online Practice Tests FREE _ IELTS Online Tests_files/da18bdcf8b0a4f8d6afce6dcf976b3b6.png"
                                        width="728"
                                        height="90"
                                        alt=""
                                        title=""
                                    />
                                </Link>
                            </div>
                        </section>
                        <section className="header-mobile flex sm:hidden justify-between items-center px-2 py-2 shadow shadow-lg-[#000]">
                            <div className="logo mobile w-24">
                                <Link href="/">
                                    <img
                                        src="./../../../../../IELTS Online Practice Tests FREE _ IELTS Online Tests_files/logo_mobile.svg"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <nav className="h-full flex md:hidden items-center">
                                <ContainerSignInSignUp />
                                <ContainerAccount />
                            </nav>
                        </section>
                    </LayoutCenter>
                </section>
                {/* feature */}
                <section
                    className="hidden md:block"
                    style={{ backgroundColor: '#294563', height: '50px' }}
                >
                    <LayoutCenter className="h-full">
                        <nav className="h-full flex justify-between items-center gap-x-5">
                            <div>
                                <Link
                                    href="/"
                                    className="main-menu__home-link text-white text-[20px]"
                                >
                                    <i className="fa fa-home" aria-hidden="true"></i>
                                </Link>
                            </div>
                            <div className="relative">
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
                            </div>
                            <div className="grow">
                                <ComponentSearch className="w-full bg-white" />
                            </div>
                            <div className="flex items-center gap-x-2">
                                <ContainerSignInSignUp />
                                <ContainerAccount />
                            </div>
                        </nav>
                    </LayoutCenter>
                </section>
            </header>
            <script src="../../../../../lib/flowbite/flowbite@2.3.js"></script>
        </>
    )
}
