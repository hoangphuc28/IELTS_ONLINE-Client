'use client'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { UploadAdapter, FileLoader } from '@ckeditor/ckeditor5-upload/src/filerepository'
import Editor from 'ckeditor5-custom-build'
import axios from 'axios'
import { useState } from 'react'
import { HOST } from '@/src/utils/constanst/host'
import { FormikProps } from 'formik'
import { Part } from '../../../type/Part.class'
interface Props {
    formik: FormikProps<Part>
    index: number
    saveData: (data: any) => void
    data: string
}

const CustomEditor = ({ formik, index, saveData, data }: Props) => {
    const editorConfiguration = {
        toolbar: [
            'Alignment',
            'Autoformat',
            'Bold',
            'Essentials',
            'Heading',
            'Image',
            'ImageInsert',
            'ImageResize',
            'ImageStyle',
            'ImageToolbar',
            'ImageUpload',
            'Italic',
            'Paragraph',
            'PasteFromOffice',
            'Table',
            'TextTransformation',
            'Underline',
            'Undo',
        ],
    }
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
            onReady={(editor: any) => {}}
            onBlur={(event: any, editor: any) => {}}
            onFocus={(event: any, editor: any) => {}}
            onChange={(event: any, editor: any) => {
                console.log(editor.getData());
                saveData(editor.getData());
                setEditorData(editor.getData());
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
            console.log('abort')
        },
    }
}

function uploadPlugin(editor: Editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return uploadAdapter(loader)
    }
}

export default CustomEditor
