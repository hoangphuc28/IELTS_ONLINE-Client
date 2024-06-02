export default function ComponentBaseModel({ children }: { children: React.ReactNode }) {
    return (
        <section className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-black/20 flex items-center justify-center">
            <section className="shadow-lg bg-white px-7 py-7 rounded -mt-[100px] text-start">
                {children}
            </section>
        </section>
    )
}
