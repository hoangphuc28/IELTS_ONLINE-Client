export default function ComponentFloatingInputLabel({ label, id }: { label: string; id: string }) {
    return (
        <div className="max-w-[120px] relative">
            <input
                type="text"
                name={id}
                id={id}
                className="bg-white block px-2.5 pb-2.5 pt-4 w-full
                text-sm text-gray-90
                rounded-lg border-1 border-gray-300 appearance-none
                focus:outline-none focus:ring-0 focus:border-blue-600
                peer"
                placeholder=""
            />
            <label
                htmlFor={id}
                className="
                absolute bg-[transparent] text-gray-500 duration-300 transform -translate-y-4 scale-100
                top-2 start-1 z-10 origin-[0] bg-white px-2
                peer-focus:px-2 peer-focus:text-blue-600
                peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
                peer-placeholder-shown:top-1/2
                peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4
                rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
                "
            >
                {label}
            </label>
        </div>
    )
}
