'use client'

import ContainerCarousel from '../_components/carousel/carousel'
import CarouselItem from '../_components/carousel/item'
import LayoutCenter from '../_components/layoutCenter'
import ComponentSearch from '../_components/search'
import ComponentCard from './card'
import ISourceData from './interfaces/ISourceData'
import ICarouselData from './interfaces/ICarouselData'
import ITest from '@/src/utils/shares/interfaces/ITest'
import ComponentMedia from '../_components/media'

export default function Page() {
    const bannerData: ISourceData = {
        type: 'video',
        src: 'https://www.youtube-nocookie.com/embed/50VNCymT-Cs?si=sqoM4SnQgU98ytj7',
        content: 'Thông báo: Hahahahahahah ahahahhahaha hahaha',
        // type: 'image',
        // type: 'hybrid',
        // src: 'https://ieltsonlinetests.com/themes/iot/images/hero-background/hero-banner.jpg',
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
        const testI = { ...test }
        if (tests.length % 4 != 0) testI.hasPassword = !testI.hasPassword
        testI.code += '-' + tests.length.toString()
        tests.push(testI)
    }

    return (
        <>
            <main>
                {/* {isClient && (
                    <ContainerCarousel
                        id="carousel"
                        className="w-full overflow-hidden h-[50vh] md:h-[70vh]"
                    >
                        {carousels.map((carouselUrl: ICarouselData, index: number) => {
                            const key = `home-carousel-item-${index}`
                            return <CarouselItem key={key} data={carouselUrl}></CarouselItem>
                        })}
                    </ContainerCarousel>
                )} */}
                {/* banner */}
                {/* <section
                    className="w-full h-[60vh] banner-container"
                    style={{ background: 'rgba(0, 0, 0, 0.8)' }}
                >
                    <LayoutCenter className="h-full">
                        <section
                            className="h-full bg-img-center banner"
                            style={{
                                background: `url(https://ieltsonlinetests.com/themes/iot/images/hero-background/hero-banner.jpg)`,
                            }}
                        ></section>
                    </LayoutCenter>
                </section> */}
                <section
                    className="w-full h-[60vh] notify-container"
                    style={{ background: 'rgba(0, 0, 0, 0.8)' }}
                >
                    <LayoutCenter className="h-full">
                        <ComponentMedia data={bannerData} className="block" />
                    </LayoutCenter>
                </section>

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
