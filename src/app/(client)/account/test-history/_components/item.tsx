import Link from 'next/link'

export default function HistoryItem({
    time,
    name,
    grade,
}: {
    time: string
    name: string
    grade: number
}) {
    return (
        <>
            <div className="grid grid-cols-12 gap-x-2 py-2 border-t hover:bg-gray-100">
                <p className="mb-0 col-span-3 text-base border-r">{time}</p>
                <p className="mb-0 col-span-7 text-base border-r">{name}</p>
                <p className="mb-0 col-span-1 text-base text-center">{grade}</p>
                <Link
                    className="block text-center text-base bg-violet-400 text-white rounded hover:opacity-[0.8]"
                    href="#"
                >
                    Chi tiết
                </Link>
            </div>
        </>
    )
}
