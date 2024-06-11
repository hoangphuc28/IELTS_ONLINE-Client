import { FormikProps } from 'formik'
import { Part } from '../../../type/Part.class'
import { PartEnum, SkillEnum } from '../../../type/enum'
import PartResource from './partResource'
import PartContent from './partContent'
import { Fragment } from 'react'

interface Props {
    formik: FormikProps<Part>
}
export default function SKillInformation({ formik }: Props) {
    const renderComponent = () => {
        switch (formik.values.skill) {
            case SkillEnum.LISTENING:
                return <PartResource formik={formik} />
            case SkillEnum.READING:
                return <PartContent formik={formik} />
            case SkillEnum.WRITING:
                return <PartContent formik={formik} />
            case SkillEnum.SPEAKING: {
                if (formik.values.partNumber === PartEnum.Part2) return <PartContent formik={formik} />
            }
            default:
                return <PartResource formik={formik} />
        }
    }
    const component = renderComponent()
    return <Fragment>{component}</Fragment>
}
