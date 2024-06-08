'use client'
import { CKEditor } from '@ckeditor/ckeditor5-react'
// import { UploadAdapter, FileLoader } from '@ckeditor/ckeditor5-upload/src/filerepository'
import Editor from 'ckeditor5-custom-build'
import axios from 'axios'
import { useState } from 'react'
import { HOST } from '@/src/utils/constanst/host'
// import { FormikProps } from 'formik'
// import { Part } from '../../../type/Part.class'
// import type { EditorConfig } from '@ckeditor/ckeditor5-core'
// import { Plugin } from '@ckeditor/ckeditor5-core';

// interface Props {
//     formik: FormikProps<Part>
//     index: number
//     saveData: (data: any) => void
//     data: string
// }

const CustomEditor = ({ formik, saveData, data }: { formik: any; saveData: any; data: any }) => {
    const config = {
        toolbar: {
            items: [
                'undo',
                'redo',
                '|',
                'bold',
                'italic',
                'underline',
                '|',
                'alignment',
                'insertTable',
                'imageInsert',
            ],
        },
        language: 'en',
        image: {
            toolbar: [
                'imageTextAlternative',
                'imageStyle:inline',
                'imageStyle:block',
                'imageStyle:side',
            ],
        },
        extraPlugins: [uploadPlugin],
    }
    const [editorData, setEditorData] = useState('')
    return (
        <div>
            <CKEditor
                editor={Editor}
                config={config}
                // config={{
                //     editorConfiguration,
                // }}
                onReady={(editor) => {}}
                onBlur={(event, editor) => {}}
                onFocus={(event, editor) => {}}
                onChange={(event, editor) => {
                    saveData(editor.getData())
                    setEditorData(editor.getData())
                }}
                data={data}
            />
        </div>
    )
}

function uploadAdapter(loader: any) {
    return {
        upload: async () => {
            try {
                const file = await loader.file
                console.log(file)
                if (!file) {
                    window.alert('No file selected')
                    throw new Error('No file selected')
                }
                const formData = new FormData()
                formData.append('file', file)
                const response = await axios.post(`${HOST}/api/resource/image`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                console.log(response.data.filename)
                return {
                    default: `${HOST}/${response.data.filename}`,
                }
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        abort: () => {
            console.log('abort')
        },
    }
}

function uploadPlugin(editor: any) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
        return uploadAdapter(loader)
    }
}

export default CustomEditor