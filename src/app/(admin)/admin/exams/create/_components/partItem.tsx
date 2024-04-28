export default function ComponentPartItem({ data }: { data: { tags: string[] } }) {
    return (
        <section className="flex gap-2 items-center">
            <div>
                <input type="checkbox" name="" id="" />
            </div>
            <div className="flex gap-1">
                {data.tags.map((item, index) => (
                    <span
                        className="rounded px-3 py-1"
                        style={{ border: '1px solid #ccc' }}
                        key={'tags-items-' + index}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </section>
    )
}
