'use client'

import IUser, { userRole } from '@utils/shares/interfaces/IUser'
import Link from 'next/link'
import ComponentInputDropDown from './inputDropDown'

export default function ComponentUserItem({ index, data }: { index: number; data: IUser }) {
    return (
        <section className="grid grid-cols-12 gap-2">
            <p className="col-span-1">{index}</p>
            <p className="col-span-4">{data.mail}</p>
            <p className="col-span-4">{data.name}</p>
            <div className="col-span-2">
                <ComponentInputDropDown
                    data={[userRole.LECTURE, userRole.TEMP_USER, userRole.USER]}
                    defaultValue={data.role}
                />
            </div>
            <Link
                href=""
                className="inline-flex items-center justify-center col-span-1 text-center text-white bg-red-400 rounded px-2 py-1"
            >
                <i className="fa-solid fa-xmark"></i>
            </Link>
        </section>
    )
}
