import { MouseEvent } from 'react'

export default function ComponentBaseModel({
    handleCloseModal,
    children,
}: {
    handleCloseModal?: CallableFunction
    children: React.ReactNode
}) {
    const parentBackground = 'bg-black/20'
    return (
        <section
            onClick={(e) => handleClose(e)}
            className={
                'z-50 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center ' +
                parentBackground
            }
        >
            <section className="shadow-lg bg-white px-7 py-7 rounded -mt-[100px] text-start">
                {children}
            </section>
        </section>
    )

    function handleClose(e: MouseEvent<HTMLElement, any>) {
        e.stopPropagation()
        const target = e.target as HTMLElement
        if (!target.classList.contains(parentBackground)) return
        handleCloseModal && handleCloseModal()
    }
}
