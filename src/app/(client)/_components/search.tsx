import { useRouter } from 'next/navigation'
import { CSSProperties, FormEvent } from 'react'
import ComponentSysToast, { createToastDanger } from './toast/sysToast'
import ReactDOM from 'react-dom'
import { CONSTANT as toastConstant } from './toast/sysToast'
import { createRoot } from 'react-dom/client'
import { Container } from 'react-dom/client'
import testService from '@/services/test.service'

export default function ComponentSearch({
    className,
    style,
}: {
    className?: string
    style?: CSSProperties
}) {
    const router = useRouter()
    return (
        <>
            <form
                className={`block max-w-full mx-auto rounded overflow-hidden` + className}
                style={style}
                action="/exam-library"
                method="post"
                onSubmit={async (e) => await handleSubmitSearch(e)}
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
                            name="testCode"
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
    async function handleSubmitSearch(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            const form: HTMLFormElement = e.currentTarget
            const formData = new FormData(form)
            const data = Object.fromEntries(formData.entries())
            console.log('search: ', data?.testCode)
            if (!data?.testCode) return
            const haveCode = await testService.search(data.testCode as string)
            if (haveCode) {
                router.push('/exam-library/' + data.testCode)
                return
            }
        } catch (error) {
            console.log(error)
        }
        createToastDanger('Không tìm thấy code!')
        return
    }
}
