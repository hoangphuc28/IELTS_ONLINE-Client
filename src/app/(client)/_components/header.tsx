'use client'
import Link from 'next/link'
import LayoutCenter from './layoutCenter'

function ExamLibrary() {
    return (
        <>
            <div className="flex flex-col gx-5">
                <div>
                    <Link href="/vi/ielts-exam-library?skill=listening" className="text-white">
                        IELTS Listening Tests
                    </Link>
                </div>
                <div>
                    <Link href="/vi/ielts-exam-library?skill=reading" className="text-white">
                        IELTS Reading Tests
                    </Link>
                </div>
                <div>
                    <Link href="/vi/ielts-exam-library?skill=writing" className="text-white">
                        IELTS Writing Tests
                    </Link>
                </div>
                <div>
                    <Link href="/vi/ielts-exam-library?skill=speaking" className="text-white">
                        IELTS Speaking Tests
                    </Link>
                </div>
                <div>
                    <Link href="/vi/ielts-exam-library" className="text-white">
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
            <div className="pe-2 border-r border-black md:border-white">
                <Link
                    className=" text-white"
                    data-drupal-selector="menu-item-user"
                    href="/account/login"
                >
                    Đăng nhập
                </Link>
            </div>
            <div className="">
                <Link
                    className="text-white"
                    data-drupal-selector="menu-item-user"
                    href="/account/register"
                >
                    Đăng ký
                </Link>
            </div>
        </>
    )
}

export default function Header() {
    return (
        <>
            <header>
                <section>
                    <LayoutCenter>
                        <section className="hidden sm:flex items-center justify-between">
                            <div className="logo lg:w-48 sm:w-28">
                                <a href="/" className="logo">
                                    <img
                                        alt=""
                                        className="w-100 w-full"
                                        src="./IELTS Online Practice Tests FREE _ IELTS Online Tests_files/logo.svg"
                                    />
                                </a>
                            </div>
                            <div className="header-banner">
                                <a href="#">
                                    <img
                                        src="./IELTS Online Practice Tests FREE _ IELTS Online Tests_files/da18bdcf8b0a4f8d6afce6dcf976b3b6.png"
                                        width="728"
                                        height="90"
                                        alt=""
                                        title=""
                                    />
                                </a>
                            </div>
                        </section>
                        <section className="header-mobile flex sm:hidden justify-between items-center px-2 py-2 shadow shadow-lg-[#000]">
                            <div className="logo mobile w-24">
                                <a href="/">
                                    <img
                                        src="./IELTS Online Practice Tests FREE _ IELTS Online Tests_files/logo_mobile.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <nav className="h-full flex md:hidden items-center">
                                <ContainerSignInSignUp />
                            </nav>
                        </section>
                    </LayoutCenter>
                </section>
                <section
                    className="hidden md:block"
                    style={{ backgroundColor: '#294563', height: '50px' }}
                >
                    <LayoutCenter className="h-full">
                        <nav className="h-full flex justify-between items-center">
                            <div>
                                <a href="/" className="main-menu__home-link text-white text-[20px]">
                                    <i className="fa fa-home" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="flex gap-x-2">
                                {/* <div className="relative">
                                    <Link
                                        href="/ielts-exam-library"
                                        className="text-white"
                                        local-btn-dropdown-toggle=""
                                    >
                                        <span className="me-1">Thư viện đề thi IELTS</span>
                                        <i className="fa-solid fa-angle-down"></i>
                                        <div
                                            className="hidden absolute z-[9999] top-[98%] left-0 w-[130%] rounded-b ps-2 pe-4 py-3 shadow shadow-[#000] bg-[#294563e6]"
                                            local-data-dropdown-toggle=""
                                            style={{ backgroundColor: '#294563e6' }}
                                        >
                                            <ExamLibrary />
                                        </div>
                                    </Link>
                                </div> */}
                                <ContainerSignInSignUp />
                            </div>
                        </nav>
                    </LayoutCenter>
                </section>
            </header>
            <script src="../../../../../lib/flowbite/flowbite@2.3.js"></script>
        </>
    )
}
