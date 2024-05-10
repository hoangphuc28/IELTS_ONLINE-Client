'use client'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { UploadAdapter, FileLoader } from '@ckeditor/ckeditor5-upload/src/filerepository'
import Editor from "ckeditor5-custom-build";

import axios from 'axios'
import { useState } from 'react'
import { HOST } from '@/src/utils/constanst/host'
import { FormikProps } from 'formik'
import { Part } from '../../../type/Part.class'
// import { Alignment } from '@ckeditor/ckeditor5-alignment'
// import { Autoformat } from '@ckeditor/ckeditor5-autoformat'
// import { Bold, Italic, Underline } from '@ckeditor/ckeditor5-basic-styles'
// import type { EditorConfig } from '@ckeditor/ckeditor5-core'
// import { Essentials } from '@ckeditor/ckeditor5-essentials'
// import { FontSize } from '@ckeditor/ckeditor5-font'
// import { Image, ImageResize, ImageUpload } from '@ckeditor/ckeditor5-image'
// import { Link } from '@ckeditor/ckeditor5-link'
// import { Paragraph } from '@ckeditor/ckeditor5-paragraph'
// import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office'
// import { Table, TableToolbar } from '@ckeditor/ckeditor5-table'
// import { Undo } from '@ckeditor/ckeditor5-undo'
import config from '../../../../../../../../tailwind.config'
interface Props {
    formik: FormikProps<Part>
    index: number
    saveData: (data: any) => void
    data: string
}

const CustomEditor = ({ formik, index, saveData, data }: Props) => {
    const editorConfiguration = {
        toolbar: [
            'undo',
            'redo',
            'bold',
            'italic',
            'underline',
            'alignment',
            'fontSize',
            '|',
            'imageUpload',
            'link',
            'insertTable'
        ]
    };
    const [editorData, setEditorData] = useState('')
    return (
        <div className={`${index}`}>
            <CKEditor
                editor={Editor}
                // config={editorConfiguration}
                config={{
                    editorConfiguration,
                    extraPlugins: [uploadPlugin],
                }}
                onReady={(editor) => {}}
                onBlur={(event, editor) => {}}
                onFocus={(event, editor) => {}}
                onChange={(event, editor) => {
                    console.log(editor.getData())
                    saveData(editor.getData())
                    setEditorData(editor.getData())
                }}
                data={data}
            />
        </div>
    )
}
function uploadAdapter(loader: FileLoader): UploadAdapter {
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
                const response = await axios.post(`${HOST}/api/upload`, formData, {
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
            console.log('afaf')
        },
    }
}

function uploadPlugin(editor: Editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return uploadAdapter(loader)
    }
}

export default CustomEditor
