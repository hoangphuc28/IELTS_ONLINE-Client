'use client'

import IMiniTest from '@/src/utils/shares/interfaces/IMiniTest'
import IPart from '@/src/utils/shares/interfaces/IPart'
import { ComponentDrawSound } from './drawSound'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { sources } from 'next/dist/compiled/webpack/webpack'

export default function ComponentAudioItem({
    data,
    index,
    nextPartCallback,
}: {
    data: IMiniTest
    index: number
    nextPartCallback: CallableFunction
}) {
    const currentPart: IPart = data.parts[index]
    const [isRecording, setIsRecording] = useState<boolean>(false)
    // #region handle media
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
    const [stream, setStream] = useState<MediaStream | null>(null)
    const [audioContext, setAudioContext] = useState(new AudioContext())
    const [analyser, setAnalyser] = useState(audioContext.createAnalyser())
    const audioRef = useRef<HTMLAudioElement>(null)
    // #endregion handle media
    return (
        <section className="relative flex flex-col gap-2 bg-white max-w-[900px] min-h-[300px] py-3 pe-3 mx-auto my-3 rounded shadow-lg">
            <section className="flex border-b pb-3">
                <p className="border-t border-gray-300/80 w-full text-center font-bold text-xl text-violet-800">
                    {currentPart.partNumber}
                </p>
                <div className="min-w-[100px] absolute top-3 right-3">
                    {index < data.parts.length - 1 ? (
                        <button
                            onClick={() => handleNextPart()}
                            className="w-full bg-rose-500 text-white px-2 py-1 rounded-lg hover:bg-rose-600"
                        >
                            Next Part{' '}
                        </button>
                    ) : (
                        <button
                            onClick={() => handleSubmit()}
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
                    {!isRecording && (
                        <button
                            onClick={(e) => handleStartRecording(e)}
                            className="absolute top-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-100"
                        >
                            <i className="fa-solid fa-microphone-lines text-6xl text-violet-700"></i>
                        </button>
                    )}
                    {isRecording && (
                        <ComponentDrawSound
                            isDraw={isRecording}
                            analyser={analyser}
                            style={{ width: '400px', height: '200px' }}
                        />
                    )}
                    <audio ref={audioRef} src="" controls></audio>
                </section>
            </section>
        </section>
    )

    async function handleStartRecording(e: MouseEvent<HTMLButtonElement, any>) {
        setIsRecording(true)
        await startRecording()
    }

    function handleNextPart() {
        setIsRecording(false)
        stopRecording()
    }

    function handleSubmit() {
        setIsRecording(false)
        stopRecording()
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

            mediaRecorder.onstop = function () {
                const blob = new Blob(chunks, {
                    type: 'audio/ogg; codecs=opus',
                })
                const audioPlayer = audioRef.current
                console.log('Audio player')
                if (!!audioPlayer) {
                    console.log('aaaaaaaa')
                    const audioURL = URL.createObjectURL(blob)
                    audioPlayer.src = audioURL
                }
            }

            mediaRecorder.start()
        } catch (error) {
            throw error
        }
    }

    function stopRecording() {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop()
            stream?.getAudioTracks()[0].stop()
        }
    }
}
