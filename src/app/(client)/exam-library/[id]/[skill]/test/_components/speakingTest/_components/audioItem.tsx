'use client'

import IMiniTest from '@/src/utils/shares/interfaces/IMiniTest'
import IPart from '@/src/utils/shares/interfaces/IPart'
import { ComponentDrawSound } from './drawSound'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import ComponentLoading from './loading'
import { useAppShareSelector } from '@/src/app/(client)/_lib/redux/hooks'
import { resourceServiceAPI } from '@/src/services/resource.service'
import { multipleChoice } from '@/src/utils/shares/db/answer/services/answers/multipleChoice.service'
import { AnswerAddDTO } from '@/src/utils/shares/db/answer/dtos/answer-add.dto'
import ComponentSubmitExamConfirmModel from '../../modals/submitExamConfirm'

export default function ComponentAudioItem({
    data,
    index,
    nextPartCallback,
    submitCallback,
}: {
    data: IMiniTest
    index: number
    nextPartCallback: CallableFunction
    submitCallback: CallableFunction
}) {
    const user = useAppShareSelector((state) => state.user)
    const currentPart: IPart = data.parts[index]
    const [isRecording, setIsRecording] = useState<boolean>(false)
    const [timeOutStart, setTimeoutStart] = useState<NodeJS.Timeout | null>(null)
    const [countDown, setCountDown] = useState<number>(60)
    // #region handle media
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
    const [stream, setStream] = useState<MediaStream | null>(null)
    const [audioContext, setAudioContext] = useState(new AudioContext())
    const [analyser, setAnalyser] = useState(audioContext.createAnalyser())
    const audioRef = useRef<HTMLAudioElement>(null)
    const btnMicroRef = useRef<HTMLButtonElement>(null)
    const [isLoadingMedia, setIsLoadingMedia] = useState<boolean>(true)
    // #endregion handle media

    useEffect(() => {
        btnMicroRef.current?.classList.remove('hidden')

        if (index === 1 && countDown === 60) {
            // => part 2
            const interval = setInterval(
                () =>
                    setCountDown((prev) => {
                        console.log(prev)
                        if (prev <= 0) {
                            handleStartRecording({
                                preventDefault() {},
                                currentTarget: btnMicroRef.current!,
                            } as any)
                            clearInterval(interval)
                            return 0
                        }
                        return prev - 1
                    }),
                1000,
            )
            setTimeoutStart(interval)
            return () => clearInterval(interval)
        } else {
            handleStartAudio(audioRef.current)
        }
    }, [index])
    return (
        <section className="relative flex flex-col gap-2 bg-white max-w-[900px] min-h-[300px] py-3 pe-3 mx-auto my-3 rounded shadow-lg">
            <section className="flex border-b pb-3">
                <p className="border-t border-gray-300/80 w-full text-center font-bold text-xl text-violet-800">
                    {currentPart.partNumber}
                </p>
                <div className="min-w-[100px] absolute top-3 right-3">
                    {index < data.parts.length - 1 ? (
                        <button
                            onClick={(e) => handleNextPart(e)}
                            className="w-full bg-rose-500 text-white px-2 py-1 rounded-lg hover:bg-rose-600"
                        >
                            Next Part{' '}
                        </button>
                    ) : (
                        <button
                            onClick={(e) => handleSubmit(e)}
                            className="w-full bg-rose-500 text-white px-2 py-1 rounded-lg hover:bg-rose-600"
                        >
                            Submit{' '}
                        </button>
                    )}
                </div>
            </section>
            <section className="flex flex-col gap-3 px-3 items-center">
                <p className="" dangerouslySetInnerHTML={{ __html: currentPart.title }}></p>
                <p className="" dangerouslySetInnerHTML={{ __html: currentPart.content }}></p>
                <section className="relative h-[200px]">
                    <button
                        ref={btnMicroRef}
                        onClick={(e) => handleStartRecording(e)}
                        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full border border-gray-200/90 shadow-2xl flex flex-col items-center justify-center gap-2 py-2 hover:bg-gray-100"
                    >
                        {index === 1 && (
                            <span className="text-violet-700 font-semibold">({countDown})</span>
                        )}
                        <i className="fa-solid fa-microphone-lines text-5xl text-violet-700"></i>
                    </button>
                    {isRecording && (
                        <ComponentDrawSound
                            isDraw={isRecording}
                            analyser={analyser}
                            style={{ width: '400px', height: '200px' }}
                        />
                    )}

                    {isLoadingMedia && <ComponentLoading />}

                    <audio
                        className="hidden"
                        ref={audioRef}
                        src={currentPart.resource || ''}
                        controls
                    ></audio>
                </section>
            </section>
        </section>
    )

    function handleStartAudio(audio: HTMLAudioElement | null) {
        if (!audio) return
        audio.onplay = () => {
            setIsLoadingMedia(false)
        }
        audio.play()
        audio.onended = () => {
            console.log('ended')
            handleStartRecording({
                preventDefault() {},
                currentTarget: btnMicroRef.current!,
            } as any)
        }
    }

    async function handleStartRecording(e: MouseEvent<HTMLButtonElement, any>) {
        try {
            e.preventDefault()
            if (isRecording) return
            const isExist = handleHiddenButton(btnMicroRef.current!)
            if (!isExist) return
            audioRef.current?.pause()
            await startRecording()
            setIsRecording(true)
            timeOutStart && clearInterval(timeOutStart)
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    function handleHiddenButton(btn: HTMLButtonElement): boolean {
        if (btn && !btn.classList.contains('hidden')) {
            btn.classList.add('hidden')
            // btn.setAttribute('disabled', 'disabled')
            return true
        }
        return false
    }

    function handleNextPart(e: MouseEvent<HTMLButtonElement, any>) {
        e.preventDefault()
        setIsRecording(false)
        stopRecording()
        nextPartCallback()
    }

    function handleSubmit(e: MouseEvent<HTMLButtonElement, any>) {
        e.preventDefault()
        setIsRecording(false)
        stopRecording()
        submitCallback()
    }

    async function startRecording() {
        const chunks: BlobPart[] = []
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            setStream(stream)
            const mediaRecorder = new MediaRecorder(stream)
            setMediaRecorder(mediaRecorder)
            const source = audioContext.createMediaStreamSource(stream)
            source.connect(analyser)
            // analyser.connect(audioContext.destination) -> save and start audio stream

            mediaRecorder.ondataavailable = function (e) {
                chunks.push(e.data)
            }

            mediaRecorder.onstop = async function () {
                const blob = new Blob(chunks, {
                    type: 'audio/ogg; codecs=opus',
                })
                const file = new File(
                    [blob],
                    user.id + currentPart.id + '--' + new Date().getTime().toString() + '.ogg',
                    {
                        type: 'ogg',
                    },
                )
                const fileName = await resourceServiceAPI.uploadAudio(file)
                const dataVoiceAnswer: AnswerAddDTO = new AnswerAddDTO({
                    examSkillDetailId: currentPart.id,
                    groupQuestionId: currentPart.id,
                    questionId: currentPart.id,
                    answer: fileName,
                })
                multipleChoice.addAnswer(dataVoiceAnswer)

                const audioURL = URL.createObjectURL(blob)
                const audioPlayer = audioRef.current
                // console.log('Audio player')
                // if (!!audioPlayer) {
                //     console.log('aaaaaaaa')
                //     audioPlayer.src = audioURL
                // }
            }

            mediaRecorder.start()
        } catch (error) {
            return error
        }
    }

    function stopRecording() {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop()
            // const tracks: MediaStreamTrack[] = []
            // if (!!stream) {
            //     tracks.push(...stream.getAudioTracks())
            // }
            // tracks.forEach((track) => track.stop())
        }
    }
}
