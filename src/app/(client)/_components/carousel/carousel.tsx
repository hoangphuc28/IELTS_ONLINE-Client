'use client'
import { Carousel, initCarousels } from 'flowbite'
import type { CarouselItem, CarouselOptions, CarouselInterface, IndicatorItem } from 'flowbite'
import type { InstanceOptions } from 'flowbite'
import React, { CSSProperties, useEffect } from 'react'

export default function ContainerCarousel({
    children,
    id,
    className,
    style,
}: {
    children: React.ReactNode
    id: string
    className?: string
    style?: CSSProperties
}): React.JSX.Element {
    useEffect(() => {
        initCarousels()
    }, [])
    return (
        <>
            <section
                id={id}
                className={`min-w-2xl min-h-2 mx-auto overflow-hidden ${
                    className ? className : ''
                } carousel`}
                style={style}
            >
                <section className="relative h-full" data-carousel="static">
                    <section className="overflow-hidden relative h-full">
                        <section>
                            {children}
                            {/* {(() => {
                                if (React.Children.count(children) > 2) return
                                return <>{children}</>
                            })()} */}
                        </section>
                        {/* Slider controls */}
                        <section>
                            <button
                                type="button"
                                className="absolute top-[50%] translate-[-50%] start-0 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
                                data-carousel-prev
                            >
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <i className="fa-solid fa-angle-left"></i>
                                    <span className="sr-only">Previous</span>
                                </span>
                            </button>
                            <button
                                type="button"
                                className="absolute top-[50%] translate-[-50%] end-0 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
                                data-carousel-next
                            >
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <i className="fa-solid fa-angle-right"></i>
                                    <span className="sr-only">Next</span>
                                </span>
                            </button>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

/**
 * 
    Slider indicators
    <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {React.Children.toArray(children).map((child: any, index: number) => (
            <button
                key={`carousel-toggle-${index}`}
                type="button"
                className="hidden w-3 h-3 rounded-full"
                aria-current={index === 0}
                aria-label={`Slide ` + (index + 1)}
                data-carousel-slide-to={index}
            ></button>
        ))}
        {React.Children.toArray(children).map((child: any, index: number) => {
            if (numOfChild > 2) return
            return (
                <button
                    key={`carousel-toggle-${index + 2}`}
                    type="button"
                    className="hidden w-3 h-3 rounded-full"
                    aria-label={`Slide ` + (index + 1 + 2)}
                    data-carousel-slide-to={index + 2}
                ></button>
            )
        })}
    </div>
*/

/**
 * 
 * 
        // const carouselElement: HTMLElement | null = document.getElementById(id)
        // if (!carouselElement) return
        // const itemsDOM = carouselElement.querySelectorAll<HTMLElement>('[data-carousel-item]')
        // const items: CarouselItem[] = Array.from(itemsDOM).map((item, index) => ({
        //     position: index,
        //     el: item,
        // }))
        // // object options with default values
        // const indicatorsDOM = carouselElement.querySelectorAll<HTMLElement>(
        //     '[data-carousel-slide-to]',
        // )
        // const indicators: IndicatorItem[] = Array.from(indicatorsDOM).map((item, index) => ({
        //     position: index,
        //     el: item,
        // }))
        // const options: CarouselOptions = {
        //     defaultPosition: 1,
        //     interval: 5000,

        //     indicators: {
        //         activeClasses: 'bg-white dark:bg-gray-800',
        //         inactiveClasses:
        //             'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        //         items: indicators,
        //     },
        //     // callback functions
        //     onNext: () => {
        //         // console.log('next slider item is shown')
        //     },
        //     onPrev: () => {
        //         // console.log('previous slider item is shown')
        //     },
        //     onChange: () => {
        //         // console.log('new slider item has been shown')
        //     },
        // }
        // // instance options object
        // const instanceOptions: InstanceOptions = {
        //     id,
        //     override: true,
        // }
        // const carousel: CarouselInterface = new Carousel(
        //     carouselElement,
        //     items,
        //     options,
        //     instanceOptions,
        // )
        // // carousel.cycle()
        // // set event listeners for prev and next buttons
        // const $prevButton = carouselElement.querySelector('[data-carousel-prev]')!
        // const $nextButton = carouselElement.querySelector('[data-carousel-next]')!

        // $prevButton.addEventListener('click', () => {
        //     carousel.prev()
        // })

        // $nextButton.addEventListener('click', () => {
        //     carousel.next()
        // })
 */
