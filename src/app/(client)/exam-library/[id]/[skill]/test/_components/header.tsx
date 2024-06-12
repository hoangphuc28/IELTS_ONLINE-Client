import { RefObject, useEffect, useMemo, useRef } from 'react'
import IMiniTest, { testSkill } from '../../../../../../../utils/shares/interfaces/IMiniTest'
import ComponentSubmit from './submit'
import { useAppShareSelector } from '@/src/app/(client)/_lib/redux/hooks'
import { userAnswerSelectors } from '@/src/app/(client)/_lib/redux/reducers/user-exam.reducer'
import { testSkillSelectors } from '@/src/app/(client)/_lib/redux/reducers/test-skill.reducer'

export default function ComponentTestHeader({ data }: { data: IMiniTest }) {
    const time = useAppShareSelector((state) => userAnswerSelectors.GetExportTimer(state))
    useEffect(() => {
        console.log('data: ', data)
    }, [])
    return (
        <>
            <header className="bg-white px-5">
                <section className="relative flex justify-between">
                    <section className="logo mobile w-12 h-12">
                        <img
                            alt=""
                            className="w-100 w-full"
                            src={process.env.NEXT_PUBLIC_APP_LOGO}
                        />
                    </section>
                    <section className="-ms-20 flex gap-2 items-center font-bold text-violet-800">
                        <i className="fa-regular fa-clock text-2xl"></i>

                        {useMemo(
                            () => (
                                <p className="text-xl">
                                    {time.h}:{time.m}:{time.s}
                                </p>
                            ),
                            [time],
                        )}
                    </section>
                    <section>
                        {data.name.toLowerCase() !== testSkill.SPEAKING.toLowerCase() && (
                            <ComponentSubmit target="" />
                        )}
                    </section>
                </section>
                {data.name.toLowerCase() === testSkill.LISTENING.toLowerCase() &&
                    useMemo(
                        () => (
                            <ListeningHeader
                                data={data.parts.reduce((total: string[], part) => {
                                    if (part.resource && part.resource.length > 0) {
                                        total.push(part.resource)
                                    }
                                    return total
                                }, [])}
                            />
                        ),
                        [],
                    )}
            </header>
        </>
    )
}

function ListeningHeader({ data }: { data: string[] }) {
    const listRefAudio = data.map((src) => useRef<HTMLAudioElement>(null))

    return (
        <>
            <section>
                {data.map(
                    (src, index) =>
                        src &&
                        (index === 0 ? (
                            <audio
                                ref={listRefAudio[index]}
                                className="hidden static w-full"
                                src={src}
                                controls
                                autoPlay
                                onEnded={(e) => handleStartNextPartAudio(index)}
                            ></audio>
                        ) : (
                            <audio
                                ref={listRefAudio[index]}
                                className="hidden static w-full"
                                src={src}
                                controls
                                onEnded={(e) => handleStartNextPartAudio(index)}
                            ></audio>
                        )),
                )}
            </section>
        </>
    )

    function handleStartNextPartAudio(curIndex: number) {
        const nextIndex = curIndex + 1
        if (nextIndex >= listRefAudio.length) return
        const audio = listRefAudio[nextIndex].current
        if (!audio) return

        audio.play()
    }
}
