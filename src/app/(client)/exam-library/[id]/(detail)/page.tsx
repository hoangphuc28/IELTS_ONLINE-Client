'use client'
import ITest from '@/src/utils/shares/interfaces/ITest'
import ComponentCardInfo from '@clientExamLibrary/[id]/_components/cardInfo'
import LayoutCenter from '@client/_components/layoutCenter'
import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()
    const [isClient, setIsClient] = useState(false)
    const test: ITest = {
        code: 'haha',
        name: 'IELTS Mock Test 2023 December',
        title: 'Bài này để làm mẫu',
        description: 'Bài này để làm mẫu, gió thoang thoảng, âm vang lăn tăn, tí tắt tí tắt...',
        src: '',
        createdAt: new Date().toLocaleString(),
        details: [],
        hasPassword: true,
        status: '',
        time: '03:00:00',
        updatedAt: new Date().toLocaleString(),
    }
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <>
            <section className="my-5 min-h-[80vh]">
                {isClient && (
                    <LayoutCenter>
                        <ComponentCardInfo data={test} />
                        <section className="mt-3 bg-white px-4 py-3">
                            <form
                                onSubmit={async (e) => await handleStartTest(e)}
                                action=""
                                method="post"
                            >
                                <h2 className="font-bold text-lg text-red-600 mb-3">
                                    The test is ready!
                                </h2>
                                {/* {test.hasPassword && (
                                    <section>
                                        <h2 className="font-bold text-lg text-red-600 mb-3">
                                            Để tham gia bài kiểm tra này, bạn cần biết mật khẩu
                                        </h2>

                                        <section className="flex justify-center">
                                            <section className="flex max-w-[400px] gap-3 items-center">
                                                <label
                                                    htmlFor="testPassword"
                                                    className="mb-2 text-base font-medium text-gray-900 dark:text-white"
                                                >
                                                    Mật khẩu
                                                </label>
                                                <input
                                                    type="password"
                                                    id="testPassword"
                                                    className="grow bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                                    placeholder="Vui lòng nhập mật khẩu..."
                                                    name="testPassword"
                                                    required
                                                />
                                            </section>
                                        </section>
                                    </section>
                                )} */}
                                <div className="text-center mt-3">
                                    <button
                                        className="bg-blue-400 text-white text-lg px-3 py-2 rounded-3xl"
                                        type="submit"
                                    >
                                        Bắt đầu làm bài
                                    </button>
                                </div>
                            </form>
                        </section>
                    </LayoutCenter>
                )}
            </section>
        </>
    )

    function handleStartTest(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        // const form = e.currentTarget as HTMLFormElement
        // const formData = new FormData(form)
        // const data = Object.fromEntries(formData.entries())
        // if (!data?.testPassword) return
        // console.log('check code with server')
        // const isCorrect = true
        // if (isCorrect) {
        //     router.push('/exam-library/' + test.code + '/overview')
        //     return
        // }
        router.push('/exam-library/' + test.code + '/overview')
    }
}
