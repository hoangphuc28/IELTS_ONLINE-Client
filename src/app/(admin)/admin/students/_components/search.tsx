'use client'

import { FormEvent } from 'react'
import ComponentInputDropDown from './inputDropDown'

export enum typeRow {
    mail = 'Mail',
    name = 'Name',
}

export default function ComponentSearch({}: {}) {
    return (
        <form className="mx-auto" method="post" action="" onSubmit={(e) => handleSubmit(e)}>
            <div className="flex items-center rounded" style={{ border: '1px solid #ddd' }}>
                <ComponentInputDropDown data={[typeRow.mail, typeRow.name]} />

                <div>
                    <input
                        className="px-2 py-1 text-base rounded border-0 outline-0"
                        type="text"
                        placeholder="Search..."
                    />
                </div>

                <button className="hidden" type="submit"></button>
            </div>
        </form>
    )

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(e)
    }
}
