'use client'
interface Props {
    forwardedRef: React.RefObject<HTMLDivElement>;
}
import Image from "next/image";
import "../styles/components/_resizer.scss"
import ResizeIcon from "@/public/admin/img/drager.png"
export default function Resizer({ forwardedRef }: Props) {
    const Resizer = (event: React.MouseEvent<HTMLDivElement>) => {
        const OnMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {

            let newX = preX - event.x;
            let newWidth = (leftPanel?.width-newX);
            if( newWidth< 600 && newWidth) {
                forwardedRef.current.style.width = newWidth + "px";

            }
        }
        const OnMouseUp = () => {
            document.removeEventListener("mousemove", OnMouseMove)
            document.removeEventListener("mouseup", OnMouseUp)
        }
        document.addEventListener("mousemove", OnMouseMove)
        document.addEventListener("mouseup", OnMouseUp)

        let preX = event.clientX;
        let leftPanel = forwardedRef?.current?.getBoundingClientRect()
    }
    return (
        <div
        style={{background: `url(${ResizeIcon.src})`, backgroundPosition: 'center',}}
            onMouseDown={Resizer}
            className="resizer">
            </div>
    )
}