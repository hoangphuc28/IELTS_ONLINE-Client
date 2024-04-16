'use client'
import ContainerCarousel from '../_components/carousel/carousel'
import CarouselItem from '../_components/carousel/item'
import LayoutCenter from '../_components/layoutCenter'
import ComponentSearch from '../_components/search'
import ComponentCard from './card'

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

                <LayoutCenter className="my-5 min-h-1/2">
                    <section className="px-5 py-5">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white px-3 py-2 mb-4 rounded">
                            <h2 className="text-[24px] font-bold">Các bộ đề IELTS mới nhất</h2>
                            <div className="grow border rounded">
                                <ComponentSearch className="w-full bg-gray-200" />
                            </div>
                        </div>
                        <div className="min-h-[60vh] flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-3">
                            {(() => {
                                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2].map((e, index) => (
                                    <ComponentCard key={`card-` + index} />
                                ))
                            })()}
                        </div>
                    </section>
                </LayoutCenter>
            </main>
        </>
    )
}
