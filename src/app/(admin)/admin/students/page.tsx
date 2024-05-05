'use client'

import { Pagination, Stack } from '@mui/material'
import ComponentStudentHeader from './_components/header'
import ComponentListUser from './_components/listUser'
import IUser, { userRole } from '@/src/utils/shares/interfaces/IUser'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
    const userData: IUser[] = [
        {
            id: '1',
            mail: 'test@example.com',
            name: 'test',
            role: userRole.USER,
        },
        {
            id: '2',
            mail: 'abc@example.com',
            name: 'abc',
            role: userRole.USER,
        },
        {
            id: '3',
            mail: 'haha@example.com',
            name: 'ha ha',
            role: userRole.LECTURE,
        },
        {
            id: '4',
            mail: 'tempuser@example.com',
            name: 'temp user',
            role: userRole.TEMP_USER,
        },
        {
            id: '5',
            mail: 'test@example.com',
            name: 'test',
            role: userRole.USER,
        },
        {
            id: '6',
            mail: 'abc@example.com',
            name: 'abc',
            role: userRole.USER,
        },
        {
            id: '7',
            mail: 'haha@example.com',
            name: 'ha ha',
            role: userRole.LECTURE,
        },
        {
            id: '8',
            mail: 'tempuser@example.com',
            name: 'temp user',
            role: userRole.TEMP_USER,
        },
        {
            id: '9',
            mail: 'test@example.com',
            name: 'test',
            role: userRole.USER,
        },
        {
            id: '10',
            mail: 'abc@example.com',
            name: 'abc',
            role: userRole.USER,
        },
        {
            id: '11',
            mail: 'haha@example.com',
            name: 'ha ha',
            role: userRole.LECTURE,
        },
        {
            id: '12',
            mail: 'tempuser@example.com',
            name: 'temp user',
            role: userRole.TEMP_USER,
        },
    ]

    // const queryString = useSearchParams()
    // const [page, setPage] = useState<number>(Number.parseInt(queryString.get('page') || '1'))
    const [page, setPage] = useState<number>(1)
    return (
        <article className="flex flex-col gap-3">
            <ComponentStudentHeader />

            <ComponentListUser data={userData} page={page} />

            <div
                className="pagination"
                style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
            >
                <Stack spacing={2}>
                    <Pagination
                        count={Math.ceil(userData.length / 10)}
                        variant="outlined"
                        shape="rounded"
                        page={page}
                        onChange={handleChangePage}
                    />
                </Stack>
            </div>
        </article>
    )

    function handleChangePage(event: React.ChangeEvent<unknown>, value: number) {
        setPage(value)
    }
}
