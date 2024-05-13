'use client'
interface Props {
    forwardedRef: React.RefObject<HTMLDivElement>
    max: number
}
import '@admin/styles/components/_resizer.scss'
import ResizeIcon from '@/public/admin/img/drager.png'
import { left } from '@popperjs/core'
export default function Resizer({ forwardedRef, max }: Props) {
    const Resizer: React.MouseEventHandler<HTMLDivElement> = (event) => {
        const OnMouseMove: (event: MouseEvent) => void = (event) => {
            let leftPanel = forwardedRef?.current?.getBoundingClientRect()

            if (leftPanel) {
                let newX = preX - event.pageX
                let newWidth = leftPanel?.width - newX
                if (newWidth < max && newWidth) {
                    if (forwardedRef.current) {
                        forwardedRef.current.style.width = newWidth + 'px'
                    }
                }
            }
        }

        const OnMouseUp: () => void = () => {
            document.removeEventListener('mousemove', OnMouseMove)
            document.removeEventListener('mouseup', OnMouseUp)
        }

        document.addEventListener('mousemove', OnMouseMove)
        document.addEventListener('mouseup', OnMouseUp)
        let preX = event.clientX
    }

    return (
        <div
            style={{ background: `url(${ResizeIcon.src})`, backgroundPosition: 'center' }}
            onMouseDown={Resizer}
            className="resizer"
        ></div>
    )
}
