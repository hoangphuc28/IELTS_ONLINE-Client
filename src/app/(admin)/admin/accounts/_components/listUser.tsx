import IUser from '@utils/shares/interfaces/IUser'
import ComponentUserItem from './userItem'

export default function ComponentListUser({ data, page }: { data: IUser[]; page?: number }) {
    const currentPage = page || 1
    return (
        <section className="px-5 py-3 bg-white rounded flex flex-col gap-2 min-h-[458px]">
            <section className="grid grid-cols-12 gap-2">
                <p className="font-bold col-span-1">No.</p>
                <p className="font-bold col-span-4">Mail</p>
                <p className="font-bold col-span-4">Name</p>
                <p className="font-bold col-span-2">Role</p>
                <p className="font-bold col-span-1 text-center">Action</p>
            </section>

            {(() => {
                let jsx: JSX.Element[] = []
                for (
                    let i = (currentPage - 1) * 10;
                    i < Math.min(currentPage * 10, data.length);
                    i++
                ) {
                    const user = data[i]
                    jsx.push(
                        <ComponentUserItem key={'user-' + i + user.id} data={user} index={i + 1} />,
                    )
                }

                return jsx
            })()}
        </section>
    )
}
