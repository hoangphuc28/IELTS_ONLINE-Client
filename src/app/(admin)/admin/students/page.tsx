import { Pagination, Stack } from '@mui/material'
import ComponentStudentHeader from './_components/header'
import ComponentListUser from './_components/listUser'
import IUser, { userRole } from '@/src/utils/shares/interfaces/IUser'
import ComponentModal from './_components/modal'

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
    ]
    return (
        <article className="flex flex-col gap-3">
            <ComponentStudentHeader />

            <ComponentListUser data={userData} />

            <div
                className="pagination"
                style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
            >
                <Stack spacing={2}>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
            </div>
        </article>
    )
}
