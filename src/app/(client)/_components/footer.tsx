import Link from 'next/link'
import LayoutCenter from './layoutCenter'
import ComponentSearch from './search'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <section className="relative min-h-[50vh] bg-[#234567]">
                <LayoutCenter>
                    <div className="relative z-20 px-5 py-10 text-gray-300 text-lg">
                        <section className="flex flex-col sm:flex-row justify-between items-center gap-5">
                            <section className="logo w-16">
                                <Link href="/">
                                    <img src={process.env.NEXT_PUBLIC_APP_LOGO} alt="" />
                                    {/* <Image src={process.env.NEXT_PUBLIC_APP_LOGO || ''} alt="" /> */}
                                </Link>
                            </section>

                            <div className="grow">
                                <ComponentSearch className="w-full bg-white" />
                            </div>
                        </section>
                        <section className="mt-3">
                            <h2 className="text-xl uppercase text-center">
                                Learn english - Dedicated to life long - Long Education
                            </h2>
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
