'use client'
interface Props {
    forwardedRef: React.RefObject<HTMLDivElement>;
    max: number;
}
import "@admin/styles/components/_resizer.scss"
import ResizeIcon from "@/public/admin/img/drager.png"
export default function Resizer({ forwardedRef, max }: Props) {
    const Resizer = (event: React.MouseEvent<HTMLDivElement>) => {
        const OnMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
            let newX = preX - event.x;
            let newWidth = (leftPanel?.width-newX);
            if( newWidth< max && newWidth) {
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