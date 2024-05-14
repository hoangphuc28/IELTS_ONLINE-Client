import { FormikProps } from 'formik'
import { Fragment, useMemo, useState } from 'react'
import { Part } from '../../../type/Part.class'
import { PartEnum, SkillEnum, SkillPart } from '../../../type/enum'
import dynamic from 'next/dynamic'
interface BasicInformationProps {
    formik: FormikProps<Part>
}
export default function PartInformation({ formik }: BasicInformationProps) {
    const skillOptions: SkillPart[] = [
        {
            skill: SkillEnum.LISTENING,
            parts: [PartEnum.Part1, PartEnum.Part2, PartEnum.Part3, PartEnum.Part4],
        },
        {
            skill: SkillEnum.READING,
            parts: [PartEnum.Part1, PartEnum.Part2, PartEnum.Part3],
        },
        {
            skill: SkillEnum.WRITING,
            parts: [PartEnum.Part1, PartEnum.Part2],
        },
        {
            skill: SkillEnum.SPEAKING,
            parts: [PartEnum.Part1, PartEnum.Part2, PartEnum.Part3],
        },
    ]
    const [skill, setSkill] = useState(formik.values.skill)
    const changeSkill = (event: any) => {

        const { name, value } = event.target
        formik.setFieldValue(name, value)
        setSkill(value)
        formik.setFieldValue('partNumber', PartEnum.Part1)
    }
    return (
        <Fragment>
            <div className="mt-3">
                <label className="title-label" htmlFor="skill">
                    Skill
                </label>
                <select
                    style={{ width: '75%' }}
                    className="form-control h-8 mt-2 ml-5"
                    id="skill"
                    name="skill"
                    onChange={changeSkill}
                    value={formik.values.skill}
                >
                    {skillOptions.map((item, index) => (
                        <Fragment key={index}>
                            <option>{item.skill}</option>
                        </Fragment>
                    ))}
                </select>
            </div>
            <div className="mt-3">
                <label className="title-label" htmlFor="partNumber">
                    Part
                </label>
                <select
                    style={{ width: '75%' }}
                    className="form-control h-8 mt-2 ml-5"
                    id="partNumber"
                    name="partNumber"
                    onChange={formik.handleChange}
                    value={formik.values.partNumber}
                >
                    {skillOptions
                        .find((item) => item.skill === skill)
                        ?.parts.map((element, index) => (
                            <option key={index}>{element}</option>
                        ))}
                </select>
            </div>
        </Fragment>
    )
}
