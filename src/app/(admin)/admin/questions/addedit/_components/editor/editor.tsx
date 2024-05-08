'use client'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { Editor } from '@ckeditor/ckeditor5-core'
import { UploadAdapter, FileLoader } from '@ckeditor/ckeditor5-upload/src/filerepository'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import axios from 'axios'
import { useState } from 'react'
import { HOST } from '@/src/utils/constanst/host'
import { FormikProps } from 'formik'
import { QuestionType } from '../../../type/enum'
import { GroupQuestion } from '../../../type/GroupQuestion.class'
import { Part } from '../../../type/Part.class'
interface Props {
    formik: FormikProps<Part>
    index: number
    saveData: (data: any) => void
    data: string
}

const CustomEditor = ({formik, index, saveData, data}: Props) => {
    const [editorData, setEditorData] = useState('')
    return (
          <div className={`${index}`}>
              <CKEditor
                editor={ClassicEditor}
                config={{
                    extraPlugins: [uploadPlugin],
                }}
                onReady={(editor) => {

                }}
                onBlur={(event, editor) => {

                }}
                onFocus={(event, editor) => {

                }}
                onChange={(event, editor) => {
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
