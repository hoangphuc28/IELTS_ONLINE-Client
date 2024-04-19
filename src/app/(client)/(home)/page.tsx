'use client'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import ContainerCarousel from '../_components/carousel/carousel'
import CarouselItem from '../_components/carousel/item'
import LayoutCenter from '../_components/layoutCenter'
import ComponentSearch from '../_components/search'
import ComponentCard from './card'
import ICarouselData from './interfaces/ICarouselData'

export default function Page() {
    const carousels: Array<ICarouselData> = [
        {
            type: 'video',
            url: 'https://www.youtube-nocookie.com/embed/50VNCymT-Cs?si=sqoM4SnQgU98ytj7',
        },
        {
            type: 'img',
            url: 'https://ieltsonlinetests.com/themes/iot/images/hero-background/hero-banner.jpg',
        },
    ]
    if (carousels.length < 3) {
        carousels.push(...carousels)
    }

    return (
        <>
            <main>
                <ContainerCarousel
                    id="carousel"
                    className="w-full overflow-hidden h-[50vh] md:h-[70vh]"
                >
                    {carousels.map((carouselUrl: ICarouselData, index: number) => {
                        return (
                            <>
                                <CarouselItem
                                    keyName={`home-carousel-${index}-${index}`}
                                    data={carouselUrl}
                                ></CarouselItem>
                            </>
                        )
                    })}
                </ContainerCarousel>

                <LayoutCenter className="my-5 min-h-1/2">
                    <section className="px-5 py-5">
                        <section className="flex flex-col md:flex-row md:items-center gap-4 bg-white px-3 py-2 mb-4 rounded">
                            <h2 className="text-[24px] font-bold">Các bộ đề IELTS mới nhất</h2>
                            <div className="grow border rounded">
                                <ComponentSearch className="w-full bg-gray-200" />
                            </div>
                        </section>
                        <section className="min-h-[60vh] flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-3">
                            {(() => {
                                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2].map((e, index) => (
                                    <ComponentCard
                                        key={`card-` + index}
                                        data={{
                                            name: 'Noteworthy technology acquisitions 2021 Noteworthy technology acquisitions 2021 Noteworthy technology acquisitions 2021',
                                            title: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                                        }}
                                    />
                                ))
                            })()}
                        </section>
                    </section>
                </LayoutCenter>
            </main>
        </>
    )
}
