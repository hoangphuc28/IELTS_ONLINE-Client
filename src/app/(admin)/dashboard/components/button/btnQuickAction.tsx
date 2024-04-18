'use client'
import Image, { StaticImageData } from "next/image"
import "../../styles/components/_button.scss"
import Link from "next/link";


interface Props {
    btnData: {
        text: string;
        icon: StaticImageData;
        color: string;
    };
}
export default function BtnQuicAction(props: Props) {

    return (
        <Link href="/" className="btn-quickAction">
                <div className="quickContainer">
                    <Image className="quickAction-img" src={props.btnData.icon} alt="btn-icon" />
                    <div className="quickAction-text">{props.btnData.text}</div>
                </div>
        </Link>
    )
}