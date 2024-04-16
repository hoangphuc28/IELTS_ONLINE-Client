import { CSSProperties } from 'react'

export default function ComponentSearch({
    className,
    style,
}: {
    className?: string
    style?: CSSProperties
}) {
    return (
        <>
            <form
                className={`block max-w-full mx-auto rounded overflow-hidden` + className}
                style={style}
                action=""
                method="post"
            >
                <div className="relative" style={{ borderRadius: 'inherit' }}>
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none cursor-alias">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="flex overflow-hidden" style={{ borderRadius: 'inherit' }}>
                        <input
                            type="search"
                            id="default-search"
                            className="block grow px-4 py-2 ps-10 text-base text-gray-900 border-0 focus:ring-0 focus:outline-0 bg-gray-50 bg-transparent"
                            placeholder="Mã kiểm tra..."
                            required
                        />
                        <button
                            type="submit"
                            className="border-l text-black focus:outline-none font-medium text-sm px-4 py-2 hover:opacity-[0.6]"
                        >
                            Tìm kiếm
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
