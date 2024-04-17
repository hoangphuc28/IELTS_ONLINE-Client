export default function ComponentCardMini({
    iconClass,
    name,
    title,
}: {
    iconClass: string
    name: string
    title: string
}) {
    return (
        <>
            <section className="min-w-[160px] flex flex-col gap-2 items-center bg-white border rounded overflow-hidden h-[120px] px-3 py-2">
                <i className={`${iconClass} text-3xl`}></i>
                <p className="text-sm">{name}</p>
                <p className="text-xl font-bold">{title}</p>
            </section>
        </>
    )
}
