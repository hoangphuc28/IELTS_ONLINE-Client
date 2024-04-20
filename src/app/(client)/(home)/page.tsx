'use client'
import { useEffect, useState } from 'react'
import ContainerCarousel from '../_components/carousel/carousel'
import CarouselItem from '../_components/carousel/item'
import LayoutCenter from '../_components/layoutCenter'
import ComponentSearch from '../_components/search'
import ComponentCard from './card'
import ICarouselData from './interfaces/ICarouselData'
import ITest from '@client/exam-library/interfaces/ITest'

export default function Page() {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

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

    const test: ITest = {
        code: 'haha',
        name: 'IELTS Mock Test 2023 December',
        title: 'Bài này để làm mẫu',
        description: 'Bài này để làm mẫu, gió thoang thoảng, âm vang lăn tăn, tí tắt tí tắt...',
        src: '',
        createdAt: new Date().toLocaleString(),
        details: [],
        hasPassword: false,
        status: '',
        time: '03:00:00',
        updatedAt: new Date().toLocaleString(),
    }
    const tests: ITest[] = []
    while (tests.length < 18) {
        tests.push({ ...test })
    }
    tests[tests.length - 1].src = ''

    return (
        <>
            <main>
                {isClient && (
                    <ContainerCarousel
                        id="carousel"
                        className="w-full overflow-hidden h-[50vh] md:h-[70vh]"
                    >
                        {carousels.map((carouselUrl: ICarouselData, index: number) => {
                            const key = `home-carousel-item-${index}`
                            return <CarouselItem key={key} data={carouselUrl}></CarouselItem>
                        })}
                    </ContainerCarousel>
                )}

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
                                return tests.map((test, index) => (
                                    <ComponentCard
                                        key={`card-` + test.code + '-' + index}
                                        data={test}
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
