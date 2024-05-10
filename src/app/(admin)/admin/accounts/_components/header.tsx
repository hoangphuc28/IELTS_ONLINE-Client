'use client'
import { useState } from 'react'
import ComponentModal from './modal'
import ComponentSearch from './search'

import { userRole } from '@utils/shares/interfaces/IUser'

export default function ComponentStudentHeader() {
    const [isShow, setIsShow] = useState(false)
    return (
        <section className="bg-white rounded-lg px-5 py-4 text-base flex justify-between">
            <button
                className="text-base text-white px-3 py-2 rounded-lg border-0 outline-0 hover:opacity-[0.8]"
                style={{ backgroundImage: 'linear-gradient(60deg, #36c0fd 0%, #3672fd 100%)' }}
                type="button"
                onClick={(e) => handleShowModal()}
            >
                <i className="fa-solid fa-plus inline-block me-2"></i>
                Add Student
            </button>

            <div className="flex items-center gap-2">
                <ComponentSearch />

                <select className="rounded px-2 py-1" name="role">
                    <option value="all">All</option>
                    <option value={userRole.USER}>{userRole.USER}</option>
                    <option value={userRole.LECTURE}>{userRole.LECTURE}</option>
                    <option value={userRole.TEMP_USER}>{userRole.TEMP_USER}</option>
                </select>
            </div>

            <ComponentModal isShow={isShow} setIsShow={setIsShow} />
        </section>
    )

    function handleShowModal() {
        setIsShow(true)
    }
}
