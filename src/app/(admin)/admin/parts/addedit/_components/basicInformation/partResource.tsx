import { Button, Typography, styled } from '@mui/material'
import { FormikProps } from 'formik'
import React, { Fragment, useRef, useState } from 'react'
import { Part } from '../../../type/Part.class'
import TitleForm from './titleForm'
import { useAppDispatch } from '@/src/app/(admin)/lib/redux/hooks'
import { PostAudio } from '@/src/app/(admin)/lib/redux/action/Resource/audio/post'
import { HOST } from '@/src/utils/constanst/host'
interface Props {
    formik: FormikProps<Part>
}
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
})

const PartResource = ({ formik }: Props) => {
    const [audioFile, setAudioFile] = useState<any>(formik.values.resource)
    const audioRef = useRef<HTMLAudioElement>(null)
    const dispatch = useAppDispatch()
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        setAudioFile(file)
        if (audioRef.current && file) {
            audioRef.current.pause()
            audioRef.current.load()
        }
    }
    const postAudio = async () => {
        try {
            const res = await dispatch(PostAudio(audioFile))
            const audioURL = `${HOST}/${res}`
            setAudioFile(audioURL)
            formik.setFieldValue('resource', audioURL)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Fragment>
            <TitleForm formik={formik} />

            <div className="mt-5">
                <div>
                    <div
                        style={{
                            borderRadius: '5px',
                            border: '1px solid #ced4da',
                            padding: '15px',
                            background: '#fcfcfc',
                        }}
                    >
                        <div className="mb-3">Select a audio file you want to upload</div>
                        <div className="flex items-center">
                            <div style={{ maxWidth: '300px', minWidth: '300px' }}>
                                <Button
                                    size={'small'}
                                    sx={{ background: '#36aafd', height: 40 }}
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                >
                                    {`${audioFile ? 'Upload ANOTHER FILE' : 'Upload file'}`}
                                    <VisuallyHiddenInput
                                        type="file"
                                        accept="audio/*"
                                        onChange={handleFileChange}
                                    />
                                </Button>
                                {audioFile && (
                                    <Fragment>
                                        <span> or </span>
                                        <Button
                                            onClick={postAudio}
                                            size={'small'}
                                            sx={{
                                                background: '#36aafd',
                                                border: '1px solid #36aafd',
                                                height: 40,
                                                backgroundColor: 'white',
                                                color: '#36aafd',
                                            }}
                                        >
                                            SAVE
                                        </Button>
                                    </Fragment>
                                )}
                            </div>

                            <div className="mt-3 w-full">
                                <audio className="w-full" ref={audioRef} controls>
                                    {audioFile ? (
                                        <source
                                            src={
                                                audioFile instanceof File
                                                    ? URL.createObjectURL(audioFile)
                                                    : `${audioFile}`
                                            }
                                            type="audio/mpeg"
                                        />
                                    ) : (
                                        <source src="default-audio.mp3" type="audio/mpeg" />
                                    )}
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PartResource
