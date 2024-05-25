'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { ComponentCardTestItem } from '@clientExamLibrary/[id]/_components/cardTestItem'

export function ComponentTestItem({
    color,
    name,
    time,
    checked,
    callback,
}: {
    color: string
    name: string
    time: string
    checked: boolean
    callback?: CallableFunction
}) {
    const [isClient, setIsClient] = useState(false)
    const tempId = name + new Date().getTime().toString() + (100 * Math.random()).toString()

    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <>
            {isClient && (
                <section className="flex flex-col gap-2">
                    <section className="text-center">
                        <input
                            className="rounded"
                            type="checkbox"
                            id={tempId}
                            name={name}
                            onChange={handleChangeCheckBox}
                            checked={checked}
                        />
                    </section>
                    <label htmlFor={tempId} className="cursor-pointer select-none">
                        <ComponentCardTestItem
                            color={color}
                            name={name}
                            time={time}
                            // data={miniTest}
                            // testId={test.code}
                            // examProgress={examProgresses[index] as any[]}
                            // maxExam={maxExams[index]}
                        />
                    </label>
                </section>
            )}
        </>
    )

    function handleChangeCheckBox(e: ChangeEvent<HTMLInputElement>) {
        if (callback) callback()
    }
}
