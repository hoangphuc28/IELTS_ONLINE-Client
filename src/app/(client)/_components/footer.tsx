import LayoutCenter from './layoutCenter'

export default function Footer() {
    return (
        <>
            <section className="relative min-h-[50vh] bg-[#234567]">
                <LayoutCenter>
                    <div className="relative z-20 px-5 w-full py-10 text-gray-300 text-lg flex flex-col sm:flex-row justify-between gap-5">
                        <section className="logo mobile w-24">
                            <a href="/">
                                <img
                                    src="./IELTS Online Practice Tests FREE _ IELTS Online Tests_files/logo_mobile.svg"
                                    alt=""
                                />
                            </a>
                            <h2 className="mt-1">IELTS</h2>
                        </section>
                        <section>
                            <h2 className="text-xl uppercase">Thư viện bài thi</h2>
                            <div className="mt-3 text-stone-300">
                                <a className="block hover:bg-gray-500 hover:text-white" href="">
                                    Bài thi Listening
                                </a>
                                <a className="block hover:bg-gray-500 hover:text-white" href="">
                                    Bài thi Reading
                                </a>
                                <a className="block hover:bg-gray-500 hover:text-white" href="">
                                    Bài thi Writing
                                </a>
                                <a className="block hover:bg-gray-500 hover:text-white" href="">
                                    Bài thi Speaking
                                </a>
                                <a className="block hover:bg-gray-500 hover:text-white" href="">
                                    Bài thi tổng hợp
                                </a>
                            </div>
                        </section>
                        <section className="header-banner">
                            <a href="#">
                                <img
                                    src="./IELTS Online Practice Tests FREE _ IELTS Online Tests_files/da18bdcf8b0a4f8d6afce6dcf976b3b6.png"
                                    width="728"
                                    height="90"
                                    alt=""
                                    title=""
                                />
                            </a>
                        </section>
                    </div>
                    <div
                        className="z-[1] w-full h-1/2 absolute-bottom left-0 right-0 bg-img-center opacity-[0.1]"
                        style={{ backgroundImage: `url('../../../../../assets/img/statue.webp')` }}
                    ></div>
                </LayoutCenter>
            </section>
        </>
    )
}
