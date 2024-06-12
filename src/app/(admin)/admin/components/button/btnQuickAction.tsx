'use client'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import '@admin/styles/components/_button.scss'

interface Props {
    btnData: {
        text: string
        icon: StaticImageData
        color: string
    }
    href: string
}
export default function BtnQuicAction(props: Props) {
    return (
        <Link href={props.href} className="btn-quickAction">
            <div className="quickContainer">
                <Image className="quickAction-img" src={props.btnData.icon} alt="btn-icon" />
                <div className="quickAction-text">{props.btnData.text}</div>
            </div>
        </Link>
    )
}
