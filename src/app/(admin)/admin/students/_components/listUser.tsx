import IUser from '@utils/shares/interfaces/IUser'
import ComponentUserItem from './userItem'

export default function ComponentListUser({ data }: { data: IUser[] }) {
    return (
        <section className="px-5 py-3 bg-white rounded flex flex-col gap-2">
            <section className="grid grid-cols-12 gap-2">
                <p className="font-bold col-span-1">No.</p>
                <p className="font-bold col-span-4">Mail</p>
                <p className="font-bold col-span-4">Name</p>
                <p className="font-bold col-span-2">Role</p>
                <p className="font-bold col-span-1 text-center">Action</p>
            </section>

            {data.map((user, index) => (
                <ComponentUserItem key={'user-' + index + user.id} data={user} index={index} />
            ))}
        </section>
    )
}
