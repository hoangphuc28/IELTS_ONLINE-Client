'use client'
import ContainerCarousel from '../_components/carousel/carousel'
import CarouselItem from '../_components/carousel/item'
import LayoutCenter from '../_components/layoutCenter'

function Card() {
    return (
        <>
            <div className="mb-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in
                    reverse chronological order.
                </p>
                <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Read more
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
            </div>
        </>
    )
}

export default function Page() {
    return (
        <>
            <main>
                <ContainerCarousel
                    id="carousel"
                    className="w-full overflow-hidden h-[50vh] md:h-[70vh]"
                >
                    <CarouselItem>
                        <div
                            className="w-full h-full bg-img-center"
                            style={{
                                backgroundImage: `url(https://flowbite.com/docs/images/carousel/carousel-1.svg)`,
                            }}
                        ></div>
                    </CarouselItem>
                    <CarouselItem>
                        <div
                            className="w-full h-full bg-img-center"
                            style={{
                                backgroundImage: `url(https://flowbite.com/docs/images/carousel/carousel-2.svg)`,
                            }}
                        ></div>
                        {/* <img
                            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                            className="absolute-center w-full h-full"
                            alt="..."
                        /> */}
                    </CarouselItem>
                </ContainerCarousel>

                <LayoutCenter className="my-5">
                    <h2 className="mb-4 text-[28px] font-bold">Các bộ đề IELTS mới nhất</h2>
                    <div className="columns-4">
                        {(() => {
                            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2].map(() => <Card />)
                        })()}
                    </div>
                </LayoutCenter>
            </main>
        </>
    )
}
