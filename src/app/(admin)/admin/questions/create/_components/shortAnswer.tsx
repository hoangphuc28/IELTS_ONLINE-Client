'use client'
import Link from 'next/link'
import ComponentManagerAnswer from './answerManager'

export default function ComponentShortAnswer() {
    return (
        <>
            <section className="flex flex-col gap-3 ps-7 pe-3 w-full">
                <div className="flex items-start gap-3 w-full">
                    <div className="flex gap-2 items-start w-full">
                        <label htmlFor="">Group Description</label>
                        <textarea
                            className="text-base rounded-lg px-2 py-1 w-full max-w-[620px] min-h-[40px]"
                            name=""
                            id=""
                            rows={3}
                        ></textarea>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full">
                    <div className="flex gap-2 items-center w-full">
                        <label htmlFor="test-question">Question</label>
                        <input
                            className="text-base rounded-lg px-2 py-1 w-full"
                            id="test-question"
                            type="text"
                        />
                    </div>

                    <div>
                        <Link
                            href={''}
                            className="text-nowrap px-3 py-2 bg-violet-300 rounded border-0 text-base"
                        >
                            Add Question
                        </Link>
                    </div>
                </div>

                <ComponentManagerAnswer />
            </section>
        </>
    )
}
