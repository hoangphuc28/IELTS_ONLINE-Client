import { useFormik } from 'formik'
import { Fragment, useState } from 'react'
import { useExamContext } from '../../../providers/examProvider'
import '@admin/styles/globals.css'
import Popup from '../../../components/popup/popup'
import ChosePart from '../selectParts'
import ToolBar from '../_components/toolBar'
export default function Listening() {
    
    return (
        <div className="listening">
            <ToolBar/>
        </div>
    )
}
