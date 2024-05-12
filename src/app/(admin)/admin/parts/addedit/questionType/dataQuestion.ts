import { FormikProps } from "formik"
import { Part } from "../../type/Part.class"
import { UnionType } from "../../type/unionType"

export interface QuestionProps {
    formik: FormikProps<Part>
    index: number
    saveAction: (question: any) => void
    closeAction: () => void
    data:  UnionType | null
}